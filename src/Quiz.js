// @flow 

import React, { Component } from 'react'; 
import styled from 'styled-components';

import QuestionStep from './QuestionStep';
import StartStep from './StartStep';
import ResultStep from './ResultStep';

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
        values,
        serial: values[0][0]
      }
    }
  }

  handleStepCalcuation = toAdd => {
    this.setState(
      (previousState, props) => {
        const [
          // eslint-disable-next-line
          type,
          ...values
        ] = previousState.step.split('-');

        if ((values[0][0] === '3' && toAdd === 16) || (values[0][0] === '5' && toAdd === -16)) {
          return {
            step: `dropdown-${
              values.map( value => addToHex(value, toAdd)).join('-')
            }`
          }
        }

        return {
          step: `radio-${
            values.map( value => addToHex(value, toAdd)).join('-')
          }`
        }
      }
    );
  }

  setValues = valueMap => {
    this.setState((previousState, props) => ({
      values: {
        ...previousState.values,
        [valueMap.serial]: valueMap.value
      }
    }));
  }

  handleNextStep = selected => {
    this.setValues(selected);
    this.handleStepCalcuation(16);
  }

  handlePreviousStep = deselected => {
    this.setValues(deselected);
    this.handleStepCalcuation(-16);
  }

  handleShowResult = selected => {
    this.setValues(selected);
    this.setState({
      step: 'result'
    });
  }

  renderStep = (step) => {
    switch (step) {
      case 'start':
        return <StartStep handleStart={this.handleQuizStart}/>;        
      case 'result':
        return <ResultStep values={this.state.values} />
      default:
        return <QuestionStep  { ...this.getProps() }
                              previousValues={this.state.values}
                              handleNext={this.handleNextStep}
                              handlePrevious={this.handlePreviousStep}
                              handleShowResult={this.handleShowResult} />;
    }
  }

  render() {
    return (
      <QuizContainer>
        {
          this.renderStep(this.state.step)
        }
      </QuizContainer>
    );
  }
}

export default Quiz;