import React ,{useEffect, useRef,useState} from 'react';
import { useNavigate } from 'react-router-dom';
import '../CSS/videopage.css';
import demoV2 from '../photos/demoV2.mp4';
//import icons from MUI/
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';

function VideoPage() {
  const playVideoRef=useRef(null);
let video;
  // add play and pause functionality
  const [isPlay,setisPlay]=useState(false)
  const [ispause,setispause]=useState(true)
  const videoPlay=async()=>{
    console.log(video);
    if(video&&ispause ){
    await video.play();
    }

  }
  const videoPaused=async()=>{
    console.log(video);
     await video.pause();
      setispause(true);
    }
   
    
  
  const toggolePlay=()=>{
    
    isPlay?videoPaused():videoPlay();
    setisPlay(!isPlay);
  }
  document.addEventListener("keydown",e=>{
    if(e.key===" "||e.key==='k'){
     console.log(e.key);
    toggolePlay();
   }
  })
  
useEffect(()=>{

  video=document.getElementById('VideoPlaying')
}
)

const videoUrl=localStorage.getItem('videoUrl');
  return (
    <div className='videopage-body'>
     <div className='videoPage-LeftSection'>
       <div className={`play-video-div ${isPlay?"":"paused"}`}>
       <div className='contrl-bars-div' >
       <div className='timeline-controlers'>
        <div className='controls'>
          <button className='video-play-paused-btn' onClick={toggolePlay} ><PlayArrowIcon className='play-icon'/> <PauseIcon className='pause-icon'/></button>
        </div>
       </div>
      </div>
      <video id='VideoPlaying' ref={playVideoRef} className='play-video'
        
      // autoPlay
      >
        <source src={videoUrl} type="video/mp4" />
        <source src={videoUrl} type="video/webm" />
      </video>
      
      </div>
      <div className="videoPage_downSection">
        lsflskfkskfksl
      </div>
      </div>
    </div>
  );
}

export default VideoPage;
