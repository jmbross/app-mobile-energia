import React from 'react';
import LoadingOverlay from 'react-loading-overlay';
import { ILoadingProps } from './index.types';

const LoadingContainer = ({ children, loading }: ILoadingProps) => {
  return (
    <LoadingOverlay
      active={loading}
      spinner
      styles={{
        overlay: (base) => ({
          ...base,
          position: 'fixed',
          background: 'rgba(0, 0, 0, 0.2)',
        }),
        wrapper: () => ({
          height: '100vh',
        }),
      }}
    >
      {children}
    </LoadingOverlay>
  );
};

export default LoadingContainer;
