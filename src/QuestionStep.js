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

  clearState = fn => {
    const {
      selected
    } = this.state;

    this.setState((prevState, props) => ({
      selected: null
    }));

    return fn(selected);
  }

  handleNext = () =>  this.clearState(this.props.handleNext)

  handlePrevious = () => this.clearState(this.props.handlePrevious)

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
        <p>Neither</p>
      </OptionsContainer>
      <Stepper handleNext={this.handleNext}
               handlePrevious={this.handlePrevious}
               disableNext={ values[0] === '5a'}
               disablePrevious={ values[0] === '1a' } />
    </QuestionContainer>;
  }
}

export default QuestionStep;