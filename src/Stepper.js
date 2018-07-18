import React from 'react';
import styled from 'styled-components';

const StepperContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 1em;
`;

const Stepper = ({
  handleNext,
  handlePrevious
}) => <StepperContainer>
  <button onClick={handlePrevious}>Previous</button>
  <button onClick={handleNext}>Next</button>
</StepperContainer>;

export default Stepper;