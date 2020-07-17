import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'react-jss';
import LabelComponentStyles from './LabelComponentStyle';
import { getClassName } from '../../../utils/ClassUtils';

const LabelComponent = (props) => {
  const {
    classes = {},
    className = '',
    value = '',
    success = false,
    error = false,
    disabled = false,
    onClick = () => {},
  } = props;

  const classNames = getClassName([
    classes.root,
    error ? 'error' : '',
    success ? 'success' : '',
    disabled ? 'disabled' : '',
    className,
  ]);

  return (
    <div
      className={classNames}
      onClick={onClick}
    >
      {value}
    </div>
  );
};

LabelComponent.propTypes = {
  classes: PropTypes.object,
  className: PropTypes.string,
  value: PropTypes.string,
  error: PropTypes.bool,
  success: PropTypes.bool,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
};

export default withStyles(LabelComponentStyles)(LabelComponent);
