import React, { useState, useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import PhoneStep from '../../components/sign-up/PhoneStep';
import SecurityStep from '../../components/sign-up/SecurityStep';
import FinishStep from '../../components/sign-up/FinishStep';
import AuthorizationAPI from '../../APIs/AuthorizationAPI';
import AuthorizationContext from '../../contexts/AuthorizationContext';
import NotificationContext from '../../contexts/NotificationContext';
import LoadingContext from '../../contexts/LoadingContext';
import useValidation from '../../hooks/UseValidation';
import {
  PasswordRegex,
  OnlyNumberRegex,
} from '../../constants/Regex';

export const PhoneStateSchema = {
  phone: {
    value: '',
    error: null,
  },
};
export const PhoneValidationSchema = {
  phone: {
    required: true,
    validator: {
      regEx: OnlyNumberRegex,
      error: 'VALIDATION_ERROR_SIGN_UP_FORM_PHONE',
    },
  },
};

export const CodeStateSchema = {
  code: {
    value: '',
    error: null,
  },
};
export const CodeValidationSchema = {
  code: {
    required: true,
    validator: {
      regEx: OnlyNumberRegex,
      error: 'VALIDATION_ERROR_SIGN_UP_FORM_SECURITY',
    },
  },
};

export const FinishStateSchema = {
  firstName: {
    value: '',
    error: null,
  },
  lastName: {
    value: '',
    error: null,
  },
  password: {
    value: '',
    error: null,
  },
  repeatPassword: {
    value: '',
    error: null,
  },
};
export const FinishValidationSchema = {
  firstName: {
    required: true,
  },
  lastName: {
    required: true,
  },
  password: {
    required: true,
    validator: {
      regEx: PasswordRegex,
      error: 'VALIDATION_ERROR_SIGN_UP_FORM_PASSWORD',
    },
  },
  repeatPassword: {
    required: true,
    validator: (currentValue, currentState) => {
      if (currentValue !== currentState.password.value) {
        return 'VALIDATION_ERROR_SIGN_UP_FORM_REPEAT_PASSWORD';
      }

      return null;
    },
  },
};

export const SIGN_UP_PAGE_STEPS = {
  phone: 'phone',
  security: 'security',
  finish: 'finish',
};

const SignUpPage = (props) => {
  const {history} = props;
  const {t} = useTranslation();
  const {authorize} = useContext(AuthorizationContext);
  const {showErrorNotification} = useContext(NotificationContext);
  const {
    startSavingData,
    stopSavingData,
  } = useContext(LoadingContext);

  const [currentStep, setCurrentStep] = useState(SIGN_UP_PAGE_STEPS.phone);
  const [verificationToken, setVerificationToken] = useState(null);
  const [signUpToken, setSignUpToken] = useState(null);

  const [phoneStepFormData, onPhoneStepFormDataChange] = useValidation(
    PhoneStateSchema, PhoneValidationSchema);
  const [codeStepFormData, onCodeStepFormDataChange] = useValidation(
    CodeStateSchema, CodeValidationSchema);
  const [finishStepFormData, onFinishStepFormDataChange] = useValidation(
    FinishStateSchema, FinishValidationSchema);

  const urlParams = new URLSearchParams(location.search);
  const returnUrl = decodeURIComponent(urlParams.get('returnUrl') || '');

  const onPhoneStepContinueClick = async () => {
    try {
      startSavingData('verifyPhone');

      const phone = phoneStepFormData.phone.value;
      const token = await AuthorizationAPI.initiateSignUp(phone);

      setVerificationToken(token);
      setCurrentStep(SIGN_UP_PAGE_STEPS.security);
    } catch (error) {
      showErrorNotification(error.message);
    } finally {
      stopSavingData('verifyPhone');
    }
  };

  const onSignInButtonClick = () => {
    history.push({
      pathname: '/sign-in',
      search: `?${urlParams.toString()}`,
    });
  };

  const onResetButtonClick = () => {
    history.push({
      pathname: '/reset',
      search: `?${urlParams.toString()}`,
    });
  };

  const onCodeStepContinueClick = async () => {
    try {
      startSavingData('verifyCode');

      const code = codeStepFormData.code.value;
      const token = await AuthorizationAPI.verifyCode(code, verificationToken);

      setSignUpToken(token);
      setCurrentStep(SIGN_UP_PAGE_STEPS.finish);
    } catch (error) {
      showErrorNotification(t('REGISTER_CODE_INVALID_MESSAGE'));
    } finally {
      stopSavingData('verifyCode');
    }
  };

  const onFinishButtonClick = async () => {
    try {
      startSavingData('signUpFinish');

      const signUpData = {
        firstName: finishStepFormData.firstName.value,
        lastName: finishStepFormData.lastName.value,
        password: finishStepFormData.password.value,
      };
      await AuthorizationAPI.signUp(signUpData, signUpToken);

      await authorize();

      if (returnUrl) {
        history.push(returnUrl);
      } else {
        history.push('/');
      }
    } catch (error) {
      showErrorNotification(error.message);
    } finally {
      stopSavingData('signUpFinish');
    }
  };

  if (currentStep === SIGN_UP_PAGE_STEPS.phone) {
    return (
      <PhoneStep
        formData={phoneStepFormData}
        onFormDataChange={onPhoneStepFormDataChange}
        onContinueClick={onPhoneStepContinueClick}
        onSignInButtonClick={onSignInButtonClick}
        onResetButtonClick={onResetButtonClick}
      />
    );
  }

  if (currentStep === SIGN_UP_PAGE_STEPS.security) {
    return (
      <SecurityStep
        formData={codeStepFormData}
        onFormDataChange={onCodeStepFormDataChange}
        onContinueClick={onCodeStepContinueClick}
        onBackButtonClick={() => setCurrentStep(SIGN_UP_PAGE_STEPS.phone)}
      />
    );
  }

  if (currentStep === SIGN_UP_PAGE_STEPS.finish) {
    return (
      <FinishStep
        formData={finishStepFormData}
        onFormDataChange={onFinishStepFormDataChange}
        onFinishButtonClick={onFinishButtonClick}
        onBackButtonClick={() => setCurrentStep(SIGN_UP_PAGE_STEPS.phone)}
      />
    );
  }

  return null;
};

SignUpPage.propTypes = {
  history: PropTypes.object,
};

export default withRouter(SignUpPage);
