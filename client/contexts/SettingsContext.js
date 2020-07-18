import React from 'react';
import PropTypes from 'prop-types';
import settings from '../config/settings';

const SettingsContext = React.createContext(settings);

export const SettingsProvider = SettingsContext.Provider;

export const SettingsConsumer = SettingsContext.Consumer;

export const AppWithSettings = ({children}) => (
  <SettingsProvider value={{
    environmentSettings: settings,
  }}>
    {children}
  </SettingsProvider>
);

AppWithSettings.propTypes = {
  children: PropTypes.node,
};

export default SettingsContext;
