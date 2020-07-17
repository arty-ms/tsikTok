import { useCallback, useEffect, useState } from 'react';

export const isEmpty = (value) => {
  if (value === null) {
    return true;
  }

  if (typeof value === 'undefined') {
    return true;
  }

  return typeof value === 'string' && value.length === 0;
};

export const applyValidator = (propertySchema, value, state) => {
  const propertyValidator = propertySchema.validator;
  const isEmptyValue = isEmpty(value);

  if (propertySchema.required && isEmptyValue) {
    return 'VALIDATION_ERROR_REQUIRED_FIELD';
  }

  if (propertyValidator !== null && !isEmptyValue) {
    const typeOfValidator = typeof propertyValidator;

    if (typeOfValidator === 'object' && !propertyValidator.regEx.test(value)) {
      return propertyValidator.error;
    }

    if (typeOfValidator === 'function') {
      return propertyValidator(value, state);
    }
  }

  return null;
};

export default (stateSchema, validationSchema = {}) => {
  const [state, setState] = useState(stateSchema);
  const [isValid, setIsValid] = useState(false);
  const [isTouched, setIsTouched] = useState(false);

  const validateState = useCallback(() => Object.keys(validationSchema).every((key) => {
    const isInputFieldRequired = validationSchema[key].required;
    const stateValue = state[key].value;
    const stateError = state[key].error;
    const isRequiredAndEmpty = isInputFieldRequired && isEmpty(stateValue);

    return !(isRequiredAndEmpty || stateError);
  }), [state, validationSchema]);

  const onChange = useCallback((name, value) => {
    const error = applyValidator(validationSchema[name], value, state);

    setIsTouched(true);
    setState(prevState => ({
      ...prevState,
      [name]: {
        value,
        error,
      },
    }));
  }, [state, validationSchema]);

  useEffect(() => {
    if (isTouched) {
      setIsValid(validateState());
    }
  }, [state, isTouched]);

  return [
    { ...state, isValid, isTouched },
    onChange,
    setState,
  ];
};
