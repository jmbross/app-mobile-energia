import React from 'react';
import AboutView from './index.view';

const AboutContainer = () => {
  const handleTerms = (url: string) => {
    window.open(url, '_blank');
  };

  const handlePrivacy = (url: string) => {
    window.open(url, '_blank');
  };

  return <AboutView onTerms={handleTerms} onPrivacy={handlePrivacy} />;
};

export default AboutContainer;
