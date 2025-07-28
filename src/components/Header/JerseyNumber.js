import React from 'react';
import styled from 'styled-components';

const JerseyContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
`;

const JerseyNumber = styled.div`
  font-size: 4rem;
  font-weight: 900;
  color: white;
  text-shadow: 
    3px 3px 0px rgba(0, 0, 0, 0.8),
    6px 6px 10px rgba(0, 0, 0, 0.5);
  line-height: 1;
  position: relative;
  
  /* Jersey-style text effect */
  -webkit-text-stroke: 2px rgba(255, 255, 255, 0.2);
  
  /* Glow effect */
  &::before {
    content: '${props => props.number}';
    position: absolute;
    top: 0;
    left: 0;
    color: rgba(37, 99, 235, 0.5);
    z-index: -1;
    filter: blur(10px);
    transform: scale(1.1);
  }
  
  @media (max-width: 768px) {
    font-size: 3rem;
  }
  
  @media (max-width: 480px) {
    font-size: 2.5rem;
  }
`;

const JerseyLabel = styled.span`
  font-size: 0.8rem;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.7);
  text-transform: uppercase;
  letter-spacing: 2px;
  margin-top: 5px;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
`;

const JerseyBackground = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80px;
  height: 80px;
  background: radial-gradient(circle, rgba(255, 255, 255, 0.05) 0%, transparent 70%);
  border-radius: 50%;
  z-index: -1;
  
  @media (max-width: 768px) {
    width: 60px;
    height: 60px;
  }
`;

const JerseyNumberComponent = ({ number }) => {
  return (
    <JerseyContainer>
      <JerseyBackground />
      <JerseyNumber number={number}>
        {number}
      </JerseyNumber>
      <JerseyLabel>Jersey</JerseyLabel>
    </JerseyContainer>
  );
};

export default JerseyNumberComponent;