import React from 'react';
import styled from 'styled-components';
import { User, Ruler, Weight, Calendar, Trophy } from 'lucide-react';

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
    border-color: rgba(37, 99, 235, 0.3);
    background: rgba(255, 255, 255, 0.08);
  }
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: linear-gradient(90deg, #2563eb, #1d4ed8, #1e40af);
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
  background: linear-gradient(135deg, #2563eb, #1d4ed8);
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 12px rgba(37, 99, 235, 0.3);
  
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

const StatsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
`;

const StatItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const StatLabel = styled.span`
  font-size: 0.85rem;
  color: rgba(255, 255, 255, 0.6);
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

const StatValue = styled.span`
  font-size: 1.1rem;
  font-weight: 700;
  color: white;
  display: flex;
  align-items: center;
  gap: 6px;
  
  svg {
    width: 16px;
    height: 16px;
    color: #2563eb;
  }
`;

const SportBadge = styled.div`
  background: linear-gradient(135deg, #2563eb, #1d4ed8);
  color: white;
  padding: 6px 12px;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 600;
  text-align: center;
  margin-top: 16px;
  box-shadow: 0 4px 12px rgba(37, 99, 235, 0.3);
`;

const PersonalInfoCard = ({ playerData }) => {
  const { personal } = playerData;
  
  return (
    <Card>
      <CardHeader>
        <IconWrapper>
          <User />
        </IconWrapper>
        <CardTitle>Personal Information</CardTitle>
      </CardHeader>
      
      <StatsContainer>
        <StatItem>
          <StatLabel>Height</StatLabel>
          <StatValue>
            <Ruler />
            {personal.height}
          </StatValue>
        </StatItem>
        
        <StatItem>
          <StatLabel>Weight</StatLabel>
          <StatValue>
            <Weight />
            {personal.weight} lbs
          </StatValue>
        </StatItem>
        
        <StatItem>
          <StatLabel>Graduation</StatLabel>
          <StatValue>
            <Calendar />
            {personal.graduationYear}
          </StatValue>
        </StatItem>
        
        <StatItem>
          <StatLabel>Primary Sport</StatLabel>
          <StatValue>
            <Trophy />
            {personal.sport}
          </StatValue>
        </StatItem>
      </StatsContainer>
      
      <SportBadge>
        {personal.position} • #{personal.jerseyNumber}
      </SportBadge>
    </Card>
  );
};

export default PersonalInfoCard;