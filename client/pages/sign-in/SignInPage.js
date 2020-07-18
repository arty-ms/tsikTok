import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import SignIn from '../../components/sign-in/SignIn';
import AuthorizationContext from '../../contexts/AuthorizationContext';
import LoadingContext from '../../contexts/LoadingContext';
import NotificationContext from '../../contexts/NotificationContext';
import useValidation from '../../hooks/UseValidation';
import Logger from '../../services/Logger';

export const SignInStateSchema = {
  phone: {
    value: '',
    error: null,
  },
  password: {
    value: '',
    error: null,
  },
};

export const SignInValidationSchema = {
  phone: {
    required: true,
    validator: null,
  },
  password: {
    required: true,
    validator: null,
  },
};

const SignInPage = ({history}) => {
  const {signIn} = useContext(AuthorizationContext);
  const {startSavingData, stopSavingData} = useContext(LoadingContext);
  const {showErrorNotification} = useContext(NotificationContext);
  const [formData, onFormDataChange] = useValidation(SignInStateSchema,
    SignInValidationSchema);
  const urlParams = new URLSearchParams(location.search);
  const returnUrl = decodeURIComponent(urlParams.get('returnUrl') || '');

  const onSignInButtonClick = async () => {
    try {
      startSavingData('signIn');

      const [user, error] = await signIn(formData.phone.value,
        formData.password.value);

      if (error) {
        showErrorNotification(error.message);
        return;
      }

      if (user) {
        if (returnUrl) {
          history.push(returnUrl);
        } else {
          history.push('/');
        }
      }
    } catch (error) {
      Logger.error(error);
      showErrorNotification(error.message);
    } finally {
      stopSavingData('signIn');
    }
  };
  const onSignUpButtonClick = () => {
    history.push({
      pathname: '/sign-up',
      search: `?${urlParams.toString()}`,
    });
  };
  const onResetButtonClick = () => {
    history.push({
      pathname: '/reset',
      search: `?${urlParams.toString()}`,
    });
  };

  return (
    <SignIn
      formData={formData}
      onFormDataChange={onFormDataChange}
      onSignInButtonClick={onSignInButtonClick}
      onSignUpButtonClick={onSignUpButtonClick}
      onResetButtonClick={onResetButtonClick}
    />
  );
};

SignInPage.propTypes = {
  history: PropTypes.object,
};

export default withRouter(SignInPage);
