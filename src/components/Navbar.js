import React, { useState, Fragment } from "react";
import Logo from "../photos/logo.png";

  import {  Link } from "react-router-dom";
  
  import Media from "react-media";
  import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
  import MicOutlinedIcon from '@mui/icons-material/MicOutlined';
  import ArrowDropDownCircleIcon from '@mui/icons-material/ArrowDropDownCircle';
  import HorizontalSplitOutlinedIcon from '@mui/icons-material/HorizontalSplitOutlined';
function Navbar(props) {
  const [pSearch ,setPsearch] = useState(false);
  const [psearchtext ,setPsearchtext] = useState("");
    const togolepSearchIO=()=>{
      props.pAutorizOption(false);
      setPsearch(!pSearch)
    }
    const onsearch=()=>{
      alert(psearchtext);
      setPsearchtext("");
      // setPsearch(false);
    }
    const pSearchonChange=(e)=>{setPsearchtext(e.target.value)}
  return (<>
    <nav className="navbar navbar-expand-lg  navbar-dark bg-dark  fixed-top ">
    <div className=" display-flex align-items-center  justify-content-space-between">
      <div className="top_section ">
        <div className="bars cursor-pointer text-white">
          <HorizontalSplitOutlinedIcon onClick={props.toggle} />
        </div>
        <img style={{display:pSearch?'none':''}}
          src={Logo}
          alt="Logo"
          className="logo cursor-pointer text-white"
        />
      </div>


      <Media
          queries={{
            small: "(max-width: 767px)",
            large: "(min-width: 768px)"
            // medium: "(min-width: 600px) and (max-width: 1199px)",
          }}
        >
           {(matches) => (
            <Fragment>

      {matches.large && (
        <><div id="navbarSupportedContent " className='serch-div'>
        <form className="d-flex" role="search">
          <input
            className="search-wr ps-2 rounded me-0 border-start border-top border-bottom border-white border-end  "
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button
            className="btn rounded ms-0 border-top border-bottom border-end border-white bg-white"
            type="submit"
          >
            <SearchOutlinedIcon/>
          </button>
          <button className="btn text-white" type="submit">
            <MicOutlinedIcon />
          </button>
        </form>
      </div>
      <div className='acount'>
        <Link className="mx-5 text-decoration-none" to="/login">
          Login
        </Link>
        <Link
          className="me-5 text-decoration-none"
          to="/signup"
        >
          Sign Up
        </Link>
      </div>
      </>)
      }
      {/* -------------------------For mobile -------------------------*/}
      
              {matches.small &&(
       <div className='nav-right-div '>
       <div>
       <input
       style={{display:pSearch?'inline-block':'none'}}
       onChange={pSearchonChange}
       value={psearchtext}
             className="search-wr   "
             id='search-in'
             type="search"
             placeholder="Search"
             aria-label="Search"
           />
             <SearchOutlinedIcon className='psearch-ico'   onClick={psearchtext.length>0?onsearch :togolepSearchIO}   />
           
         </div>
       <ArrowDropDownCircleIcon style={{display:pSearch?'none':''}}  className='pacount-togolebtn' onClick={props.authoriztoggle}/>
       </div>
       )}
      </Fragment>)}
        </Media>
    </div>
  </nav>
  
  </>
  )
}

export default Navbar
