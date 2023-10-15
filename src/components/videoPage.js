import React from 'react'
import Videopagemainvideo from './Videopagemainvideo';

function VideoPage() {

  const videoUrl=localStorage.getItem('videoUrl');

  return (
    <div className='videopage-body'>
      <Videopagemainvideo videoUrl={videoUrl}/>
      {/* <div className="videoPage_downSection">
        lsflskfkskfksl
      </div> */}
    </div>
  );
}

export default VideoPage;
