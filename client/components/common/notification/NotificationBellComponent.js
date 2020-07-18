import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'react-jss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import NotificationBellStyle from './NotificationBellStyle';
import { getClassName } from '../../../utils/ClassUtils';

const NotificationBell = (props) => {
  const {
    className,
    classes,
    notificationCount,
    onClick = () => {},
  } = props;

  const rootClasses = getClassName([
    classes.root,
    className,
  ]);

  return (
    <div
      className={rootClasses}
      onClick={onClick}
    >
      <FontAwesomeIcon
        className={classes.icon}
        size='lg'
        icon='bell'
      />
      {notificationCount > 0 ? <div
        className={classes.marked}>{notificationCount}</div> : null}
    </div>
  );
};

NotificationBell.propTypes = {
  className: PropTypes.string,
  classes: PropTypes.object,
  notificationCount: PropTypes.number,
  onClick: PropTypes.func,
};

export default withStyles(NotificationBellStyle)(NotificationBell);
