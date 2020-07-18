import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'react-jss';
import { getClassName } from '../../../utils/ClassUtils';
import DropdownItemStyles from './OptionItemStyle';

const OptionItem = (props) => {
  const {
    classes,
    className,
    disabled,
    onClick = () => {},
    label,
    description,
    type = 'secondary',
  } = props;

  const rootClasses = getClassName([
    classes.root,
    className,
  ]);
  const labelClasses = getClassName([
    classes.label,
    disabled ? 'disabled' : '',
    type,
  ]);

  return (
    <li className={rootClasses} tabIndex="-1">
      <a href='#' className={labelClasses}
         tabIndex={disabled ? '-1' : '0'}
         onClick={(e) => {
           e.preventDefault();

           onClick();
         }}
      >
        {label}
        {description
          ? <div className={classes.description}>{description}</div>
          : null}
      </a>
    </li>
  );
};

OptionItem.propTypes = {
  classes: PropTypes.object,
  className: PropTypes.string,
  label: PropTypes.string,
  description: PropTypes.string,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  type: PropTypes.string,
};

export default withStyles(DropdownItemStyles)(OptionItem);
