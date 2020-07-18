import React, { useState } from 'react';
import PropTypes from 'prop-types';
import withStyles from 'react-jss';
import Input from '../input';
import SelectStyles from '../select/SelectComponentStyle';
import Backrdop from '../Backdrop';

const Autocomplete = (props) => {
  const {
    className = '',
    classes,
    options,
    value,
    onChange,
    onEnter,
    onSelect,
    label = '',
    error = false,
    success = false,
  } = props;
  const [isOpen, setOpenState] = useState(false);

  return (
    <div className={`${classes.root} ${className}`}>
      <Input
        className={classes.input}
        label={label}
        error={error}
        success={success}
        value={value}
        onBlur={() => setOpenState(true)}
        onChange={e => onChange(e.target.value)}
        onEnter={() => onEnter(value)}
      />
      {isOpen && options.length
        ? <>
          <Backrdop onClick={() => setOpenState(false)}/>
          <div className={classes.options}>
            {(options || []).map(option => (
              <div
                onClick={() => {
                  onSelect(option);
                  setOpenState(false);
                }}
                className={classes.option}
                key={option.value}
              >
                {option.label}
              </div>
            ))}
          </div>
        </>
        : null}
    </div>
  );
};

Autocomplete.propTypes = {
  classes: PropTypes.object,
  className: PropTypes.string,
  options: PropTypes.array,
  value: PropTypes.string,
  onEnter: PropTypes.func,
  onSelect: PropTypes.func,
  onChange: PropTypes.func,
  label: PropTypes.string,
  error: PropTypes.bool,
  success: PropTypes.bool,
};

export default withStyles(SelectStyles)(Autocomplete);
