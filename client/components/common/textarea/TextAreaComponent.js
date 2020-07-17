import React, { useState } from 'react';
import PropTypes from 'prop-types';
import withStyle from 'react-jss';
import Label from '../label';
import Tooltip from '../tooltip';
import InputComponentStyle from './TextAreaComponentStyle';
import { getClassName } from '../../../utils/ClassUtils';

const TextAreaComponent = (props) => {
  const {
    classes,
    value,
    onChange,
    type = 'text',
    className = '',
    placeholder = '',
    onBlur = () => {},
    onEnter = () => {},
    autoFocus = false,
    label = '',
    disabled = false,
    error = false,
    success = false,
    tooltip = '',
  } = props;

  const [isHovered, setHoveredState] = useState(false);
  const classNames = getClassName([
    classes.root,
    error ? 'error' : '',
    success ? 'success' : '',
    className,
  ]);

  return (
    <div className={classes.rootWrapper}>
      <Tooltip label={tooltip} show={isHovered}/>
      {label
        ? <Label
          className={classes.label}
          value={label}
          error={error}
          success={success}
        />
        : null}
      <textarea
        type={type}
        disabled={disabled}
        placeholder={placeholder}
        className={classNames}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        autoFocus={autoFocus}
        onMouseEnter={() => setHoveredState(true)}
        onMouseLeave={() => setHoveredState(false)}
        onKeyPress={e => e.key === 'Enter' && onEnter()}
      />
    </div>
  );
};

TextAreaComponent.propTypes = {
  classes: PropTypes.object,
  className: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func,
  onEnter: PropTypes.func,
  type: PropTypes.string,
  autoFocus: PropTypes.bool,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  label: PropTypes.string,
  error: PropTypes.bool,
  success: PropTypes.bool,
  tooltip: PropTypes.string,
};

export default withStyle(InputComponentStyle)(TextAreaComponent);
