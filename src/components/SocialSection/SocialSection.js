import React, { useState } from 'react';
import styled from 'styled-components';
import { Twitter, Instagram, Youtube, Linkedin, Mail, Phone, Copy, Check } from 'lucide-react';

const SectionContainer = styled.section`
  margin: 60px 0;
  padding-bottom: 40px;
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

const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 30px;
  }
`;

const SocialMediaContainer = styled.div`
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  padding: 30px;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: linear-gradient(90deg, #2563eb, #1d4ed8);
    border-radius: 16px 16px 0 0;
  }
`;

const ContactContainer = styled.div`
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  padding: 30px;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: linear-gradient(90deg, #059669, #10b981);
    border-radius: 16px 16px 0 0;
  }
`;

const SubTitle = styled.h3`
  font-size: 1.3rem;
  font-weight: 600;
  color: white;
  margin-bottom: 24px;
  text-align: center;
`;

const SocialLinksGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
`;

const SocialLink = styled.a`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 16px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  text-decoration: none;
  transition: all 0.3s ease;
  color: white;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
    border-color: ${props => props.color};
    background: rgba(255, 255, 255, 0.08);
  }
`;

const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  background: ${props => props.color};
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 12px ${props => `${props.color}40`};
  
  svg {
    width: 20px;
    height: 20px;
    color: white;
  }
`;

const SocialInfo = styled.div`
  flex: 1;
`;

const SocialPlatform = styled.div`
  font-size: 0.9rem;
  font-weight: 600;
  color: white;
`;

const SocialHandle = styled.div`
  font-size: 0.8rem;
  color: rgba(255, 255, 255, 0.6);
  margin-top: 2px;
`;

const ContactList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 16px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  transition: all 0.3s ease;
  
  &:hover {
    background: rgba(255, 255, 255, 0.08);
    border-color: rgba(5, 150, 105, 0.3);
  }
`;

const ContactIcon = styled.div`
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

const ContactInfo = styled.div`
  flex: 1;
`;

const ContactLabel = styled.div`
  font-size: 0.85rem;
  color: rgba(255, 255, 255, 0.6);
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

const ContactValue = styled.div`
  font-size: 1rem;
  font-weight: 600;
  color: white;
  margin-top: 2px;
`;

const CopyButton = styled.button`
  background: none;
  border: none;
  color: rgba(255, 255, 255, 0.6);
  cursor: pointer;
  padding: 8px;
  border-radius: 6px;
  transition: all 0.3s ease;
  
  &:hover {
    color: #10b981;
    background: rgba(16, 185, 129, 0.1);
  }
  
  svg {
    width: 18px;
    height: 18px;
  }
`;

const CopyFeedback = styled.div`
  position: absolute;
  top: -30px;
  right: 0;
  background: #10b981;
  color: white;
  padding: 4px 8px;
  border-radius: 6px;
  font-size: 0.8rem;
  font-weight: 500;
  opacity: ${props => props.show ? 1 : 0};
  transform: translateY(${props => props.show ? '0' : '10px'});
  transition: all 0.3s ease;
  pointer-events: none;
  
  &::after {
    content: '';
    position: absolute;
    top: 100%;
    right: 12px;
    border: 4px solid transparent;
    border-top-color: #10b981;
  }
`;

const FooterNote = styled.div`
  text-align: center;
  margin-top: 40px;
  padding: 20px;
  background: rgba(255, 255, 255, 0.03);
  border-radius: 12px;
  color: rgba(255, 255, 255, 0.6);
  font-size: 0.9rem;
  line-height: 1.5;
`;

const SocialSection = ({ playerData }) => {
  const [copiedItem, setCopiedItem] = useState(null);
  const { socialMedia } = playerData.content;
  const { email, phone } = playerData.personal;

  const copyToClipboard = (text, item) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopiedItem(item);
      setTimeout(() => setCopiedItem(null), 2000);
    });
  };

  const socialPlatforms = [
    {
      name: 'Twitter',
      url: socialMedia.twitter,
      handle: '@mjohnson84',
      icon: Twitter,
      color: '#1da1f2'
    },
    {
      name: 'Instagram',
      url: socialMedia.instagram,
      handle: '@marcus_johnson84',
      icon: Instagram,
      color: '#e4405f'
    },
    {
      name: 'YouTube',
      url: socialMedia.youtube,
      handle: 'Marcus Johnson',
      icon: Youtube,
      color: '#ff0000'
    },
    {
      name: 'LinkedIn',
      url: socialMedia.linkedin,
      handle: 'Marcus Johnson',
      icon: Linkedin,
      color: '#0077b5'
    }
  ];

  const contactInfo = [
    {
      label: 'Email',
      value: email,
      icon: Mail,
      copyText: email
    },
    {
      label: 'Phone',
      value: phone,
      icon: Phone,
      copyText: phone
    }
  ];

  return (
    <SectionContainer>
      <SectionTitle>Connect & Contact</SectionTitle>
      
      <ContentGrid>
        <SocialMediaContainer>
          <SubTitle>Follow My Journey</SubTitle>
          <SocialLinksGrid>
            {socialPlatforms.map((platform, index) => (
              <SocialLink
                key={index}
                href={platform.url}
                target="_blank"
                rel="noopener noreferrer"
                color={platform.color}
              >
                <SocialIcon color={platform.color}>
                  <platform.icon />
                </SocialIcon>
                <SocialInfo>
                  <SocialPlatform>{platform.name}</SocialPlatform>
                  <SocialHandle>{platform.handle}</SocialHandle>
                </SocialInfo>
              </SocialLink>
            ))}
          </SocialLinksGrid>
        </SocialMediaContainer>

        <ContactContainer>
          <SubTitle>Get In Touch</SubTitle>
          <ContactList>
            {contactInfo.map((contact, index) => (
              <ContactItem key={index}>
                <ContactIcon>
                  <contact.icon />
                </ContactIcon>
                <ContactInfo>
                  <ContactLabel>{contact.label}</ContactLabel>
                  <ContactValue>{contact.value}</ContactValue>
                </ContactInfo>
                <div style={{ position: 'relative' }}>
                  <CopyButton 
                    onClick={() => copyToClipboard(contact.copyText, contact.label)}
                    title={`Copy ${contact.label}`}
                  >
                    {copiedItem === contact.label ? <Check /> : <Copy />}
                  </CopyButton>
                  <CopyFeedback show={copiedItem === contact.label}>
                    Copied!
                  </CopyFeedback>
                </div>
              </ContactItem>
            ))}
          </ContactList>
        </ContactContainer>
      </ContentGrid>

      <FooterNote>
        <strong>Ready to take the next step?</strong><br />
        I'm actively seeking opportunities to play at the collegiate level while pursuing my academic goals. 
        Coaches and recruiters are welcome to reach out via email or phone to discuss how I can contribute to your program.
      </FooterNote>
    </SectionContainer>
  );
};

export default SocialSection;