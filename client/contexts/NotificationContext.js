import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Notification } from '../components/common/notification';
import { createUUID } from '../utils/uuid';

const HIDE_ANIMATION_TIME = 1000;
const SHOW_ANIMATION_TIME = 5000;
const NotificationContext = React.createContext(null);

export const NotificationProvider = NotificationContext.Provider;
export const NotificationConsumer = NotificationContext.Consumer;

export class NotificationApp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      notifications: [],
    };

    this.showNotification = this.showNotification.bind(this);
  }

  showNotification(notificationArgs) {
    const {
      type = 'info',
      message,
      position = 'tc',
      show = SHOW_ANIMATION_TIME,
    } = notificationArgs;

    const id = createUUID();
    const newNotification = {
      id,
      position,
      type,
      message,
      hide: false,
    };

    this.setNotifications([
      ...this.state.notifications,
      newNotification,
    ]);

    setTimeout(() => this.hideNotification(newNotification), show);

    return id;
  }

  hideNotification(notification) {
    this.setNotifications((this.state.notifications || []).map((n) => {
      if (n.id !== notification.id) {
        return n;
      }

      return {
        ...notification,
        hide: true,
      };
    }));

    setTimeout(() => {
      this.setNotifications((this.state.notifications || []).filter(
        ({id}) => (id !== notification.id)));
    }, HIDE_ANIMATION_TIME);
  }

  setNotifications(notifications) {
    this.setState({
      notifications,
    });
  }

  showErrorNotification(message, options) {
    this.showNotification({
      ...options,
      type: 'error',
      message,
    });
  }

  showSuccessNotification(message, options) {
    this.showNotification({
      ...options,
      type: 'success',
      message,
    });
  }

  render() {
    return (
      <NotificationProvider value={{
        showNotification: this.showNotification.bind(this),
        showErrorNotification: this.showErrorNotification.bind(this),
        showSuccessNotification: this.showSuccessNotification.bind(this),
      }}>
        <div>
          {(this.state.notifications || []).map(notification => (
            <Notification
              key={notification.id}
              type={notification.type}
              position={notification.position}
              message={notification.message}
              hide={notification.hide}
              onClose={() => this.hideNotification(notification)}
            />
          ))}
        </div>
        {this.props.children}
      </NotificationProvider>
    );
  }
}

NotificationApp.propTypes = {
  children: PropTypes.node,
};

export default NotificationContext;
