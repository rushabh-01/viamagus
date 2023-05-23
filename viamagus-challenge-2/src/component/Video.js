import React, { useState } from 'react';
import ReactPlayer from 'react-player';
import videos from '../data/data';
import '../style/video.css';

const Video = () => {
  const [selectedVideo, setSelectedVideo] = useState(videos[1].url);
  const handleThumbnailClick = (video) => {
    setSelectedVideo(video.url);
  };

  return (
    <div className="video-page">
      <h1>Video Gallery</h1>
      <div className="video-container">
        <ReactPlayer url={selectedVideo} controls />
        </div>
        <div className="thumbnail-container">
          {videos.map((video, index) => (
            // <div
            //   className="thumbnail-wrapper"
              
            // >
              <img
                className="thumbnail"
                src={video.thumbnail}
                alt={`Thumbnail ${index + 1}`}
                key={index}
              onClick={() => handleThumbnailClick(video)}
              />
            // </div>
          ))}
        </div>
      
    </div>
  );
};

export default Video;
