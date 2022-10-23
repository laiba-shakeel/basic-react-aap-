import React from "react";
import Navbar from "../components/Navbar";
import Post from "../components/Post";

export default function Home() {
  let posts = [
    { title: "Iphone", desc: "yghhfjhtfjthdgjdcjgh" },
    { title: "Android", desc: "yghhfjhtfjthdgjdcjgh" },
    { title: "Amazon", desc: "yghhfjhtfjthdgjdcjgh" },
  ];

  return (
    <div>
      <Navbar/>
      <div style={{ display: "flex", justifyContent: "space-evenly" }}>
        {posts.map((post, idx) => (
          <Post key={idx} data={post} />
        ))}
      </div>
    </div>
  );
}
