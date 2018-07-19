import React from 'react';
import styled from 'styled-components';

const SpeedoMeter = styled.div`
  position: relative;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  height: 20rem;
  img {
    position: absolute;
  }
`;

const ResultStep = ({
  values
}) => {
  return (
    <div>
      <SpeedoMeter>
        <img src={require('./assets/result/bg_wheel.png')} />
        <img src={require('./assets/result/bg_wheel_down.png')} />
        <img src={require('./assets/result/arrow.png')} />
        <img src={require('./assets/result/circle.png')} />
      </SpeedoMeter> 
      <img src={require('./assets/result/icon_boy.png')} alt="boy"/>
      <img src={require('./assets/result/icon_girl.png')} alt="girl"/>
    </div>
  );
}

export default ResultStep;