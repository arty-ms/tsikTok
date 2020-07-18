import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import Input from '../../components/common/input';
import Button from '../../components/common/button';
import Form, {
  FormSection,
  FormSectionAction,
} from '../../components/common/form';
import useStyle from './SignInStyle';
import LoadingContext from '../../contexts/LoadingContext';

const SignIn = (props) => {
  const {
    formData,
    onFormDataChange,
    onSignInButtonClick,
    onSignUpButtonClick,
    onResetButtonClick,
  } = props;

  const {t} = useTranslation();
  const classes = useStyle();
  const {isLoading} = useContext(LoadingContext);
  const isFormLoading = isLoading('signIn');

  return (
    <div className={classes.rootWrapper}>
      <Form
        className={classes.root}
        title={t('SIGN_IN_FORM_TITLE')}
        onEnter={() => {
          if (!formData.isValid || isFormLoading) {
            return;
          }

          onSignInButtonClick();
        }}
      >
        <FormSection>
          <Input
            autoFocus
            label={t('SIGN_IN_FORM_PHONE')}
            disabled={isFormLoading}
            error={formData.phone.error}
            value={formData.phone.value}
            onChange={(e) => onFormDataChange('phone', e.target.value)}
          />
          <Input
            type='password'
            label={t('SIGN_IN_FORM_PASSWORD')}
            disabled={isFormLoading}
            error={formData.password.error}
            value={formData.password.value}
            onChange={(e) => onFormDataChange('password', e.target.value)}
          />
        </FormSection>
        <FormSectionAction>
          <Button
            onClick={onSignUpButtonClick}
          >
            {t('SIGN_IN_FORM_SIGN_UP')}
          </Button>
          <Button
            onClick={onResetButtonClick}
          >
            {t('SIGN_IN_FORM_RESET')}
          </Button>
          <Button
            onClick={onSignInButtonClick}
            type='primary'
            disabled={!formData.isValid || isFormLoading}
            spin={isFormLoading}
          >
            {t('SIGN_IN_FORM_CONTINUE')}
          </Button>
        </FormSectionAction>
      </Form>
    </div>
  );
};

SignIn.propTypes = {
  formData: PropTypes.object,
  onFormDataChange: PropTypes.func,
  onSignInButtonClick: PropTypes.func,
  onSignUpButtonClick: PropTypes.func,
  onResetButtonClick: PropTypes.func,
};

export default SignIn;
