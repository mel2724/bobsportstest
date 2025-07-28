import React from 'react';
import styled from 'styled-components';
import { Zap, Timer, Target } from 'lucide-react';

const Card = styled.div`
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  padding: 24px;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
    border-color: rgba(124, 58, 237, 0.3);
    background: rgba(255, 255, 255, 0.08);
  }
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: linear-gradient(90deg, #7c3aed, #8b5cf6, #a78bfa);
    border-radius: 16px 16px 0 0;
  }
`;

const CardHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 20px;
`;

const IconWrapper = styled.div`
  width: 40px;
  height: 40px;
  background: linear-gradient(135deg, #7c3aed, #8b5cf6);
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 12px rgba(124, 58, 237, 0.3);
  
  svg {
    width: 20px;
    height: 20px;
    color: white;
  }
`;

const CardTitle = styled.h3`
  font-size: 1.2rem;
  font-weight: 600;
  color: white;
  margin: 0;
`;

const SportName = styled.div`
  font-size: 1.1rem;
  font-weight: 700;
  color: #8b5cf6;
  margin-bottom: 16px;
  text-align: center;
  padding: 8px 16px;
  background: rgba(124, 58, 237, 0.1);
  border-radius: 10px;
  border: 1px solid rgba(124, 58, 237, 0.2);
`;

const EventsContainer = styled.div`
  margin-bottom: 20px;
`;

const EventsTitle = styled.div`
  font-size: 0.85rem;
  color: rgba(255, 255, 255, 0.6);
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin-bottom: 8px;
`;

const EventsList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
`;

const EventBadge = styled.span`
  background: rgba(124, 58, 237, 0.2);
  color: #a78bfa;
  padding: 4px 10px;
  border-radius: 12px;
  font-size: 0.8rem;
  font-weight: 500;
  border: 1px solid rgba(124, 58, 237, 0.3);
`;

const PersonalBestsContainer = styled.div`
  background: rgba(255, 255, 255, 0.03);
  border-radius: 10px;
  padding: 16px;
`;

const PersonalBestsTitle = styled.div`
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.8);
  font-weight: 600;
  margin-bottom: 12px;
  display: flex;
  align-items: center;
  gap: 8px;
  
  svg {
    width: 16px;
    height: 16px;
    color: #8b5cf6;
  }
`;

const PersonalBestRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  
  &:last-child {
    border-bottom: none;
  }
`;

const EventLabel = styled.span`
  font-size: 0.85rem;
  color: rgba(255, 255, 255, 0.6);
  font-weight: 500;
`;

const TimeValue = styled.span`
  font-size: 1rem;
  font-weight: 700;
  color: #8b5cf6;
`;

const MultiSportBadge = styled.div`
  background: linear-gradient(135deg, #7c3aed, #8b5cf6);
  color: white;
  padding: 6px 12px;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 600;
  text-align: center;
  margin-top: 16px;
  box-shadow: 0 4px 12px rgba(124, 58, 237, 0.3);
`;

const SecondarySportCard = ({ playerData }) => {
  const { secondarySport } = playerData.personal;
  
  return (
    <Card>
      <CardHeader>
        <IconWrapper>
          <Zap />
        </IconWrapper>
        <CardTitle>Secondary Sport</CardTitle>
      </CardHeader>
      
      <SportName>{secondarySport.name}</SportName>
      
      <EventsContainer>
        <EventsTitle>Events</EventsTitle>
        <EventsList>
          {secondarySport.events.map((event, index) => (
            <EventBadge key={index}>{event}</EventBadge>
          ))}
        </EventsList>
      </EventsContainer>
      
      <PersonalBestsContainer>
        <PersonalBestsTitle>
          <Target />
          Personal Bests
        </PersonalBestsTitle>
        
        {Object.entries(secondarySport.personalBests).map(([event, time]) => (
          <PersonalBestRow key={event}>
            <EventLabel>{event}</EventLabel>
            <TimeValue>{time}</TimeValue>
          </PersonalBestRow>
        ))}
      </PersonalBestsContainer>
      
      <MultiSportBadge>
        Multi-Sport Athlete
      </MultiSportBadge>
    </Card>
  );
};

export default SecondarySportCard;