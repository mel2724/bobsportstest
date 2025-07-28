import React from 'react';
import styled from 'styled-components';
import { MapPin, Calendar } from 'lucide-react';

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  text-align: left;
  
  @media (max-width: 768px) {
    text-align: center;
  }
`;

const PlayerName = styled.h1`
  font-size: 2.5rem;
  font-weight: 800;
  color: white;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  margin: 0;
  line-height: 1.1;
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
  
  @media (max-width: 480px) {
    font-size: 1.8rem;
  }
`;

const Nickname = styled.span`
  font-size: 1.2rem;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.8);
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
  font-style: italic;
  margin-left: 10px;
  
  &::before {
    content: '"';
  }
  
  &::after {
    content: '"';
  }
`;

const Position = styled.h2`
  font-size: 1.4rem;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.9);
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
  margin: 0;
`;

const Team = styled.h3`
  font-size: 1.1rem;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.8);
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
  margin: 0;
`;

const DetailRow = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.9rem;
  font-weight: 500;
  
  @media (max-width: 768px) {
    justify-content: center;
  }
  
  svg {
    width: 16px;
    height: 16px;
    opacity: 0.8;
  }
`;

const GradYear = styled.span`
  background: rgba(255, 255, 255, 0.1);
  padding: 4px 12px;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 600;
  border: 1px solid rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);
`;

const PlayerInfo = ({ name, nickname, position, team, graduationYear, location }) => {
  return (
    <InfoContainer>
      <PlayerName>
        {name}
        {nickname && <Nickname>{nickname}</Nickname>}
      </PlayerName>
      <Position>{position}</Position>
      <Team>{team}</Team>
      
      <DetailRow>
        <MapPin />
        <span>{location}</span>
      </DetailRow>
      
      <DetailRow>
        <Calendar />
        <span>Class of</span>
        <GradYear>{graduationYear}</GradYear>
      </DetailRow>
    </InfoContainer>
  );
};

export default PlayerInfo;