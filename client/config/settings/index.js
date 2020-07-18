import set from 'lodash/set';
import merge from 'lodash/merge';
import DefaultSettings from './default';
import LocalSettings from './local';
import DevelopmentSettings from './development';
import ProductionSettings from './production';

export const getEnvironmentSettings = (environment) => {
  switch (environment) {
    case 'development':
      return DevelopmentSettings;
    case 'production':
      return ProductionSettings;
    default:
      return LocalSettings;
  }
};

export const getGlobalSettings = environment =>
  Object.keys(environment || {}).reduce((currentSettings, key) => {
    set(currentSettings, key, environment[key]);

    return currentSettings;
  }, {});

export const EnvironmentSettings = getEnvironmentSettings(ENVIRONMENT);
export const GlobalSettings = getGlobalSettings(process.env);
export const ResultSettings = merge(
  {},
  DefaultSettings,
  EnvironmentSettings,
  GlobalSettings,
);

export default ResultSettings;
