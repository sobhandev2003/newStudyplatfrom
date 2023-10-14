import React ,{useEffect, useRef,useState} from 'react';
import { useNavigate } from 'react-router-dom';
import '../CSS/videopage.css';
import demoV2 from '../photos/demoV2.mp4';
//import icons from MUI
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';
import PictureInPictureAltIcon from '@mui/icons-material/PictureInPictureAlt';
import Crop75Icon from '@mui/icons-material/Crop75';
import Crop169Icon from '@mui/icons-material/Crop169';
import FullscreenRoundedIcon from '@mui/icons-material/FullscreenRounded';
import FullscreenExitIcon from '@mui/icons-material/FullscreenExit';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';

import VolumeDownIcon from '@mui/icons-material/VolumeDown';
import VolumeOffIcon from '@mui/icons-material/VolumeOff';

function VideoPage() {

let video,videoContener,totalTimediv;
let isKeyProcessed = false;
const refarVideo=useRef(null);
const refvideoContener=useRef(null);
  // add play and pause functionality
  const [isPlay,setisPlay]=useState(false)
  const [ispause,setispause]=useState(true)
  const videoPlay=async()=>{
    video = refarVideo.current;
    console.log(video);
    if(video&&ispause ){
    await video.play();
    }

  }
  const videoPaused=async()=>{
    video = refarVideo.current;
    if(video){
      await video.pause();

      setispause(true);
    }
    }
   
  const toggolePlay=()=>{
    if(!isKeyProcessed)
    {
     console.log("presKey");
     isPlay?videoPaused():videoPlay();
    setisPlay(!isPlay);}
  }
 //Volume control
 const [volume,steVolume] =useState(1);
 const [VolumeLevel,setVolumeLevel] =useState("high");
 const volumeValueInput=useRef(null);
 let volumeLevel='high';
 const handelVolumeChange=(event)=>{
  let newVolumeValue=event.target.value;
  video = refarVideo.current;
  if(video){
    steVolume(newVolumeValue);
  video.volume=newVolumeValue;
  
  video.muted=newVolumeValue===0;
  setVolumeLevelValue(video);}
 }

const setVolumeLevelValue=(video)=>{
  if(video.volume==0 || video.muted ){
    setVolumeLevel("muted");
    steVolume(0);
   }
   else if(video.volume< 0.5){
    setVolumeLevel('down');
   }
   else{
    setVolumeLevel('high');
   }
}


  const toggoleVolumeMute=()=>{
    video = refarVideo.current;
    video.muted=!video.muted;
    steVolume(video.volume);
    setVolumeLevelValue(video);
   
  }
  // video Duration
  const [totalVideoDuration,setTotalVideoDuration]=useState("0");
  const [currentDuration,setcurrentDuration]=useState("0:00")

  // const [totalDuration,setTotalDuration]=useState(refarVideo.current.duration);
  // const [duration, setDuration] = useState(0);
  const leadingZeroFormater=new Intl.NumberFormat(undefined,
    {minimumIntegerDigits:2}
    )
  const formatduration=(duration)=>{
const sec=Math.floor(+duration%60);
const min=Math.floor(+duration/60)%60;
const hours=Math.floor(+duration/3600);
if(hours===0){
return `${min}:${leadingZeroFormater.format(sec)}`
}
return `${hours}:${leadingZeroFormater.format(min)}:${leadingZeroFormater.format(sec)}`
  }
  const handleOnLoadedMetadata = () => {
    video = refarVideo.current;
    if (video) {
      
      setTotalVideoDuration(formatduration(video.duration));
    }
    video.addEventListener('timeupdate',()=>{
      setcurrentDuration(formatduration(video.currentTime));
     });
    
  };

  
    
  

// video view
const [isThearter,setisTheater]=useState(false);
const [isFulscren,setisFulscren]=useState(false);
const  toggoleFulscren=()=>{
  console.log("1");
  videoContener= refvideoContener.current;
  if(document.fullscreenElement==null){
videoContener.requestFullscreen();
setisFulscren(true);
  }
  else{
    document.exitFullscreen();
    setisFulscren(false);
  }
}



document.addEventListener("keydown",e=>{
  
    const tagName=document.activeElement.tagName.toLowerCase();
    if(tagName==='input')return;
    let presKey=e.key.toLowerCase();
    console.log(presKey);
    switch(presKey){
      case ' ':
        if(tagName==='button')return;
      case 'k':
      // case 'K':
          toggolePlay();
          break;
      case 'f':
        toggoleFulscren();
        break;  
      case 't':
        
        // 
       
        setisTheater(!isThearter);
       
        break;
      //  case 'm':
      //   toggoleVolumeMute(); 
        default:
    }
    

  
  })
  document.addEventListener("keyup", () => {
    isKeyProcessed = false;
  });

const videoUrl=localStorage.getItem('videoUrl');


  return (
    <div className='videopage-body'>
     {/* <div className='videoPage-LeftSection'> */}
       <div id="video-Contener" ref={refvideoContener} className={`play-video-div ${isPlay?"":"paused"} ${isThearter?"thearter":""} ${isFulscren?"fullScreen":""}`} data-volume-level={VolumeLevel} >
        {/* Video controlers  */}
        
       <div className='contrl-bars-div' >
       <div className='timeline-controlers'>
        <div className='controls'>
          <button className='video-play-paused-btn' onClick={toggolePlay} ><PlayArrowIcon className='play-icon'/> <PauseIcon className='pause-icon'/></button>
        <div className='volume-div'>
        <button className='volume-contorls-btn' onClick={toggoleVolumeMute}><VolumeUpIcon className='volume-high-icon'/><VolumeDownIcon className='volume-down-icon' /><VolumeOffIcon className='volume-muted-icon'  /></button>
            <input type='range' ref={volumeValueInput}  className='volume-slider' min="0" max="1" step="any" value={volume} onChange={handelVolumeChange}/>
        </div>
        <div className="duration-div">
          <div id="current-time">{currentDuration}</div>
          /
          <div id="total-time">{totalVideoDuration}</div>
        </div>
        <div className='contorlrsbar-right'>
        {/* <button className='mini-player-btn'><PictureInPictureAltIcon/></button> */}
        <button className='theater-btn ' onClick={()=>{setisTheater(!isThearter)}}><  Crop169Icon className='tall-ico'/><Crop75Icon className='wide-ico'/></button>
        <button className='full-screen-btn ' onClick={()=>{toggoleFulscren()}}><FullscreenRoundedIcon className='full-sc-icon'/><FullscreenExitIcon className='exit-full-sc-icon'/></button>
        </div>
        </div>
       </div>
      </div>
      {/* video  */}
      <video ref={refarVideo} id='VideoPlaying' className='play-video'
        onClick={toggolePlay}
        onLoadedMetadata={handleOnLoadedMetadata}
        // src={videoUrl}
      >
        <source src={videoUrl} type="video/mp4" />
        <source src={videoUrl} type="video/webm" />
      </video>
      
      </div>
      {/* <div className="videoPage_downSection">
        lsflskfkskfksl
      </div> */}
      {/* </div> */}
    </div>
  );
}

export default VideoPage;
