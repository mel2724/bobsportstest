import React from 'react';
import styled from 'styled-components';
import PlayerAvatar from './PlayerAvatar';
import PlayerInfo from './PlayerInfo';
import JerseyNumber from './JerseyNumber';

const HeaderContainer = styled.header`
  background: linear-gradient(135deg, #2563eb 0%, #1d4ed8 50%, #1e40af 100%);
  border-radius: 20px;
  padding: 40px;
  margin: 40px 0;
  position: relative;
  overflow: hidden;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
  
  /* Grid pattern overlay */
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: 
      linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
      linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px);
    background-size: 30px 30px;
    pointer-events: none;
  }
  
  @media (max-width: 768px) {
    padding: 30px 20px;
    margin: 20px 0;
  }
`;

const HeaderContent = styled.div`
  display: grid;
  grid-template-columns: auto 1fr auto;
  gap: 30px;
  align-items: center;
  position: relative;
  z-index: 1;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    text-align: center;
    gap: 20px;
  }
`;

const GlowEffect = styled.div`
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%);
  animation: float 6s ease-in-out infinite;
  pointer-events: none;
  
  @keyframes float {
    0%, 100% { transform: translateY(0px) rotate(0deg); }
    50% { transform: translateY(-20px) rotate(180deg); }
  }
`;

const Header = ({ playerData }) => {
  return (
    <HeaderContainer>
      <GlowEffect />
      <HeaderContent>
        <PlayerAvatar 
          name={playerData.personal.name}
          photo={playerData.personal.photo}
        />
        <PlayerInfo 
          name={playerData.personal.name}
          nickname={playerData.personal.nickname}
          position={playerData.personal.position}
          team={playerData.personal.team}
          graduationYear={playerData.personal.graduationYear}
          location={playerData.personal.location}
        />
        <JerseyNumber 
          number={playerData.personal.jerseyNumber}
        />
      </HeaderContent>
    </HeaderContainer>
  );
};

export default Header;