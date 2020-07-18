import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import Input from '../../components/common/input';
import Button from '../../components/common/button';
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
    onBackButtonClick,
  } = props;

  const {t} = useTranslation();
  const classes = useStyle();
  const {isLoading} = useContext(LoadingContext);
  const isFormLoading = isLoading('verifyCode');

  return (
    <div className={classes.rootWrapper}>
      <Form
        className={classes.root}
        title={t('SIGN_UP_SECURITY_STEP_FORM_TITLE')}
        onEnter={() => {
          if (!formData.isValid || isFormLoading) {
            return;
          }

          onContinueClick();
        }}
      >
        <FormSection>
          <Input
            autoFocus
            label={t('SIGN_UP_SECURITY_STEP_FORM_CODE')}
            disabled={isFormLoading}
            error={formData.code.error}
            value={formData.code.value}
            onChange={(e) => onFormDataChange('code', e.target.value)}
          />
        </FormSection>
        <FormSectionAction>
          <Button
            onClick={onBackButtonClick}
          >
            {t('SIGN_UP_PHONE_SECURITY_FORM_BACK')}
          </Button>
          <Button
            onClick={onContinueClick}
            type='primary'
            disabled={!formData.isValid || isFormLoading}
            spin={isFormLoading}
          >
            {t('SIGN_UP_PHONE_SECURITY_FORM_CONTINUE')}
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
  onBackButtonClick: PropTypes.func,
};

export default PhoneStep;
