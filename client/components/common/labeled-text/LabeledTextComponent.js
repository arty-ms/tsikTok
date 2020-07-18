import React, { useState } from 'react';
import PropTypes from 'prop-types';
import withStyles from 'react-jss';
import Label from '../label';
import Tooltip from '../tooltip';
import LabeledTextStyle from './LabeledTextStyle';
import { getClassName } from '../../../utils/ClassUtils';

const LabeledText = (props) => {
  const {
    classes,
    label,
    content,
    className,
    tooltip,
    reverse = false,
  } = props;

  const [isHovered, setHoveredState] = useState(false);
  const rootClasses = getClassName([
    classes.root,
    className,
  ]);
  const labelClasses = getClassName([
    classes.label,
    reverse ? 'reverse' : '',
  ]);
  const contentClasses = getClassName([
    classes.content,
    reverse ? 'reverse' : '',
  ]);

  if (reverse) {
    return (
      <>
        <Tooltip label={tooltip} show={isHovered}/>
        <div className={rootClasses} tabIndex='0'
             onMouseEnter={() => setHoveredState(true)}
             onMouseLeave={() => setHoveredState(false)}
        >
          <div className={contentClasses}>
            {content}
          </div>
          <Label value={label} className={labelClasses}/>
        </div>
      </>
    );
  }

  return (
    <>
      <Tooltip label={tooltip} show={isHovered}/>
      <div className={rootClasses} tabIndex='0'
           onMouseEnter={() => setHoveredState(true)}
           onMouseLeave={() => setHoveredState(false)}
      >
        <Label value={label} className={labelClasses}/>
        <div className={contentClasses}>
          {content}
        </div>
      </div>
    </>
  );
};

LabeledText.propTypes = {
  className: PropTypes.string,
  classes: PropTypes.object,
  label: PropTypes.string,
  content: PropTypes.string,
  tooltip: PropTypes.string,
  reverse: PropTypes.bool,
};

export default withStyles(LabeledTextStyle)(LabeledText);
