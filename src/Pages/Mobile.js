import { Typography } from "@mui/material";
import React from "react";
import Slider from "../components/Slider";
import Navbar from "../components/Navbar";
import { Box } from "@mui/system";
import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import {
  AccountBox,
  Article,
  Group,
  Home,
  ModeNight,
  Person,
  Settings,
  Storefront,
} from "@mui/icons-material";

export default function Mobile() {
  return (
    <div>
      <Navbar />
      <div className="d-flex" >
          <Box>
            <Box className="d-none d-md-block">
              <List>
                <ListItem disablePadding>
                  <ListItemButton component="a" href="#home">
                    <ListItemIcon>
                      <Home />
                    </ListItemIcon>
                    <ListItemText primary="Homepage" />
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton component="a" href="#Pages">
                    <ListItemIcon>
                      <Article />
                    </ListItemIcon>
                    <ListItemText primary="Pages" />
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton component="a" href="#groups">
                    <ListItemIcon>
                      <Group />
                    </ListItemIcon>
                    <ListItemText primary="Groups" />
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton component="a" href="#Marketing">
                    <ListItemIcon>
                      <Storefront />
                    </ListItemIcon>
                    <ListItemText primary="Marketing" />
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton component="a" href="#Friends">
                    <ListItemIcon>
                      <Person />
                    </ListItemIcon>
                    <ListItemText primary="Friends" />
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton component="a" href="#Setting">
                    <ListItemIcon>
                      <Settings />
                    </ListItemIcon>
                    <ListItemText primary="Setting" />
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton component="a" href="#Profile">
                    <ListItemIcon>
                      <AccountBox />
                    </ListItemIcon>
                    <ListItemText primary="Profile" />
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton component="a" href="/"></ListItemButton>
                </ListItem>
              </List>
            </Box>
          </Box>
          <img
          className="container py-5 img-fluid"
            src="https://tpc.googlesyndication.com/simgad/5498342565225498542?sqp=4sqPyQQrQikqJwhfEAEdAAC0QiABKAEwCTgDQPCTCUgAUAFYAWBfcAJ4AcUBLbKdPg&rs=AOga4qmfybDIbdhxRbpbaz1TByInq3zD-w"
            width="auto"
            height="100%"></img>
        </div>
      <div className="container Cars mt-2 d-flex justify-content-center border shadow">
        <div className="row">
          <div className="col-3">
            <div>
              <img
                src="https://cdn.jdpower.com/JDPA_2020%20Cadillac%20CT5%20Luxury%20Sedan.jpg"
                alt=""
                height="100%"
                width="100%"
              />
            </div>
          </div>
          <div className="col-3">
            {" "}
            <div>
              <img
                src="https://cdn.jdpower.com/JDPA_2020%20Cadillac%20CT5%20Luxury%20Sedan.jpg"
                alt=""
                height="100%"
                width="100%"
              />
            </div>
          </div>
          <div className="col-3">
            {" "}
            <div>
              <img
                src="https://cdn.jdpower.com/JDPA_2020%20Cadillac%20CT5%20Luxury%20Sedan.jpg"
                alt=""
                height="100%"
                width="100%"
              />
            </div>
          </div>
          <div className="col-3">
            {" "}
            <div>
              <img
                src="https://cdn.jdpower.com/JDPA_2020%20Cadillac%20CT5%20Luxury%20Sedan.jpg"
                alt=""
                height="100%"
                width="100%"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="container py-5">
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
       
      </div>
    </div>
  );
}
