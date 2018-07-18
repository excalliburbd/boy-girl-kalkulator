import React, { Component } from 'react';
import styled from 'styled-components';

const OptionsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around; 
`;

class QuestionStep extends Component {
  state = {
    selected: null
  }

  render() { 
    const {
      type,
      values
    } = this.props; 
  
    if (type == 'dropdown') {
      //TODO: date age
    }

    return <OptionsContainer>
      {
        values.map(
          (value, key) =>  <img src={require(`./assets/quiz/${value}.jpg`)} alt={`option ${key+1}`} />
        )
      }
      <p>Neither</p>
    </OptionsContainer>;
  }
}

export default QuestionStep;