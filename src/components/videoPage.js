import React from 'react';
// import { useParams } from 'react-router-dom';
import demovideo from "../photos/mov_bbb.mp4";
// import { DefaultPlayer as Video } from "react-html5video";

function VideoPage() {
   // eslint-disable-next-line
    const data=[
        {
            id:12,
            title:"Adding Frontend Validation + Few Fixes in iNotebook | Complete React Course in Hindi #68",
            url:demovideo,
            // prfile_name:"CodeWithHarry",
            // profile_link:"https://www.youtube.com/@CodeWithHarry",
            // prfile_pic:"https://yt3.ggpht.com/ytc/AOPolaQMtqt8g-xxJ3BkIF06RPiJcIsPzbSOLOwDVAA5pw=s68-c-k-c0x00ffffff-no-rj"
          }
    ];
//   const { videoId } = useParams();

  // Use videoId to fetch the video data (e.g., from an API) and display it here
const videoUrl=localStorage.getItem('videoUrl');
console.log(videoUrl);
  return (
    <div>
      <h1>Video Player</h1>
      <div>
      <video  autoPlay loop muted controlscontrols={['PlayPause', 'Seek', 'Time', 'Volume', 'Fullscreen']} >
        <source src={videoUrl} type='video/mp4'></source>
        <source src={videoUrl} type='video/webm'></source>
        Your browser does not support the video tag.
    </video>
      </div>
    </div>
  );
}

export default VideoPage;
