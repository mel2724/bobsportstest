import React from 'react';
import styled from 'styled-components';
import { playerData } from './data/playerData';
import Header from './components/Header/Header';
import StatsGrid from './components/StatsGrid/StatsGrid';
import BioSection from './components/BioSection/BioSection';
import VideoSection from './components/VideoSection/VideoSection';
import MediaSection from './components/MediaSection/MediaSection';
import SocialSection from './components/SocialSection/SocialSection';

const AppContainer = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #0f1419 0%, #1a2332 100%);
  position: relative;
  
  /* Grid pattern overlay for visual depth */
  &::before {
    content: '';
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: 
      radial-gradient(circle at 1px 1px, rgba(255,255,255,0.03) 1px, transparent 0);
    background-size: 50px 50px;
    pointer-events: none;
    z-index: 0;
  }
`;

const ProfileContainer = styled.main`
  position: relative;
  z-index: 1;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

const SectionDivider = styled.div`
  height: 2px;
  background: linear-gradient(90deg, transparent, rgba(37, 99, 235, 0.3), transparent);
  margin: 60px 0;
  border-radius: 1px;
`;

function App() {
  return (
    <AppContainer>
      <ProfileContainer>
        <Header playerData={playerData} />
        <SectionDivider />
        <StatsGrid playerData={playerData} />
        <SectionDivider />
        <BioSection playerData={playerData} />
        <SectionDivider />
        <VideoSection playerData={playerData} />
        <SectionDivider />
        <MediaSection playerData={playerData} />
        <SectionDivider />
        <SocialSection playerData={playerData} />
      </ProfileContainer>
    </AppContainer>
  );
}

export default App;