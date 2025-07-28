import React from 'react';
import styled from 'styled-components';

const AvatarContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const AvatarImage = styled.div`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background: ${props => props.photo ? `url(${props.photo})` : 'linear-gradient(135deg, #1e40af, #3b82f6)'};
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 4px solid rgba(255, 255, 255, 0.2);
  box-shadow: 
    0 0 0 2px rgba(255, 255, 255, 0.1),
    0 10px 30px rgba(0, 0, 0, 0.3),
    inset 0 0 0 1px rgba(255, 255, 255, 0.1);
  position: relative;
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: scale(1.05);
    box-shadow: 
      0 0 0 2px rgba(255, 255, 255, 0.2),
      0 20px 40px rgba(0, 0, 0, 0.4),
      inset 0 0 0 1px rgba(255, 255, 255, 0.2);
  }
  
  @media (max-width: 768px) {
    width: 100px;
    height: 100px;
  }
`;

const InitialsText = styled.span`
  font-size: 2.5rem;
  font-weight: 800;
  color: white;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  letter-spacing: 2px;
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const StatusIndicator = styled.div`
  position: absolute;
  bottom: 8px;
  right: 8px;
  width: 20px;
  height: 20px;
  background: #10b981;
  border-radius: 50%;
  border: 3px solid white;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
  
  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 8px;
    height: 8px;
    background: white;
    border-radius: 50%;
  }
`;

const PlayerAvatar = ({ name, photo }) => {
  // Generate initials from name
  const getInitials = (fullName) => {
    return fullName
      .split(' ')
      .map(name => name.charAt(0))
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };

  return (
    <AvatarContainer>
      <AvatarImage photo={photo}>
        {!photo && (
          <InitialsText>
            {getInitials(name)}
          </InitialsText>
        )}
      </AvatarImage>
      <StatusIndicator title="Active Player" />
    </AvatarContainer>
  );
};

export default PlayerAvatar;