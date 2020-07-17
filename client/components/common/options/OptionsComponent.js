import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'react-jss';
import { getClassName } from '../../../utils/ClassUtils';
import OptionsStyle from './OptionsStyle';

const Options = (props) => {
  const {
    className,
    classes,
    children,
    onClick = () => {},
    type = '',
  } = props;

  const rootClasses = getClassName([
    classes.optionsWrapper,
    className,
  ]);
  const optionsClasses = getClassName([
    classes.options,
    type,
  ]);

  return (
    <div className={rootClasses}>
      <ul className={optionsClasses} onClick={onClick}>
        {children}
      </ul>
    </div>
  );
};

Options.propTypes = {
  className: PropTypes.string,
  classes: PropTypes.object,
  options: PropTypes.array,
  children: PropTypes.node,
  onClick: PropTypes.func,
  type: PropTypes.string,
};

export default withStyles(OptionsStyle)(Options);
