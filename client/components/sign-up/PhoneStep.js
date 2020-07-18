import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import Input from '../../components/common/input';
import Button from '../../components/common/button';
import Avatar from '../../components/common/avatar';
import Form, {
  FormSection,
  FormSectionAction,
} from '../../components/common/form';
import useStyle from './SignUpStyle';
import LoadingContext from '../../contexts/LoadingContext';

const PhoneStep = (props) => {
  const {
    formData,
    onFormDataChange,
    onContinueClick,
    onSignInButtonClick,
    onResetButtonClick,
  } = props;

  const {t} = useTranslation();
  const classes = useStyle();
  const {isLoading} = useContext(LoadingContext);
  const isFormLoading = isLoading('verifyPhone');

  return (
    <div className={classes.rootWrapper}>
      <Form
        className={classes.root}
        title={t('SIGN_UP_PHONE_STEP_FORM_TITLE')}
        onEnter={() => {
          if (!formData.isValid || isFormLoading) {
            return;
          }

          onContinueClick();
        }}
      >
        <FormSection>
          <div className={classes.inputsWrapper}>
            <Input
              label={t('SIGN_UP_PHONE_STEP_FORM_PHONE')}
              disabled={isFormLoading}
              error={formData.phone.error}
              value={formData.phone.value}
              onChange={(e) => onFormDataChange('phone', e.target.value)}
            />
          </div>
        </FormSection>
        <FormSectionAction>
          <Button
            onClick={onSignInButtonClick}
          >
            {t('SIGN_UP_PHONE_STEP_FORM_SIGN_IN')}
          </Button>
          <Button
            onClick={onResetButtonClick}
          >
            {t('SIGN_IN_FORM_RESET')}
          </Button>
          <Button
            onClick={onContinueClick}
            type='primary'
            disabled={!formData.isValid || isFormLoading}
            spin={isFormLoading}
          >
            {t('SIGN_UP_PHONE_STEP_FORM_CONTINUE')}
          </Button>
        </FormSectionAction>
      </Form>
    </div>
  );
};

PhoneStep.propTypes = {
  formData: PropTypes.object,
  onFormDataChange: PropTypes.func,
  onContinueClick: PropTypes.func,
  onSignInButtonClick: PropTypes.func,
  onResetButtonClick: PropTypes.func,
};

export default PhoneStep;
