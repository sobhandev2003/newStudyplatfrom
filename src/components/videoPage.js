import React ,{useRef,useState} from 'react';
import { useNavigate } from 'react-router-dom';

function VideoPage() {
  
  // Use videoId to fetch the video data (e.g., from an API) and display it here
const videoUrl=localStorage.getItem('videoUrl');
  return (
    <div className='videopage-body'>
      <div className='play-video-div'>
      <video className='play-video'
        controls // Enable the default video controls
        controlsList='nodownload'
       disablePictureInPicture
      
      >
        <source src={videoUrl} type="video/mp4" />
        <source src={videoUrl} type="video/webm" />
      </video>
      </div>
    </div>
  );
}

export default VideoPage;
