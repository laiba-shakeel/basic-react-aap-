import React from "react";

import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Post from "../components/Post";
import Search from "../components/Search";
import AutoSlider from "../components/AutoSlider";
export default function Home() {
  let posts = [
    {
      title: "MicroSoft Laptop Pro",
      desc: "Storage, 128GB SSD, Display, 12.4” PixelSense Touch ",
      image: "https://images.olx.com.pk/thumbnails/293940291-400x300.webp",
      address: "Rs145,000 PKR",
    },
    {
      title: "MacOs",
      desc: "Storage, 128GB SSD, Display, 12.4” PixelSense Touch ",
      image: "https://images.olx.com.pk/thumbnails/219951814-400x300.webp",
      address: "Rs250,000 PKR",
    },
    {
      title: "Amazon",
      desc: "Storage, 128GB SSD, Display, 12.4” PixelSense Touch ",
      image: "https://images.olx.com.pk/thumbnails/299690039-240x180.webp",
      address: "Rs255,000 PKR",
    },
    {
      title: "Dell Inspiration",
      desc: "Storage, 128GB SSD, Display, 12.4” PixelSense Touch ",
      image: "https://images.olx.com.pk/thumbnails/294879842-240x180.webp",
      address: "Rs150,000 PKR",
    },
    {
      title: "Touch Screen",
      desc: "Storage, 128GB SSD, Display, 12.4” PixelSense Touch ",
      image: "https://images.olx.com.pk/thumbnails/299690030-400x300.webp",
      address: "Rs150,000 PKR",
    },
    {
      title: "Amazon Mini",
      desc: "Storage, 128GB SSD, Display, 12.4” PixelSense Touch ",
      image: "https://images.olx.com.pk/thumbnails/299690012-400x300.webp",
      address: "Rs150,000 PKR",
    },
    {
      title: "Touch Mini",
      desc: "Storage, 128GB SSD, Display, 12.4” PixelSense Touch  ",
      image: "https://images.olx.com.pk/thumbnails/296551136-400x300.webp",
      address: "Rs150,000 PKR",
    },
    {
      title: "Toshiba",

      desc: "Storage, 128GB SSD, Display, 12.4” PixelSense Touch ",
      image: "https://images.olx.com.pk/thumbnails/279994426-400x300.webp",
      address: "Rs150,000 PKR",
    },
    {
      title: "Toshiba",

      desc: "Storage, 128GB SSD, Display, 12.4” PixelSense Touch ",
      image: "https://images.olx.com.pk/thumbnails/299690007-240x180.webp",
      address: "Rs150,000 PKR",
    },
    {
      title: "Toshiba",

      desc: "Storage, 128GB SSD, Display, 12.4” PixelSense Touch ",
      image: "https://images.olx.com.pk/thumbnails/291148584-400x300.webp",
      address: "Rs150,000 PKR",
    },
    {
      title: "Toshiba",

      desc: "Storage, 128GB SSD, Display, 12.4” PixelSense Touch ",
      image: "https://images.olx.com.pk/thumbnails/287849138-400x300.webp",
      address: "Rs150,000 PKR",
    },
    {
      title: "Toshiba",

      desc: "Storage, 128GB SSD, Display, 12.4” PixelSense Touch ",
      image: "https://images.olx.com.pk/thumbnails/298080067-240x180.webp",
      address: "Rs150,000 PKR",
    },
    {
      title: "Toshiba",

      desc: "Storage, 128GB SSD, Display, 12.4” PixelSense Touch ",
      image: "https://images.olx.com.pk/thumbnails/299701984-240x180.webp",
      address: "Rs150,000 PKR",
    },
    {
      title: "Toshiba",

      desc: "Storage, 128GB SSD, Display, 12.4” PixelSense Touch ",
      image: "https://images.olx.com.pk/thumbnails/299706855-400x300.webp",
      address: "Rs150,000 PKR",
    },
    {
      title: "Toshiba",

      desc: "Storage, 128GB SSD, Display, 12.4” PixelSense Touch ",
      image: "https://images.olx.com.pk/thumbnails/216989005-240x180.webp",
      address: "Rs150,000 PKR",
    },
    {
      title: "Toshiba",

      desc: "Storage, 128GB SSD, Display, 12.4” PixelSense Touch ",
      image: "https://images.olx.com.pk/thumbnails/299706998-240x180.webp",
      address: "Rs150,000 PKR",
    },
  ];

  return (
    <div>
      <Header />
      <Search />
      <Navbar />
      <AutoSlider />
      <div className="container mt-3 mb-5">
        <img
          src="https://tpc.googlesyndication.com/daca_images/simgad/5535435080524246381"
          alt=""></img>
      </div>

      <div style={{ display: "flex", justifyContent: "space-evenly" }}>
        <div className="row">
          {posts.map((post, idx) => (
            <Post key={idx} data={post} />
          ))}
        </div>
      </div>
      <div className="container mt-3 mb-5">
        <img
          src="https://tpc.googlesyndication.com/simgad/5498342565225498542?sqp=4sqPyQQrQikqJwhfEAEdAAC0QiABKAEwCTgDQPCTCUgAUAFYAWBfcAJ4AcUBLbKdPg&rs=AOga4qmfybDIbdhxRbpbaz1TByInq3zD-w"
          alt=""></img>
      </div>
     </div>

  );
}
