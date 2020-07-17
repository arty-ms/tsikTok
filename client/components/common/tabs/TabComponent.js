import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'react-jss';
import { getClassName } from '../../../utils/ClassUtils';
import Label from '../label';
import TabStyles from './TabStyle';

const TabComponent = (props) => {
  const {
    classes,
    label,
    value,
    selected = false,
    disabled = false,
    marked = false,
    onSelect,
    children,
    className,
  } = props;

  const classNames = getClassName([
    classes.root,
    disabled ? 'disabled' : '',
    selected ? 'selected' : '',
    className,
  ]);

  return (
    <li className={classNames}
        tabIndex={disabled ? '-1' : '0'}
        onClick={() => {
          if (!disabled) {
            onSelect(value);
          }
        }}
        onKeyPress={(e) => {
          //e.preventDefault();

          if (!disabled) {
            onSelect(value);
          }
        }}
    >
      {marked ? <div className={classes.mark}/> : null}
      <Label value={label}/>
      {selected ? <div className={classes.children}>{children}</div> : null}
    </li>
  );
};

TabComponent.propTypes = {
  className: PropTypes.string,
  classes: PropTypes.object,
  disabled: PropTypes.bool,
  selected: PropTypes.bool,
  onSelect: PropTypes.func,
  value: PropTypes.any,
  label: PropTypes.string,
  marked: PropTypes.bool,
  children: PropTypes.node,
};

export default withStyles(TabStyles)(TabComponent);
