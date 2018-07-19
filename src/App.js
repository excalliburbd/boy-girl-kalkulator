import React from 'react';
import styled from "styled-components";

import Quiz from './Quiz';

const AppContainer = styled.div`
  height: 100%;
  background: #EFF0F0;
  padding: 3rem;
  height: 20rem;
`;

const Title = styled.h2`
  text-align: center;
  margin: 0;
`;

const App = () =>
  <AppContainer>
    <Title>Gutt/Jente kalkulator</Title>
    <Quiz /> 
  </AppContainer>;

export default App;
