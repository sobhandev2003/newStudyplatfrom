import React, {  useState, useRef } from "react";
import { Link, NavLink , useNavigate } from "react-router-dom";
import vposter from '../photos/vposter.jpg'
// import MoreVertIcon from '@mui/icons-material/MoreVert';
function Homeiteams(props) {
  const videoRef = useRef(null);
  const [showPoster, setShowPoster] = useState(true);

  let { video } = props;
  const navigate=useNavigate();
  // Function to play the video when hovered
  const handleMouseEnter = async () => {
    try {
      videoRef.current.play();
      setShowPoster(false);
    } catch (err) {
      console.log(err);
    }
  };

  // Function to pause the video when the mouse leaves
  const handleMouseLeave = () => {
    try {
      if (!videoRef.current.paused) {
        // setIsPlaying(false);
        videoRef.current.pause();
        videoRef.current.currentTime =0;
        setShowPoster(true);
      }
    } catch (err) {
      console.log(err);
    }
  };
  //video title size change 
  const words = video.title.split(" ");
 let title ;
  if(words.length>12){
    title = words.slice(0, 11).join(" ");
  }
  else{
title=video.title;
  }
 
  
  return (
    <>
      <div
        className="overflow-hidden home-item-container"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div
          onClick={() => {
            localStorage.setItem("videoUrl", video.url);
            navigate(`/video/${video.id}`)
          }}
          // to={`/video/${video.id}`}
          className="video-link"
        ><div>
         
          <video  ref={videoRef} controls={false} muted className="item-video cursor-pointer"  poster={showPoster?vposter: undefined} >
            <source src={video.url} type="video/mp4"></source>
            <source src={video.url} type="video/webm"></source>
            Your browser does not support the video tag.
          </video>
          <div className="video-des cursor-pointer">
            <img src={video.prfile_pic} alt="profile"></img>
          <h3 className="video-titale">{title}...</h3>
          </div>
          <div className="chenel-viws-ditals cursor-pointer" onClick={()=>{navigate(`/chanel/${video.id}`)}}>
            <Link to={`/chanel/${video.id}`}  className="chanel-name" >sobhan paramanik </Link>
          <p className="video-view">1k views<span className="vertical-line"></span>6 month ago </p>
          {/* <MoreVertIcon/> */}
          </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Homeiteams;
