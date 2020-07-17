import React, { useState } from 'react';
import PropTypes from 'prop-types';

const LoadingContext = React.createContext(null);

export const LoadingProvider = LoadingContext.Provider;

export const LoadingConsumer = LoadingContext.Consumer;

export const LoadingApp = ({children}) => {
  const [dataFetchingLoadingArea, setDataFetchingLoadingArea] = useState({});
  const [dataSavingLoadingArea, setDataSavingLoadingArea] = useState({});

  const startFetchingData = loadingArea => setDataFetchingLoadingArea(
    state => ({
      ...state,
      [loadingArea]: true,
    }));

  const stopFetchingData = loadingArea => setDataFetchingLoadingArea(state => ({
    ...state,
    [loadingArea]: false,
  }));

  const startSavingData = loadingArea => setDataSavingLoadingArea(state => ({
    ...state,
    [loadingArea]: true,
  }));

  const stopSavingData = loadingArea => setDataSavingLoadingArea(state => ({
    ...state,
    [loadingArea]: false,
  }));

  const startLoadingData = (loadingArea) => {
    startFetchingData(loadingArea);
    startSavingData(loadingArea);
  };

  const stopLoadingData = (loadingArea) => {
    stopFetchingData(loadingArea);
    stopSavingData(loadingArea);
  };

  const isDataFetching = loadingArea => dataFetchingLoadingArea[loadingArea];

  const isDataSaving = loadingArea => dataSavingLoadingArea[loadingArea];

  const isLoading = loadingArea => dataFetchingLoadingArea[loadingArea] ||
    dataSavingLoadingArea[loadingArea];

  return (
    <LoadingProvider value={{
      startFetchingData,
      stopFetchingData,
      startSavingData,
      stopSavingData,
      startLoadingData,
      stopLoadingData,
      isDataFetching,
      isDataSaving,
      isLoading,
    }}>
      {children}
    </LoadingProvider>
  );
};

LoadingApp.propTypes = {
  children: PropTypes.node,
  isDataFetchingInitial: PropTypes.bool,
  isDataSavingInitial: PropTypes.bool,
};

export default LoadingContext;
