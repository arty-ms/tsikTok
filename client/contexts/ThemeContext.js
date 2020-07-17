import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'react-jss';
import lightTheme from '../assets/theme/defaultTheme';

const ThemeContext = React.createContext({
  theme: lightTheme,
  setTheme: () => {},
});

export const ThemedApp = ({children}) => {
  const [theme, setTheme] = useState(lightTheme);

  return (
    <ThemeContext.Provider value={{
      theme,
      setTheme,
    }}>
      <ThemeProvider theme={theme}>
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};

ThemedApp.propTypes = {
  children: PropTypes.node,
};

export default ThemeContext;
