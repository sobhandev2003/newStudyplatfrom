import React from "react";
import { NavLink} from "react-router-dom";
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import OndemandVideoRoundedIcon from '@mui/icons-material/OndemandVideoRounded';
import NoteOutlinedIcon from '@mui/icons-material/NoteOutlined';
import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded';

function Downbar() {
    const phoneMenuItem = [
        {
          path: "/",
          name: "Home",
          icon: <HomeOutlinedIcon />,
        },
        {
          path: "/video",
          name: "Video",
          icon: <OndemandVideoRoundedIcon />,
        },
        {
          path: "/note",
          name: "Note",
          icon: <NoteOutlinedIcon />,
        },
        {
          path: "/favourite",
          name: "Favourite",
          icon: <FavoriteBorderRoundedIcon />,
        },
      ];
  return (
    <div className="content">
                    {phoneMenuItem.map((item, index) => (
                      <div className="content-item" key={index}>
                        <NavLink
                          to={item.path}
                          // key={index}
                          
                          className="link text-decoration-none"
                        >
                          <div className="icon">{item.icon}</div>
                          <div className="link_text ">{item.name}</div>
                        </NavLink>
                      </div>
                    ))}
                  </div>
  )
}

export default Downbar


