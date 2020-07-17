import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'react-jss';
import { getClassName } from '../../../utils/ClassUtils';
import CardStyle from './CardStyle';

const Card = (props) => {
  const {
    classes,
    className,
    children,
    transparent,
    onKeyPress = () => {},
    handleClick = () => {},
  } = props;
  const rootClasses = getClassName([
    classes.root,
    className,
    transparent ? 'transparent' : '',
  ]);

  return (
    <div className={rootClasses} onKeyPress={onKeyPress} onClick={handleClick}>
      {children}
    </div>
  );
};

Card.propTypes = {
  transparent: PropTypes.bool,
  classes: PropTypes.object,
  className: PropTypes.string,
  children: PropTypes.node,
  onKeyPress: PropTypes.func,
  handleClick: PropTypes.func,
};

export default withStyles(CardStyle)(Card);
