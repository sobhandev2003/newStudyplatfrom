import React, { useState, Fragment } from "react";
import { NavLink, Link } from "react-router-dom";
import Media from "react-media";
import Downbar from "./Downbar";
import Navbar from "./Navbar";
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import LocalLibraryOutlinedIcon from '@mui/icons-material/LocalLibraryOutlined';
import HistoryOutlinedIcon from '@mui/icons-material/HistoryOutlined';
import DownloadDoneOutlinedIcon from '@mui/icons-material/DownloadDoneOutlined';
import VideoCallOutlinedIcon from '@mui/icons-material/VideoCallOutlined';
const Sidebar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(true);
  const [pAutorizOption, setpAutorizOption] = useState(false);
  const authoriztoggle = () => {
    setpAutorizOption(!pAutorizOption);
  };
  const toggle = () => setIsOpen(!isOpen);

  const pcMenuItem = [
    {
      path: "/",
      name: "Home",
      icon:<HomeOutlinedIcon/>,
    },
    {
      path: "/library",
      name: "Library",
      icon: <LocalLibraryOutlinedIcon />,
    },
    {
      path: "/history",
      name: "History",
      icon: <HistoryOutlinedIcon />,
    },
    {
      path: "/downloads",
      name: "Downloads",
      icon: <DownloadDoneOutlinedIcon />,
    },
    {
      path: "/yourvideos",
      name: "Your videos",
      icon: <VideoCallOutlinedIcon/>,
    },
    
  ];
  return (
    <>
      <div>
        <Media
          queries={{
            small: "(max-width: 1023px)",
            large: "(min-width: 1024px)",
          }}
        >
          {(matches) => (
            <Fragment>
              {matches.small && (
                <>
                  {/*---------------------------------- For phone and tablet devices-------------------------------- */}
                  {/* Navabar */}
                  <Navbar
                    authoriztoggle={authoriztoggle}
                    pAutorizOption={setpAutorizOption}
                  />
                  <div
                    style={{ display: pAutorizOption ? "flex" : "none" }}
                    className="fex-direc-col pacount-Option"
                  >
                    <Link
                      onClick={() => {
                        setpAutorizOption(false);
                      }}
                      className="me-2 text-decoration-none text-warning"
                      to="/login"
                    >
                      Login
                    </Link>
                    <Link
                      onClick={() => {
                        setpAutorizOption(false);
                      }}
                      className="me-2 text-decoration-none text-warning"
                      to="/signup"
                    >
                      Sign Up
                    </Link>
                  </div>
                  {/* navbar and downbar midile content */}
                  <div
                    className="main-content"
                    style={{ top: pAutorizOption ? "131px" : "50px" }}
                  >
                    <div>
                      <main>{children}</main>
                    </div>
                  </div>

                  {/* ----------------------downbar---------------------- */}
                  <Downbar />
                </>
              )}
             
              {/*-------------------- For laptop or dexstop scren --------------------------------------*/}
              {matches.large && (
                <>
                  {/* // Navbar --- */}
                  <Navbar toggle={toggle} />
                  <div
                    className="sidebar"
                    style={{ width: isOpen ? "170px" : "85px" }}
                  >
                    <div className="scontent">
                      {pcMenuItem.map((item, index) => (
                        <NavLink
                        target={item.name==='Your videos'?'_blank':""}
                          to={item.path}
                          key={index}
                          className="link text-decoration-none"
                        >
                          <div className="icon">{item.icon}</div>
                          <div
                            style={{ display: isOpen ? "block" : "none" }}
                            className="link_text "
                          >
                            {item.name}
                          </div>
                        </NavLink>
                      ))}
                    </div>
                  </div>
                  <div
                    className="main-content"
                    style={{
                      left: isOpen ? "170px" : "85px",
                      width: isOpen ? "89dvw" : "95dvw",
                    }}
                  >
                    <div className="content">
                      <main>{children}</main>
                    </div>
                  </div>
                </>
              )}
            </Fragment>
          )}
        </Media>
      </div>
    </>
  );
};

export default Sidebar;
