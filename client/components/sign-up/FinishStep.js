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

const FinishStep = (props) => {
  const {
    formData,
    onFormDataChange,
    onFinishButtonClick,
    onBackButtonClick,
  } = props;

  const {t} = useTranslation();
  const classes = useStyle();
  const {isLoading} = useContext(LoadingContext);
  const isFormLoading = isLoading('signUpFinish');

  return (
    <div className={classes.rootWrapper}>
      <Form
        className={classes.root}
        title={t('SIGN_UP_FINISH_STEP_FORM_TITLE')}
        onEnter={() => {
          if (!formData.isValid || isFormLoading) {
            return;
          }

          onFinishButtonClick();
        }}
      >
        <FormSection>
          <Input
            autoFocus
            label={t('SIGN_UP_FINISH_STEP_FORM_FIRST_NAME')}
            disabled={isFormLoading}
            error={formData.firstName.error}
            value={formData.firstName.value}
            onChange={(e) => onFormDataChange('firstName', e.target.value)}
          />
          <Input
            label={t('SIGN_UP_FINISH_STEP_FORM_LAST_NAME')}
            disabled={isFormLoading}
            error={formData.lastName.error}
            value={formData.lastName.value}
            onChange={(e) => onFormDataChange('lastName', e.target.value)}
          />
          <Input
            type='password'
            label={t('SIGN_UP_FINISH_STEP_FORM_PASSWORD')}
            disabled={isFormLoading}
            error={formData.password.error}
            value={formData.password.value}
            onChange={(e) => onFormDataChange('password', e.target.value)}
          />
          <Input
            type='password'
            label={t('SIGN_UP_FINISH_STEP_FORM_REPEAT_PASSWORD')}
            disabled={isFormLoading}
            error={formData.repeatPassword.error}
            value={formData.repeatPassword.value}
            onChange={(e) => onFormDataChange('repeatPassword', e.target.value)}
          />
        </FormSection>
        <FormSectionAction>
          <Button
            onClick={onBackButtonClick}
          >
            {t('SIGN_UP_FINISH_FORM_BACK')}
          </Button>
          <Button
            onClick={onFinishButtonClick}
            type='primary'
            disabled={!formData.isValid || isFormLoading}
            spin={isFormLoading}
          >
            {t('SIGN_UP_FINISH_FORM_FINISH')}
          </Button>
        </FormSectionAction>
      </Form>
    </div>
  );
};

FinishStep.propTypes = {
  formData: PropTypes.object,
  onFormDataChange: PropTypes.func,
  onFinishButtonClick: PropTypes.func,
  onBackButtonClick: PropTypes.func,
};

export default FinishStep;
