import React, { useState } from 'react';
import styled from 'styled-components';
import { Play, X, Video } from 'lucide-react';

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

const VideosGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 24px;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const VideoCard = styled.div`
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  overflow: hidden;
  transition: all 0.3s ease;
  position: relative;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
    border-color: rgba(37, 99, 235, 0.3);
    background: rgba(255, 255, 255, 0.08);
  }
`;

const VideoThumbnail = styled.div`
  position: relative;
  width: 100%;
  height: 200px;
  background: linear-gradient(135deg, #2563eb, #1d4ed8);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.3);
    transition: background 0.3s ease;
  }
  
  &:hover::before {
    background: rgba(0, 0, 0, 0.5);
  }
`;

const PlayButton = styled.div`
  width: 60px;
  height: 60px;
  background: rgba(255, 255, 255, 0.9);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
  transition: all 0.3s ease;
  
  svg {
    width: 24px;
    height: 24px;
    color: #2563eb;
    margin-left: 3px;
  }
  
  &:hover {
    background: white;
    transform: scale(1.1);
  }
`;

const VideoInfo = styled.div`
  padding: 20px;
`;

const VideoTitle = styled.h3`
  font-size: 1.1rem;
  font-weight: 600;
  color: white;
  margin: 0 0 8px 0;
`;

const VideoDescription = styled.p`
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.7);
  margin: 0;
  line-height: 1.4;
`;

const VideoIcon = styled.div`
  position: absolute;
  top: 12px;
  left: 12px;
  width: 32px;
  height: 32px;
  background: rgba(0, 0, 0, 0.5);
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
  
  svg {
    width: 16px;
    height: 16px;
    color: white;
  }
`;

const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.9);
  display: ${props => props.show ? 'flex' : 'none'};
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 20px;
`;

const ModalContent = styled.div`
  position: relative;
  width: 100%;
  max-width: 800px;
  aspect-ratio: 16/9;
  background: black;
  border-radius: 12px;
  overflow: hidden;
`;

const CloseButton = styled.button`
  position: absolute;
  top: -50px;
  right: 0;
  background: none;
  border: none;
  color: white;
  font-size: 2rem;
  cursor: pointer;
  padding: 10px;
  transition: color 0.3s ease;
  
  &:hover {
    color: #2563eb;
  }
  
  svg {
    width: 24px;
    height: 24px;
  }
`;

const VideoFrame = styled.iframe`
  width: 100%;
  height: 100%;
  border: none;
  border-radius: 12px;
`;

const VideoSection = ({ playerData }) => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const { videos } = playerData.content;

  const openVideo = (video) => {
    setSelectedVideo(video);
  };

  const closeVideo = () => {
    setSelectedVideo(null);
  };

  const videoList = Object.values(videos);

  // Close modal when clicking outside
  const handleModalClick = (e) => {
    if (e.target === e.currentTarget) {
      closeVideo();
    }
  };

  return (
    <SectionContainer>
      <SectionTitle>Video Highlights</SectionTitle>
      
      <VideosGrid>
        {videoList.map((video, index) => (
          <VideoCard key={index}>
            <VideoThumbnail onClick={() => openVideo(video)}>
              <VideoIcon>
                <Video />
              </VideoIcon>
              <PlayButton>
                <Play />
              </PlayButton>
            </VideoThumbnail>
            <VideoInfo>
              <VideoTitle>{video.title}</VideoTitle>
              <VideoDescription>{video.description}</VideoDescription>
            </VideoInfo>
          </VideoCard>
        ))}
      </VideosGrid>

      <Modal show={!!selectedVideo} onClick={handleModalClick}>
        {selectedVideo && (
          <ModalContent>
            <CloseButton onClick={closeVideo}>
              <X />
            </CloseButton>
            <VideoFrame
              src={selectedVideo.url}
              title={selectedVideo.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </ModalContent>
        )}
      </Modal>
    </SectionContainer>
  );
};

export default VideoSection;