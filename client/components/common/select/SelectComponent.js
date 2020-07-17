import React, { useState } from 'react';
import PropTypes from 'prop-types';
import withStyles from 'react-jss';
import Label from '../label';
import Tooltip from '../tooltip';
import SelectStyles from './SelectComponentStyle';
import { getClassName } from '../../../utils/ClassUtils';
import Backdrop from '../Backdrop';
import UpDownChevron from '../UpDownChevron';
import Options, { OptionItem } from '../options';

const Select = (props) => {
  const {
    className = '',
    classes = {},
    options = [],
    value = '',
    onSelect = () => {},
    disabled = false,
    error = false,
    success = false,
    label = '',
    placeholder = '',
    tooltip = '',
  } = props;
  const [isFocus, setFocusState] = useState(false);
  const [isOpen, setOpenState] = useState(false);
  const [isHovered, setHoveredState] = useState(false);
  const valueOption = (options || []).find(option => option.value === value);
  const behaviourClasses = [
    error ? ' error' : '',
    success ? 'success' : '',
    disabled ? 'disabled' : '',
    isFocus ? 'focus' : '',
  ];
  const rootClasses = getClassName([
    classes.root,
    className,
    ...behaviourClasses,
  ]);
  const inputClasses = getClassName([
    classes.input,
    ...behaviourClasses,
  ]);
  const optionType = error ? 'danger' : (success ? 'success' : 'secondary');

  return (
    <div className={classes.rootWrapper}>
      <Tooltip label={tooltip} show={isHovered}/>
      {label
        ? <Label
          className={`${classes.label}${error ? ' error' : ''}${success
            ? ' success'
            : ''}`}
          value={label}
        />
        : null}
      <div className={rootClasses}>
        <input
          className={inputClasses}
          onChange={() => {}}
          value={valueOption ? valueOption.label : ''}
          placeholder={placeholder}
          disabled={disabled}
          onClick={() => {
            if (disabled) {
              return;
            }

            setOpenState(!isOpen);
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
              setOpenState(!isOpen);
            }
          }}
          onMouseEnter={() => setHoveredState(true)}
          onMouseLeave={() => setHoveredState(false)}
        />
        <div className={classes.iconWrapper} onClick={() => {
          if (!disabled) {
            setOpenState(true);
          }
        }}>
          <UpDownChevron
            up={!isOpen}
            disabled={disabled}
          />
        </div>
      </div>
      <div className={classes.optionsWrapper}>
        {!disabled && isOpen && options.length
          ? <>
            <Backdrop onClick={() => setOpenState(false)}/>
            <Options type={optionType}>
              {(options || []).map(option => (
                <OptionItem
                  type={optionType}
                  key={option.value}
                  {...option}
                  onClick={() => {
                    onSelect(option);
                    setOpenState(false);
                  }}
                />
              ))}
            </Options>
          </>
          : null}
      </div>
    </div>
  );
};

Select.propTypes = {
  classes: PropTypes.object,
  className: PropTypes.string,
  options: PropTypes.array,
  value: PropTypes.string,
  onSelect: PropTypes.func,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  error: PropTypes.bool,
  success: PropTypes.bool,
  tooltip: PropTypes.string,
};

export default withStyles(SelectStyles)(Select);
