import React from 'react'
import Homeiteams from './Homeiteams'
import InfiniteScroll from "react-infinite-scroll-component";
import demovideo from "../photos/mov_bbb.mp4";

// import video from '../photos/jav.mp4'
function Home() {
  // API key = [ AIzaSyAy4oNn3hvia50sRwQkLqiCpVtJhpDiWdM ]\
 const data=[
  {
    id:"u12gh",
    title:"Adding Frontend Validation + Few Fixes in iNotebook | Complete React Course in Hindi #68",
    url:demovideo,
    // prfile_name:"CodeWithHarry",
    // profile_link:"https://www.youtube.com/@CodeWithHarry",
    prfile_pic:"https://yt3.ggpht.com/ytc/AOPolaQMtqt8g-xxJ3BkIF06RPiJcIsPzbSOLOwDVAA5pw=s68-c-k-c0x00ffffff-no-rj"
  },
  {
    id:"j13r",
    title:"Adding Frontend Validation + Few Fixes in iNotebook | Complete React Course in Hindi #68",
    url:demovideo,
    // prfile_name:"CodeWithHarry",
    // profile_link:"https://www.youtube.com/@CodeWithHarry",
    prfile_pic:"https://yt3.ggpht.com/ytc/AOPolaQMtqt8g-xxJ3BkIF06RPiJcIsPzbSOLOwDVAA5pw=s68-c-k-c0x00ffffff-no-rj"
  },
  {
    id:'v12h',
    title:"Adding Frontend Validation + Few Fixes in iNotebook | Complete React Course in Hindi #68",
    url:demovideo,
    // prfile_name:"CodeWithHarry",
    // profile_link:"https://www.youtube.com/@CodeWithHarry",
    prfile_pic:"https://yt3.ggpht.com/ytc/AOPolaQMtqt8g-xxJ3BkIF06RPiJcIsPzbSOLOwDVAA5pw=s68-c-k-c0x00ffffff-no-rj"
  },
  {
    id:'r12w',
    title:"Adding Frontend Validation + Few Fixes in iNotebook | Complete React Course in Hindi #68",
    url:demovideo,
    prfile_name:"CodeWithHarry",
    // profile_link:"https://www.youtube.com/@CodeWithHarry",
    prfile_pic:"https://yt3.ggpht.com/ytc/AOPolaQMtqt8g-xxJ3BkIF06RPiJcIsPzbSOLOwDVAA5pw=s68-c-k-c0x00ffffff-no-rj"
  }
 
 ]
const totalResults=10;

  return (
    <>
      <InfiniteScroll
          dataLength={data.length}
          // next={fetchMoreData}
          hasMore={data.length!==totalResults}
        //   loader= { <Spinner/>}className="overflow-hidden"
        >
          <div className='home-video-main-div'>
     {
      data.map(
        (iteam)=>{
          return <div  className='datamap-div '><Homeiteams key={iteam.id} video={iteam}/></div>
        }
      )
     }
      </div>
      </InfiniteScroll>

    </>
  )
}

export default Home

