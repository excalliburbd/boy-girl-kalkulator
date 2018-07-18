// @flow 

import React, { Component } from 'react'; 
import styled from 'styled-components';

import QuestionStep from './QuestionStep';
import StartStep from './StartStep';

const QuizContainer = styled.div`
  height: 100%;
`;

const addToHex = (num, value) => (parseInt(num, 16) + value).toString(16);

class Quiz extends Component {
  state = {
    step: 'start',
    values: {
      
    }
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

  handleStepCalcuation = toAdd => {
    this.setState(
      (previousState, props) => {
        const [
          type,
          ...values
        ] = previousState.step.split('-');

        return {
          step: `${type}-${
            values.map( value => addToHex(value, toAdd)).join('-')
          }`
        }
      }
    );
  }

  handleNextStep = () => this.handleStepCalcuation(16)
  handlePreviousStep = () => this.handleStepCalcuation(-16)

  render() {
    const {
      step
    } = this.state;

    return (
      <QuizContainer>
        { 
          step === 'start' ? 
            <StartStep handleStart={this.handleQuizStart}/> :
            <QuestionStep { ...this.getProps() }
                          handleNext={this.handleNextStep}
                          handlePrevious={this.handlePreviousStep} />
        }
      </QuizContainer>
    );

  }
}

export default Quiz;