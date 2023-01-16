import { Typography } from "@mui/material";
import React from "react";
import Navbar from "../../Section/Navbar/Navbar";
import Header from "../../Section/Header";
import Search from "../../Section/Search";

export default function Mobile() {
  return (
    <div>

      <Header/>
      <Search/>
      <Navbar />
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
        {/* <Slider /> */}
        <Typography
        sx={{
          display: 'flex',
          flexFlow: 'right',
          padding: '2px',
          margin: '3px'

        }}>
        <p><u>Home</u> / <u>Mobiles</u></p>
        </Typography>
        <Typography
          sx={{
            display: "flex",
            flexFlow: "right",
            marginTop: "1%",
            marginBottom: '2%'
          }}>
          <h4><u>Mobile-Phones</u></h4>
        </Typography>
        <div className="d-flex m-">
        <Typography sx={{
          border: '2px solid red',
          width: '30%',
          height: "70vh",
          display: 'flex',
          flexFlow: 'right',
          padding: '10px'
        }}>
          <p className="fw-bold">filters</p>
        </Typography>
        <Typography
        sx={{
          border: '2px solid red',
          width: '30%',
          height: "70vh",
          display: 'flex',
          flexFlow: 'right',
          padding: '10px'
        }}
        >

        </Typography>
        </div>
      </div>
    </div>
  );
}
