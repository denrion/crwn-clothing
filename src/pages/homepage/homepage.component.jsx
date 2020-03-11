import React from 'react';
import Directory from '../../components/directory/directory.components';
import './homepage.styles';
import HomePageContainer from './homepage.styles';

const Homepage = () => {
  return (
    <HomePageContainer>
      <Directory />
    </HomePageContainer>
  );
};

export default Homepage;
