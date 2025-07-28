import React from 'react';
import styled from 'styled-components';
import { GraduationCap, BookOpen, Award, Target } from 'lucide-react';

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
    border-color: rgba(5, 150, 105, 0.3);
    background: rgba(255, 255, 255, 0.08);
  }
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: linear-gradient(90deg, #059669, #10b981, #34d399);
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
  background: linear-gradient(135deg, #059669, #10b981);
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 12px rgba(5, 150, 105, 0.3);
  
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

const GPAContainer = styled.div`
  text-align: center;
  margin-bottom: 20px;
  padding: 16px;
  background: rgba(5, 150, 105, 0.1);
  border-radius: 12px;
  border: 1px solid rgba(5, 150, 105, 0.2);
`;

const GPAValue = styled.div`
  font-size: 2.5rem;
  font-weight: 900;
  color: #10b981;
  text-shadow: 0 0 20px rgba(16, 185, 129, 0.5);
  margin-bottom: 4px;
`;

const GPALabel = styled.div`
  font-size: 0.85rem;
  color: rgba(255, 255, 255, 0.6);
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 1px;
`;

const StatsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const StatItem = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 8px 0;
`;

const StatIcon = styled.div`
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  
  svg {
    width: 16px;
    height: 16px;
    color: #10b981;
  }
`;

const StatContent = styled.div`
  flex: 1;
`;

const StatLabel = styled.div`
  font-size: 0.85rem;
  color: rgba(255, 255, 255, 0.6);
  font-weight: 500;
`;

const StatValue = styled.div`
  font-size: 1rem;
  font-weight: 600;
  color: white;
`;

const CommitmentStatus = styled.div`
  background: ${props => props.committed ? 
    'linear-gradient(135deg, #059669, #10b981)' : 
    'linear-gradient(135deg, #f59e0b, #f97316)'
  };
  color: white;
  padding: 8px 16px;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 600;
  text-align: center;
  margin-top: 16px;
  box-shadow: 0 4px 12px ${props => props.committed ? 
    'rgba(5, 150, 105, 0.3)' : 
    'rgba(245, 158, 11, 0.3)'
  };
`;

const AcademicCard = ({ playerData }) => {
  const { academic } = playerData;
  const isCommitted = academic.commitmentStatus !== 'Uncommitted';
  
  return (
    <Card>
      <CardHeader>
        <IconWrapper>
          <GraduationCap />
        </IconWrapper>
        <CardTitle>Academic & Recruiting</CardTitle>
      </CardHeader>
      
      <GPAContainer>
        <GPAValue>{academic.gpa.toFixed(1)}</GPAValue>
        <GPALabel>Cumulative GPA</GPALabel>
      </GPAContainer>
      
      <StatsContainer>
        <StatItem>
          <StatIcon>
            <BookOpen />
          </StatIcon>
          <StatContent>
            <StatLabel>Test Scores</StatLabel>
            <StatValue>{academic.testScores}</StatValue>
          </StatContent>
        </StatItem>
        
        <StatItem>
          <StatIcon>
            <Award />
          </StatIcon>
          <StatContent>
            <StatLabel>Academic Honors</StatLabel>
            <StatValue>{academic.honors.join(', ')}</StatValue>
          </StatContent>
        </StatItem>
        
        <StatItem>
          <StatIcon>
            <Target />
          </StatIcon>
          <StatContent>
            <StatLabel>Interests</StatLabel>
            <StatValue>{academic.interests.join(', ')}</StatValue>
          </StatContent>
        </StatItem>
      </StatsContainer>
      
      <CommitmentStatus committed={isCommitted}>
        {isCommitted ? 
          `Committed to ${academic.committedSchool}` : 
          academic.commitmentStatus
        }
      </CommitmentStatus>
    </Card>
  );
};

export default AcademicCard;