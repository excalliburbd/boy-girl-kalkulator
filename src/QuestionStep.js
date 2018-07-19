import React, { Component } from 'react';
import styled from 'styled-components';

import Stepper from './Stepper';

const QuestionContainer = styled.div`
  height: 100%;
`;

const OptionsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

const CrossIconContainer = styled.h1`
  font-size: 10em;
  text-align: center;
  margin: 0;
  padding: 0;
`;

class QuestionStep extends Component {
  state = {
    selected: null
  }

  handleSelect = value => {
    this.setState((prevState, props) => ({
      selected: {
        value,
        serial: this.props.serial
      }
    }))
  }

  handleNext = () =>  {
    const {
      handleNext,
      serial,
      handleShowResult
    } = this.props;

    const {
      selected
    } = this.state;

    if (serial === '5') {
      handleShowResult(selected);
    } else {
      handleNext(selected);
      this.setState((prevState, props) => ({
        selected: null
      }));
    } 
  }

  handlePrevious = () => {
    const {
      handlePrevious,
      serial,
      previousValues } = this.props;
    
    handlePrevious({
      serial,
      value: null
    });

    const previousIndex = (parseInt(serial, 10) - 1).toString(10);
    this.setState((prevState, props) => ({
      selected: {
        serial: previousIndex,
        value: previousValues[previousIndex]
      }
    }));
  }

  render() { 
    const {
      type,
      values
    } = this.props;

    const {
      selected
    } = this.state;
  
    if (type === 'dropdown') {
      //TODO: date age
    }

    return <QuestionContainer>
      <OptionsContainer>
        {
          values.map(
            (value, key) =>  <img src={require(`./assets/quiz/${value}.jpg`)} 
                                  alt={`option ${key+1}`} 
                                  key={value}
                                  selected={value === selected}
                                  onClick={() => this.handleSelect(value)} />
          )
        }
        <div onClick={() => this.handleSelect("")}>
          <p style={{textAlign: 'center'}}>Neither</p>
          <CrossIconContainer>x</CrossIconContainer>
        </div>
      </OptionsContainer>
      <Stepper handleNext={this.handleNext}
               handlePrevious={this.handlePrevious}
               disableNext={!selected}
               disablePrevious={ values[0] === '1a' } />
    </QuestionContainer>;
  }
}

export default QuestionStep;