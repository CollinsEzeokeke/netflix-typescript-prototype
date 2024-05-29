import React from 'react';

interface VideoPlayerProps {
  src: string;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ src }) => {
  return (
    <div>
      <video autoPlay playsInline muted loop controls={false}>
        <source src={src} type="video/mp4" />
      </video>
    </div>
  );
};

export default VideoPlayer;
