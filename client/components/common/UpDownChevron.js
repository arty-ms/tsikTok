import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'react-jss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { getClassName } from '../../utils/ClassUtils';

export const UpDownChevronStyle = theme => ({
  root: {
    cursor: 'pointer',
    transition: 'transform linear 100ms',
    color: theme.defaultIconColor,
    '&.up': {
      transform: 'rotateX(180deg)',
    },
    '&.disabled': {
      cursor: 'default',
    },
  },
});

const UpDownChevron = (props) => {
  const {
    classes = {},
    className = '',
    up = false,
    disabled = false,
    onClick = () => {},
  } = props;
  const rootClasses = getClassName([
    classes.root,
    className,
    up ? 'up' : '',
    disabled ? 'disabled' : '',
  ]);

  return <FontAwesomeIcon
    icon={'chevron-up'}
    className={rootClasses}
    onClick={onClick}
  />;
};

UpDownChevron.propTypes = {
  classes: PropTypes.object,
  className: PropTypes.string,
  up: PropTypes.bool,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
};

export default withStyles(UpDownChevronStyle)(UpDownChevron);
