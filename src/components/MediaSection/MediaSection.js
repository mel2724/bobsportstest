import React from 'react';
import styled from 'styled-components';
import { FileText, Video, Download, ExternalLink } from 'lucide-react';

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

const MediaGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 20px;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const MediaCard = styled.a`
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  padding: 24px;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  text-decoration: none;
  display: block;
  
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
    background: ${props => props.type === 'video' ? 
      'linear-gradient(90deg, #dc2626, #ef4444)' : 
      'linear-gradient(90deg, #059669, #10b981)'
    };
    border-radius: 16px 16px 0 0;
  }
`;

const MediaHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 16px;
`;

const MediaIcon = styled.div`
  width: 40px;
  height: 40px;
  background: ${props => props.type === 'video' ? 
    'linear-gradient(135deg, #dc2626, #ef4444)' : 
    'linear-gradient(135deg, #059669, #10b981)'
  };
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: ${props => props.type === 'video' ? 
    '0 4px 12px rgba(220, 38, 38, 0.3)' : 
    '0 4px 12px rgba(5, 150, 105, 0.3)'
  };
  
  svg {
    width: 20px;
    height: 20px;
    color: white;
  }
`;

const MediaTitle = styled.h3`
  font-size: 1.1rem;
  font-weight: 600;
  color: white;
  margin: 0;
  flex: 1;
`;

const ExternalLinkIcon = styled.div`
  opacity: 0.6;
  transition: opacity 0.3s ease;
  
  ${MediaCard}:hover & {
    opacity: 1;
  }
  
  svg {
    width: 18px;
    height: 18px;
    color: #2563eb;
  }
`;

const MediaDescription = styled.p`
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.7);
  margin: 0;
  line-height: 1.4;
`;

const MediaType = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  background: ${props => props.type === 'video' ? 
    'rgba(220, 38, 38, 0.1)' : 
    'rgba(5, 150, 105, 0.1)'
  };
  color: ${props => props.type === 'video' ? '#ef4444' : '#10b981'};
  padding: 4px 10px;
  border-radius: 12px;
  font-size: 0.8rem;
  font-weight: 500;
  margin-top: 12px;
  border: 1px solid ${props => props.type === 'video' ? 
    'rgba(220, 38, 38, 0.2)' : 
    'rgba(5, 150, 105, 0.2)'
  };
  
  svg {
    width: 14px;
    height: 14px;
  }
`;

const CoachQuotesContainer = styled.div`
  margin-top: 60px;
  background: rgba(255, 255, 255, 0.03);
  border-radius: 16px;
  padding: 40px;
  border: 1px solid rgba(255, 255, 255, 0.1);
`;

const QuotesTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  color: white;
  text-align: center;
  margin-bottom: 30px;
`;

const QuotesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 24px;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const QuoteCard = styled.div`
  background: rgba(255, 255, 255, 0.05);
  border-radius: 12px;
  padding: 24px;
  border-left: 4px solid #2563eb;
  position: relative;
  
  &::before {
    content: '"';
    position: absolute;
    top: -10px;
    left: 20px;
    font-size: 4rem;
    color: rgba(37, 99, 235, 0.3);
    font-family: Georgia, serif;
  }
`;

const Quote = styled.p`
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.9);
  line-height: 1.6;
  margin: 0 0 16px 0;
  font-style: italic;
`;

const QuoteAuthor = styled.div`
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.7);
  font-weight: 600;
`;

const QuoteTitle = styled.div`
  font-size: 0.8rem;
  color: rgba(255, 255, 255, 0.5);
  margin-top: 4px;
`;

const MediaSection = ({ playerData }) => {
  const { mediaLinks, coachQuotes } = playerData.content;

  const getMediaIcon = (type) => {
    switch (type) {
      case 'video':
        return Video;
      case 'document':
        return FileText;
      default:
        return Download;
    }
  };

  return (
    <SectionContainer>
      <SectionTitle>Media & Resources</SectionTitle>
      
      <MediaGrid>
        {mediaLinks.map((media, index) => {
          const IconComponent = getMediaIcon(media.type);
          
          return (
            <MediaCard 
              key={index} 
              href={media.url}
              target="_blank"
              rel="noopener noreferrer"
              type={media.type}
            >
              <MediaHeader>
                <MediaIcon type={media.type}>
                  <IconComponent />
                </MediaIcon>
                <MediaTitle>{media.title}</MediaTitle>
                <ExternalLinkIcon>
                  <ExternalLink />
                </ExternalLinkIcon>
              </MediaHeader>
              
              <MediaDescription>{media.description}</MediaDescription>
              
              <MediaType type={media.type}>
                <IconComponent />
                {media.type === 'video' ? 'Video' : 'Document'}
              </MediaType>
            </MediaCard>
          );
        })}
      </MediaGrid>

      <CoachQuotesContainer>
        <QuotesTitle>What Coaches Say</QuotesTitle>
        <QuotesGrid>
          {coachQuotes.map((quote, index) => (
            <QuoteCard key={index}>
              <Quote>{quote.quote}</Quote>
              <QuoteAuthor>— {quote.author}</QuoteAuthor>
              <QuoteTitle>{quote.title}</QuoteTitle>
            </QuoteCard>
          ))}
        </QuotesGrid>
      </CoachQuotesContainer>
    </SectionContainer>
  );
};

export default MediaSection;