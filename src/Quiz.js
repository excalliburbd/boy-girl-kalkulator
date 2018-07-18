// @flow 

import React, { Component } from 'react'; 
import styled from 'styled-components';

import QuestionStep from './QuestionStep';

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
  <StartButton onClick={ handleStart }>Start</StartButton>
</StartStepContainer>;
  
const QuizContainer = styled.div`
  height: 100%;
`;

class Quiz extends Component {
  state = {
    step: 'start'
  }

  handleQuizStart = () => {
    this.setState(
      (prevState, props) => ({
        step: 'radio-1a-1b'
      })
    )
  }

  getProps = () => {
    const {
      step
    } = this.state;

    if (step === 'start') {
      return {
        type: null,
        values: null
      }
    } else {
      const [
        type,
        ...values
      ] = step.split('-');

      return {
        type,
        values
      }
    }
  }

  render() {
    const {
      step
    } = this.state;

    return (
      <QuizContainer>
        { 
          step === 'start' ? 
            <StartStep handleStart={this.handleQuizStart}/> :
            <QuestionStep { ...this.getProps() } />
        }
      </QuizContainer>
    );

  }
}

export default Quiz;