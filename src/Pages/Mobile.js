import { Typography } from "@mui/material";
import React from "react";
import Slider from "../components/Slider";
import Navbar from "../components/Navbar";
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';
const options = [
  'None',
  'Atria',
  'Callisto',
  'Dione',
  'Ganymede',
  'Hangouts Call',
  'Luna',
  'Oberon',
  'Phobos',
  'Pyxis',
  'Sedna',
  'Titania',
  'Triton',
  'Umbriel',
];

const ITEM_HEIGHT = 48;

export default function Mobile() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="img">
          <img
            src="https://tpc.googlesyndication.com/simgad/11727365248570226062?sqp=4sqPyQQ7QjkqNxABHQAAtEIgASgBMAk4A0DwkwlYAWBfcAKAAQGIAQGdAQAAgD-oAQGwAYCt4gS4AV_FAS2ynT4&rs=AOga4qkG757jb5bJXnofBsOQm7sOT1jyAg"
            alt=""
            width="100%"
            height="70%"
          />
        </div>
        <div className="subHead container p-3">
          <Typography
            variant="p"
            sx={{
              fontSize: "18px",
              fontFamily: "sans-serif",
              display: "flex",
              cursor: "pointer",
            }}>
            <p className="fw-bold p-2">Popular-Search</p>
            <p className="p-2">Iphone</p>
            <p className="p-2">Infinix</p>
            <p className="p-2">Oppo</p>
            <p className="p-2">Samsung</p>
            <p className="p-2">Vivo</p>
          </Typography>
        </div>
        <Slider />
        <Typography
          sx={{
            display: "flex",
            flexFlow: "right",
            marginTop: "6%",
          }}>
          <h4>Mobile-Phones</h4>
        </Typography>
        <Typography >
          <div className="row">
            <div className="col-lg-3 d-flex p-3 fw-bold"><p>Filters</p> 
            <div>
      <IconButton
        aria-label="more"
        id="long-button"
        aria-controls={open ? 'long-menu' : undefined}
        aria-expanded={open ? 'true' : undefined}
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MoreVertIcon />
      </IconButton>
      <Menu
        id="long-menu"
        MenuListProps={{
          'aria-labelledby': 'long-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 4.5,
            width: '20ch',
          },
        }}
      >
        {options.map((option) => (
          <MenuItem key={option} selected={option === 'Pyxis'} onClick={handleClose}>
            {option}
          </MenuItem>
        ))}
      </Menu>
    </div>
            </div>
            <div className="col-lg-2">
              
            </div>
            <div className="col-lg-7">item3</div>
            <div></div>
          </div>
        </Typography>
      </div>
    </div>
  );
}
