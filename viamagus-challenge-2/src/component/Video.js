import React, { useState,useEffect } from 'react';
import ReactPlayer from 'react-player';
import videos from '../data/data';
import '../style/video.css';

const Video = () => {
  const [selectedVideo, setSelectedVideo] = useState(videos[1].url);
  const handleThumbnailClick = (video) => {
    setSelectedVideo(video.url);
  };

  const [mobile, setMobile] = useState(true);
  useEffect(() => {
    window.innerWidth <= 768 ? setMobile(true) : setMobile(false);
  }, [mobile]);

  return (
    <div className="video-page">
      <h1>Video Gallery</h1>
    {mobile ?
     <>
     <div className="video-container">
     <ReactPlayer width={'auto'} url={selectedVideo} controls />
   </div>
   <div className="thumbnail-container-mobile">
       {videos.map((video, index) => (
           <img
             className="thumbnail"
             src={video.thumbnail}
             alt={`Thumbnail ${index + 1}`}
             key={index}
           onClick={() => handleThumbnailClick(video)}
           />
       ))}
     </div>
     </>
     :
    <>
      <div className="video-container">
      <ReactPlayer url={selectedVideo} controls />
    </div>
    <div className="thumbnail-container">
        {videos.map((video, index) => (
            <img
              className="thumbnail"
              src={video.thumbnail}
              alt={`Thumbnail ${index + 1}`}
              key={index}
            onClick={() => handleThumbnailClick(video)}
            />
        ))}
      </div>
      </>
    }
      
      
    </div>
  );
};

export default Video;
