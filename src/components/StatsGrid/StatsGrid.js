import React from 'react';
import styled from 'styled-components';
import PersonalInfoCard from './PersonalInfoCard';
import AcademicCard from './AcademicCard';
import AthleticCard from './AthleticCard';
import SecondarySportCard from './SecondarySportCard';

const GridContainer = styled.section`
  margin: 60px 0;
`;

const SectionTitle = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  color: white;
  text-align: center;
  margin-bottom: 40px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  
  &::after {
    content: '';
    display: block;
    width: 60px;
    height: 3px;
    background: linear-gradient(90deg, #2563eb, #1d4ed8);
    margin: 10px auto;
    border-radius: 2px;
  }
`;

const StatsGridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 16px;
  }
`;

const StatsGrid = ({ playerData }) => {
  return (
    <GridContainer>
      <SectionTitle>Player Profile</SectionTitle>
      <StatsGridContainer>
        <PersonalInfoCard playerData={playerData} />
        <AcademicCard playerData={playerData} />
        <AthleticCard playerData={playerData} />
        {playerData.personal.secondarySport && (
          <SecondarySportCard playerData={playerData} />
        )}
      </StatsGridContainer>
    </GridContainer>
  );
};

export default StatsGrid;