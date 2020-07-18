import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'react-jss';
import { getClassName } from '../../../utils/ClassUtils';
import ProgressBarStyle from './ProgressBarStyle';

const ProgressBar = (props) => {
  const {
    classes = {},
    className = '',
    progress = '0',
    infinity = false,
    type = 'primary',
  } = props;

  const rootClasses = getClassName([
    classes.root,
    className,
  ]);
  const progressClasses = getClassName([
    classes.progress,
    infinity ? 'infinity' : '',
    type,
  ]);
  const progressStyle = infinity ? {width: '100%'} : {width: `${progress}%`};

  return (
    <div className={rootClasses}>
      <div style={progressStyle} className={progressClasses}/>
    </div>
  );
};

ProgressBar.propTypes = {
  className: PropTypes.string,
  classes: PropTypes.object,
  progress: PropTypes.number,
  infinity: PropTypes.bool,
  type: PropTypes.oneOf(
    ['primary', 'secondary', 'success', 'info', 'warning', 'danger']),
};

export default withStyles(ProgressBarStyle)(ProgressBar);
