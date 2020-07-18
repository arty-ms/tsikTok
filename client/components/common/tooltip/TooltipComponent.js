import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'react-jss';
import { getClassName } from '../../../utils/ClassUtils';
import TooltipStyle from './TooltipStyle';

const TooltipComponent = (props) => {
  if (!props.show || !props.label) {
    return null;
  }

  const {
    classes,
    label,
    className,
  } = props;
  const rootWrapperClasses = getClassName([
    classes.rootWrapper,
    className,
  ]);

  return (
    <div className={rootWrapperClasses}>
      <div className={classes.root}>{label}</div>
    </div>
  );
};

TooltipComponent.propTypes = {
  classes: PropTypes.object,
  label: PropTypes.string,
  className: PropTypes.string,
  show: PropTypes.bool,
};

export default withStyles(TooltipStyle)(TooltipComponent);
