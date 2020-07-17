import React, { useEffect, useState, useContext } from 'react';
import PropTypes from 'prop-types';
import SettingsContext from './SettingsContext';

export const getWindowDimension = () => ({
  width: window.innerWidth,
  height: window.innerHeight,
});

export const getMobileState = ({width}, mobileResolutionWidth) => width <=
  mobileResolutionWidth;

const MobileContext = React.createContext(null);

export const MobileProvider = MobileContext.Provider;

export const MobileConsumer = MobileContext.Consumer;

export const MobileApp = ({children}) => {
  const {environmentSettings: {MobileResolutionWidth}} = useContext(
    SettingsContext);
  const [windowDimension, setWindowDimension] = useState(getWindowDimension());
  const onResize = () => setWindowDimension(getWindowDimension());

  useEffect(() => {
    window.addEventListener('resize', onResize);

    return () => {
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return (
    <MobileProvider value={{
      isMobile: getMobileState(windowDimension, MobileResolutionWidth),
      ...windowDimension,
    }}>
      {children}
    </MobileProvider>
  );
};

MobileApp.propTypes = {
  children: PropTypes.node,
};

export default MobileContext;
