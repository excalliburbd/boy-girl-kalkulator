import React from 'react';
import styled from 'styled-components';

const StartStepContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const StartButton = styled.button`
  background: crimson;
  border: none;
  padding: .5em 1em;
`;

const StartStep = ({
  handleStart
}) => <StartStepContainer>
  <StartButton onClick={ handleStart }>Start testen</StartButton>
</StartStepContainer>;

export default StartStep;