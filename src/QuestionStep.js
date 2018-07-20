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
  cursor: pointer;
  ${({selected}) => selected ? `
    box-shadow: 0 0 5px rgba(81, 203, 238, 1);
    border: 1px solid rgba(81, 203, 238, 1);
  ` : ''}
`;

const OptionsImage = styled.img`
  cursor: pointer;
  ${({selected}) => selected ? `
    box-shadow: 0 0 5px rgba(81, 203, 238, 1);
    border: 1px solid rgba(81, 203, 238, 1);
  ` : ''}
`;

class QuestionStep extends Component {
  state = {
    selected: null,
    age: '',
    month: ''
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
      handleShowResult,
      type
    } = this.props;

    const {
      selected,
      month,
      age
    } = this.state;

    if (type === 'dropdown') {
      const ans = (parseInt(month, 10) + parseInt(age, 10)) % 2;
      handleNext({
          value: (ans === 0) ? '' : '4a',
          serial: this.props.serial
        });
      this.setState((prevState, props) => ({
        selected: null
      }));
    } else {
      if (serial === '5') {
        handleShowResult(selected);
      } else {
        handleNext(selected);
        this.setState((prevState, props) => ({
          selected: null
        }));
      }
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

  handleSetAge = event => {
    const value = event.target.value;
    const {
      month
    } = this.state;
    this.setState((previousState, props) => ({
      age: value,
      selected: (!!month && !!value) ? true : false
    }));
  }

  handleSetMonth = event => {
    const value = event.target.value;
    const {
      age
    } = this.state;

    this.setState((previousState, props) => ({
      month: value,
      selected: (!!age && !!value) ? true : false
    }));
  }

  render() { 
    const {
      type,
      values
    } = this.props;

    const {
      selected,
      age,
      month
    } = this.state;
  

    return <QuestionContainer>
      { 
        (type === 'radio')
          ? <OptionsContainer>
              {
                values.map(
                  (value, key) =>  <OptionsImage  src={require(`./assets/quiz/${value}.jpg`)} 
                                                  alt={`option ${key+1}`} 
                                                  key={value}
                                                  selected={selected && value === selected.value}
                                                  onClick={() => this.handleSelect(value)} />
                )
              }
              <div onClick={() => this.handleSelect("")}>
                <p style={{textAlign: 'center'}}>Neither</p>
                <CrossIconContainer selected={selected && selected.value === ''} >x</CrossIconContainer>
              </div>
            </OptionsContainer>
          : <OptionsContainer>
              <input type="number" value={age} onChange={this.handleSetAge}/>
              <select value={month} onChange={this.handleSetMonth}>
                  <option value="">Velg måned</option>
                  <option value="1">Januar</option>
                  <option value="2">Februar</option>
                  <option value="3">Mars</option>
                  <option value="4">April</option>
                  <option value="5">Mai</option>
                  <option value="6">Juni</option>
                  <option value="7">Juli</option>
                  <option value="8">August</option>
                  <option value="9">September</option>
                  <option value="10">Oktober</option>
                  <option value="11">November</option>
                  <option value="12">Desember</option>
              </select>
            </OptionsContainer>
      }
      <Stepper handleNext={this.handleNext}
               handlePrevious={this.handlePrevious}
               disableNext={!selected}
               disablePrevious={ values[0] === '1a' } />
    </QuestionContainer>;
  }
}

export default QuestionStep;