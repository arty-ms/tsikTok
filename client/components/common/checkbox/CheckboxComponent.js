import React, { useState } from 'react';
import PropTypes from 'prop-types';
import withStyles from 'react-jss';
import Label from '../label';
import Tooltip from '../tooltip';
import { getClassName } from '../../../utils/ClassUtils';
import CheckboxStyles from './CheckboxStyle';

const Checkbox = (props) => {
  const {
    className,
    classes,
    label,
    checked,
    onChange,
    disabled,
    tooltip,
  } = props;

  const [isFocus, setFocusState] = useState(false);
  const [isHovered, setHoveredState] = useState(false);
  const rootClasses = getClassName([
    classes.root,
    className,
  ]);
  const classNames = getClassName([
    classes.checkbox,
    checked ? 'checked' : '',
    isFocus ? 'focus' : '',
  ]);

  return (
    <>
      <Tooltip label={tooltip} show={isHovered}/>
      <div className={rootClasses}
           onMouseEnter={() => setHoveredState(true)}
           onMouseLeave={() => setHoveredState(false)}
      >
        <input
          disabled={disabled}
          className={classNames}
          type='checkbox'
          value={checked}
          onChange={() => {
            if (!disabled) {
              onChange(!checked);
            }
          }}
          onFocus={() => {
            if (disabled) {
              return;
            }

            setFocusState(true);
          }}
          onBlur={() => {
            if (disabled) {
              return;
            }

            setFocusState(false);
          }}
          onKeyPress={(e) => {
            e.preventDefault();

            if (disabled) {
              return;
            }

            if (e.key === 'Enter') {
              onChange(!checked);
            }
          }}
        />
        <Label
          disabled={disabled}
          className={classes.label}
          value={label}
          onClick={() => {
            if (!disabled) {
              onChange(!checked);
            }
          }}
        />
      </div>
    </>
  );
};

Checkbox.propTypes = {
  className: PropTypes.string,
  classes: PropTypes.object,
  label: PropTypes.string,
  checked: PropTypes.bool,
  disabled: PropTypes.bool,
  onChange: PropTypes.func,
  tooltip: PropTypes.string,
};

export default withStyles(CheckboxStyles)(Checkbox);
