import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'react-jss';
import { getClassName } from '../../../utils/ClassUtils';
import FormSectionStyles from './FormSectionStyles';

const FormSection = (props) => {
  const {
    classes,
    className,
    children,
    title,
    size = 'full',
  } = props;

  const rootClasses = getClassName([
    classes.root,
    className,
    `size-${size}`,
  ]);

  return (
    <div className={rootClasses}>
      {title ? <div className={classes.title}>{title}</div> : null}
      <div className={classes.children}>{children}</div>
    </div>
  );
};

FormSection.propTypes = {
  classes: PropTypes.object,
  className: PropTypes.string,
  title: PropTypes.string,
  children: PropTypes.node,
  size: PropTypes.oneOf([
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '10',
    '11',
    '12',
    'full',
    'half',
  ]),
};

export default withStyles(FormSectionStyles)(FormSection);
