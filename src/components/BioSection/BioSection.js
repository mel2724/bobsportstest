import React, { useState } from 'react';
import styled from 'styled-components';
import { User, Target, Heart, TrendingUp, Award, ChevronDown, ChevronUp } from 'lucide-react';

const SectionContainer = styled.section`
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

const BioGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 24px;
  margin-bottom: 40px;
`;

const BioCard = styled.div`
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  padding: 24px;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
    border-color: rgba(37, 99, 235, 0.3);
    background: rgba(255, 255, 255, 0.08);
  }
`;

const BioHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;
  cursor: pointer;
`;

const BioTitleContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const BioIcon = styled.div`
  width: 36px;
  height: 36px;
  background: linear-gradient(135deg, #2563eb, #1d4ed8);
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 12px rgba(37, 99, 235, 0.3);
  
  svg {
    width: 18px;
    height: 18px;
    color: white;
  }
`;

const BioTitle = styled.h3`
  font-size: 1.1rem;
  font-weight: 600;
  color: white;
  margin: 0;
`;

const ExpandIcon = styled.div`
  transition: transform 0.3s ease;
  transform: ${props => props.expanded ? 'rotate(180deg)' : 'rotate(0deg)'};
  
  svg {
    width: 20px;
    height: 20px;
    color: rgba(255, 255, 255, 0.6);
  }
`;

const BioContent = styled.div`
  max-height: ${props => props.expanded ? '500px' : '0'};
  overflow: hidden;
  transition: max-height 0.3s ease;
  
  p {
    color: rgba(255, 255, 255, 0.8);
    line-height: 1.6;
    margin: 0;
    font-size: 0.95rem;
  }
`;

const AchievementsContainer = styled.div`
  margin-top: 40px;
`;

const AchievementsTitle = styled.h3`
  font-size: 1.4rem;
  font-weight: 600;
  color: white;
  text-align: center;
  margin-bottom: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  
  svg {
    width: 24px;
    height: 24px;
    color: #fbbf24;
  }
`;

const AchievementsBadges = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  justify-content: center;
`;

const AchievementBadge = styled.div`
  background: ${props => props.color || '#2563eb'};
  color: white;
  padding: 8px 16px;
  border-radius: 25px;
  font-size: 0.85rem;
  font-weight: 600;
  box-shadow: 0 4px 12px ${props => `${props.color}40` || 'rgba(37, 99, 235, 0.3)'};
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  
  &:hover {
    transform: translateY(-2px) scale(1.05);
    box-shadow: 0 8px 20px ${props => `${props.color}60` || 'rgba(37, 99, 235, 0.4)'};
  }
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
    transition: left 0.5s ease;
  }
  
  &:hover::before {
    left: 100%;
  }
`;

const BadgeYear = styled.span`
  opacity: 0.8;
  font-size: 0.75rem;
  margin-left: 8px;
`;

const BioSection = ({ playerData }) => {
  const [expandedSections, setExpandedSections] = useState({});
  const { bio, achievements } = playerData.content;

  const toggleSection = (section) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const bioSections = [
    {
      key: 'personal',
      title: 'Personal Story',
      icon: User,
      content: bio.personal
    },
    {
      key: 'goals',
      title: 'Goals & Aspirations',
      icon: Target,
      content: bio.goals
    },
    {
      key: 'motivation',
      title: 'Motivation',
      icon: Heart,
      content: bio.motivation
    },
    {
      key: 'challenges',
      title: 'Overcoming Challenges',
      icon: TrendingUp,
      content: bio.challenges
    }
  ];

  return (
    <SectionContainer>
      <SectionTitle>About Marcus</SectionTitle>
      
      <BioGrid>
        {bioSections.map((section) => (
          <BioCard key={section.key}>
            <BioHeader onClick={() => toggleSection(section.key)}>
              <BioTitleContainer>
                <BioIcon>
                  <section.icon />
                </BioIcon>
                <BioTitle>{section.title}</BioTitle>
              </BioTitleContainer>
              <ExpandIcon expanded={expandedSections[section.key]}>
                <ChevronDown />
              </ExpandIcon>
            </BioHeader>
            <BioContent expanded={expandedSections[section.key]}>
              <p>{section.content}</p>
            </BioContent>
          </BioCard>
        ))}
      </BioGrid>

      <AchievementsContainer>
        <AchievementsTitle>
          <Award />
          Achievements & Honors
        </AchievementsTitle>
        <AchievementsBadges>
          {achievements.map((achievement, index) => (
            <AchievementBadge key={index} color={achievement.color}>
              {achievement.title}
              <BadgeYear>({achievement.year})</BadgeYear>
            </AchievementBadge>
          ))}
        </AchievementsBadges>
      </AchievementsContainer>
    </SectionContainer>
  );
};

export default BioSection;