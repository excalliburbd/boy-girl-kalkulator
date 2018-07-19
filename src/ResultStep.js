import React, { Component } from 'react';
import styled from 'styled-components';

const SpeedoMeter = styled.div`
  position: relative;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  height: 15rem;
  img {
    position: absolute;
  }
`;

const Indicator = styled.img`
  transform: rotate(${({ value }) => value }deg)
`;

const IconsContainer = styled.div`
  text-align: center;
`;

const Icons = styled.img`
  margin: 0 7em;
`;

class ResultStep extends Component {
  state = {
    result: 0
  }

  componentDidMount() {
    this.setState((previousState, props) => ({
      result: this.getResults(props.values)
    }));
  }

  getResults = values => {
    return Object.keys(values)
            .map( key => values[key])
            .map(
              value => {
                if (value === "") {
                  return 0;
                } else {
                  if (value[1] === 'a') {
                    return 20;
                  } else {
                    return 10;
                  }
                }
              }
            ).reduce(
              (acc, curr) => acc+curr, 0
            );
  }

  render() {
    const {
      result
    } = this.state;
    
    return (
      <div>
        <SpeedoMeter>
          <img src={require('./assets/result/bg_wheel.png')} alt="speedometer_bg"/>
          <img src={require('./assets/result/bg_wheel_down.png')} alt="speedometer_knob_bg" />
          <Indicator src={require('./assets/result/arrow.png')} alt="speedometer_arrow" value={180 * result / 100} />
          <img src={require('./assets/result/circle.png')} alt="speedometer_knob" />
        </SpeedoMeter> 
        <IconsContainer>
          <Icons src={require('./assets/result/icon_boy.png')} alt="boy"/>
          <Icons src={require('./assets/result/icon_girl.png')} alt="girl"/>
        </IconsContainer>
        <p style={{textAlign: 'center'}}>
          {
            result >= 49 ? "The baby more likely a girl" : "The baby is more likely a boy"
          }
        </p>
      </div>
    );
   }
 }

export default ResultStep;