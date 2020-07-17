import { Config } from 'constants/types';

import DefaultSettings from './default';
import LocalSettings from './local';
import ProdSettings from './production';

export const ENVIRONMENTS = {
  LOCAL: 'local',
  DEVELOPMENT: 'development',
  PRODUCTION: 'production',
  STAGING: 'staging',
};

export const getEnvSettings = (env: string | undefined): Config => {
  switch (env) {
    case ENVIRONMENTS.LOCAL:
      return LocalSettings;
    case ENVIRONMENTS.PRODUCTION:
      return ProdSettings;
    default:
      return LocalSettings;
  }
};

export const currentEnv = process.env.NODE_ENV;

const settings = {
  ...DefaultSettings,
  ...getEnvSettings(currentEnv),
};

export default settings;
