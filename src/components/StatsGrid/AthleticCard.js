import React from 'react';
import styled from 'styled-components';
import { Zap, TrendingUp, Dumbbell, Activity } from 'lucide-react';

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
    border-color: rgba(239, 68, 68, 0.3);
    background: rgba(255, 255, 255, 0.08);
  }
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: linear-gradient(90deg, #dc2626, #ef4444, #f87171);
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
  background: linear-gradient(135deg, #dc2626, #ef4444);
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 12px rgba(220, 38, 38, 0.3);
  
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

const PerformanceGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
  margin-bottom: 20px;
`;

const PerformanceItem = styled.div`
  background: rgba(220, 38, 38, 0.1);
  border: 1px solid rgba(220, 38, 38, 0.2);
  border-radius: 10px;
  padding: 12px;
  text-align: center;
`;

const PerformanceValue = styled.div`
  font-size: 1.4rem;
  font-weight: 800;
  color: #ef4444;
  margin-bottom: 4px;
`;

const PerformanceLabel = styled.div`
  font-size: 0.75rem;
  color: rgba(255, 255, 255, 0.6);
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

const SeasonStatsContainer = styled.div`
  background: rgba(255, 255, 255, 0.03);
  border-radius: 10px;
  padding: 16px;
  margin-top: 16px;
`;

const SeasonStatsTitle = styled.div`
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
    color: #ef4444;
  }
`;

const StatsRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 6px 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  
  &:last-child {
    border-bottom: none;
  }
`;

const StatLabel = styled.span`
  font-size: 0.85rem;
  color: rgba(255, 255, 255, 0.6);
  font-weight: 500;
`;

const StatValue = styled.span`
  font-size: 0.9rem;
  font-weight: 700;
  color: white;
`;

const HighlightBadge = styled.div`
  background: linear-gradient(135deg, #dc2626, #ef4444);
  color: white;
  padding: 6px 12px;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 600;
  text-align: center;
  margin-top: 16px;
  box-shadow: 0 4px 12px rgba(220, 38, 38, 0.3);
`;

const AthleticCard = ({ playerData }) => {
  const { athletic } = playerData;
  const currentSeasonStats = athletic.seasonStats['2024'];
  
  return (
    <Card>
      <CardHeader>
        <IconWrapper>
          <Activity />
        </IconWrapper>
        <CardTitle>Athletic Performance</CardTitle>
      </CardHeader>
      
      <PerformanceGrid>
        <PerformanceItem>
          <PerformanceValue>{athletic.fortyYard}</PerformanceValue>
          <PerformanceLabel>40-Yard Dash</PerformanceLabel>
        </PerformanceItem>
        
        <PerformanceItem>
          <PerformanceValue>{athletic.verticalJump}</PerformanceValue>
          <PerformanceLabel>Vertical Jump</PerformanceLabel>
        </PerformanceItem>
        
        <PerformanceItem>
          <PerformanceValue>{athletic.benchPress}</PerformanceValue>
          <PerformanceLabel>Bench Press</PerformanceLabel>
        </PerformanceItem>
        
        <PerformanceItem>
          <PerformanceValue>{athletic.squat}</PerformanceValue>
          <PerformanceLabel>Squat</PerformanceLabel>
        </PerformanceItem>
      </PerformanceGrid>
      
      <SeasonStatsContainer>
        <SeasonStatsTitle>
          <TrendingUp />
          2024 Season Stats
        </SeasonStatsTitle>
        
        <StatsRow>
          <StatLabel>Receptions</StatLabel>
          <StatValue>{currentSeasonStats.receptions}</StatValue>
        </StatsRow>
        
        <StatsRow>
          <StatLabel>Receiving Yards</StatLabel>
          <StatValue>{currentSeasonStats.receivingYards.toLocaleString()}</StatValue>
        </StatsRow>
        
        <StatsRow>
          <StatLabel>Touchdowns</StatLabel>
          <StatValue>{currentSeasonStats.touchdowns}</StatValue>
        </StatsRow>
        
        <StatsRow>
          <StatLabel>Avg per Catch</StatLabel>
          <StatValue>{currentSeasonStats.averagePerCatch}</StatValue>
        </StatsRow>
        
        <StatsRow>
          <StatLabel>Longest Reception</StatLabel>
          <StatValue>{currentSeasonStats.longestReception} yards</StatValue>
        </StatsRow>
      </SeasonStatsContainer>
      
      <HighlightBadge>
        {athletic.careerHighlights[0]}
      </HighlightBadge>
    </Card>
  );
};

export default AthleticCard;