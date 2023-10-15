import React ,{useEffect, useRef,useState} from 'react';
import '../CSS/videopage.css';
import sampleCaption from '../photos/sample.vtt';
//import icons from MUI
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';
import Crop75Icon from '@mui/icons-material/Crop75';
import Crop169Icon from '@mui/icons-material/Crop169';
import FullscreenRoundedIcon from '@mui/icons-material/FullscreenRounded';
import FullscreenExitIcon from '@mui/icons-material/FullscreenExit';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';

import VolumeDownIcon from '@mui/icons-material/VolumeDown';
import VolumeOffIcon from '@mui/icons-material/VolumeOff';
import ClosedCaptionOffIcon from '@mui/icons-material/ClosedCaptionOff';
function Videopagemainvideo(props) {
    
let video,videoContener;
let isKeyProcessed = false;
const refarVideo=useRef(null);
const refvideoContener=useRef(null);
const refCaption=useRef(null);
const refPlaybackSpeed=useRef(null);
const refTimlineContorls=useRef(null);
const refPlayBtn=useRef(null);
const refThetearBtn=useRef(null);
const refFullScreenBtn=useRef(null);
//Timeline

const toggleScribing=(e)=>{

  if(refTimlineContorls){
    video = refarVideo.current;
  const timelineContener=refTimlineContorls.current;
  const rect=timelineContener.getBoundingClientRect();
  const parcent=Math.min(Math.max(0,e.pageX-rect.x),rect.width)/rect.width;
  timelineContener.style.setProperty("--privew-postion",parcent);
video.currentTime=parcent*video.duration; 
 
  handelTimlineUpdate(e);
  }
}
const handelTimlineUpdate=(e)=>{
    const timelineContener=refTimlineContorls.current;
 if(timelineContener){
  const rect=timelineContener.getBoundingClientRect();
  let parcent=Math.min(Math.max(0,e.pageX-rect.x),rect.width)/rect.width;
  timelineContener.style.setProperty("--privew-postion",parcent);


 }
  
}
  // add play and pause functionality
  const [isPlay,setisPlay]=useState(false)
  const [ispause,setispause]=useState(true)
  const videoPlay=async()=>{
    video = refarVideo.current;
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
   
      
    setisPlay(!isPlay);
     isPlay?videoPaused():videoPlay();
     console.log(isPlay);
     
  
  
  }
 //Volume control
 const [volume,steVolume] =useState(1);
 const [VolumeLevel,setVolumeLevel] =useState("high");
 const volumeValueInput=useRef(null);
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
  if(+video.volume===0 || video.muted ){
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
      const timelineContener=refTimlineContorls.current;
      setcurrentDuration(formatduration(video.currentTime));
      const parcent=video.currentTime/video.duration;
      timelineContener.style.setProperty("--progress-postion",parcent);

     });
    
  };

  
    
  

// video view
const [isThearter,setisTheater]=useState(false);
const [isFulscren,setisFulscren]=useState(false);
const  toggoleFulscren=()=>{
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
//Playback speed rate
const togglePlaybackSpeed=()=>{
  video = refarVideo.current;
  let playbackSpeedBtn =refPlaybackSpeed.current;
  if(video ){
    let newPlaybackRate=video.playbackRate+0.25;
    if(newPlaybackRate>2)newPlaybackRate=.25  ;
    video.playbackRate=newPlaybackRate;
    playbackSpeedBtn.textContent=`${newPlaybackRate}x`;

  }



}
//  Captions
const [isCaption,setisCaption] =useState(false);
const toggleCaption=()=>{
  video = refarVideo.current;
  if(video){
    video.textTracks[0].mode==='showing'?video.textTracks[0].mode='hidden':video.textTracks[0].mode='showing';
    setisCaption(!isCaption);
  }
}
let isRun=false;
useEffect( ()=>{
  video = refarVideo.current;

  document.addEventListener("keydown",async(e)=>{
  if(isRun)return;
  isRun=true;
  
    const tagName=document.activeElement.tagName.toLowerCase();
    if(tagName==='input')return;
    let presKey=e.key.toLowerCase();
    switch(presKey){
      case ' ':
        if(tagName==='button')return;
      case 'k':
          const playPauseBtn=refPlayBtn.current;
          if(playPauseBtn){
            playPauseBtn.click();
          }
          break;
      case 'f':
       const fullScreenBtn=refFullScreenBtn.current;
       if(fullScreenBtn){
        fullScreenBtn.click();
       }
        break;  
      case 't':
        const thetarBtn=refThetearBtn.current;
        if(thetarBtn){
          thetarBtn.click();
        }
        break;
      case 'arrowleft':
      
        if(video){
          video.currentTime-=5;
          
        } 
        break;
      case 'arrowright':
        if(video){
          video.currentTime+=5;
        } 
          
        
        break;
       case 'm':
        toggoleVolumeMute(); 
        break;
        default:
    }
    

  
  })
  
},[])

  
document.addEventListener("keyup", () => {
  isRun=false;
});
// const videoUrl=localStorage.getItem('videoUrl');
  return (
    <>
       <div id="video-Contener" ref={refvideoContener} className={`play-video-div ${isPlay?"":"paused"} ${isThearter?"thearter":"" } ${isFulscren?"fullScreen":""} ${isCaption?"caption":""}`} data-volume-level={VolumeLevel}  >
        {/* Video controlers  */}
        
       <div className='contrl-bars-div' >
       <div ref={refTimlineContorls} className='timeline-controlers' onMouseMove={handelTimlineUpdate} onMouseDown={toggleScribing}>
        <div className='timline'>
           <div className='thumb-indecater'></div>
        </div>
       </div>

        <div className='controls'>
          <button ref={refPlayBtn} className='video-play-paused-btn' onClick={toggolePlay} ><PlayArrowIcon className='play-icon'/> <PauseIcon className='pause-icon'/></button>
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
          <button className='caption-btn' onClick={toggleCaption}><ClosedCaptionOffIcon className='caption-icon'/></button>
        <button ref={refPlaybackSpeed} className='playback-speed-btn' onClick={togglePlaybackSpeed}>1x</button>
        <button ref={refThetearBtn} className='theater-btn ' onClick={()=>{setisTheater(!isThearter)}}><  Crop169Icon className='tall-ico'/><Crop75Icon className='wide-ico'/></button>
        <button ref={refFullScreenBtn} className='full-screen-btn ' onClick={()=>{toggoleFulscren()}}><FullscreenRoundedIcon className='full-sc-icon'/><FullscreenExitIcon className='exit-full-sc-icon'/></button>
        </div>
        </div>
      </div>
      <video ref={refarVideo} id='VideoPlaying' className='play-video'
        onClick={toggolePlay}
        onLoadedMetadata={handleOnLoadedMetadata}
      >
        <source src={props.videoUrl} type="video/mp4" />
        <source src={props.videoUrl} type="video/webm" />
        <track ref={refCaption} kind='captions' srcLang='en' src={sampleCaption} />
      </video>
      
      </div>
    </>
  )
}

export default Videopagemainvideo
