import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'react-jss';
import { getClassName } from '../../../utils/ClassUtils';
import FormSectionActionStyle from './FormSectionActionStyle';

const FormActionSection = (props) => {
  const {
    classes,
    className,
    children,
  } = props;

  const rootClasses = getClassName([
    classes.root,
    className,
  ]);

  return (
    <div className={rootClasses}>
      <div className={classes.children}>{children}</div>
    </div>
  );
};

FormActionSection.propTypes = {
  classes: PropTypes.object,
  className: PropTypes.string,
  children: PropTypes.node,
};

export default withStyles(FormSectionActionStyle)(FormActionSection);
