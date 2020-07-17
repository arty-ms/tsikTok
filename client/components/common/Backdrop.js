import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'react-jss';
import { getClassName } from '../../utils/ClassUtils';

export const BackdropStyle = () => ({
  root: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    zIndex: '1',
    transition: 'opacity 100ms linear',
    '&.opening': {
      opacity: '1',
    },
    '&.closing': {
      opacity: '0',
    },
  },
});

const Backdrop = (props) => {
  const {
    classes,
    className,
    isOpening,
    isClosing,
    onClick,
  } = props;
  const rootClasses = getClassName([
    classes.root,
    className,
    isOpening ? 'opening' : '',
    isClosing ? 'closing' : '',
  ]);

  return <div onClick={onClick} className={rootClasses}/>;
};

Backdrop.propTypes = {
  classes: PropTypes.object,
  className: PropTypes.string,
  onClick: PropTypes.func,
  isOpening: PropTypes.bool,
  isClosing: PropTypes.bool,
};

export default withStyles(BackdropStyle)(Backdrop);
