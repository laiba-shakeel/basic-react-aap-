import React from "react";
import Navbar from "../components/Navbar";
import Post from "../components/Post";

export default function Home() {
  let posts = [
    {
      title: "Iphone",
      desc: "yghhfjhtfjthdgjdcjgh",
      image:
        "https://images.pexels.com/photos/371589/pexels-photo-371589.jpeg?cs=srgb&dl=pexels-pixabay-371589.jpg&fm=jpg",
      address: "Malir",
    },
    {
      title: "Android",
      desc: "yghhfjhtfjthdgjdcjgh",
      image:
        "https://images.pexels.com/photos/206359/pexels-photo-206359.jpeg?cs=srgb&dl=pexels-pixabay-206359.jpg&fm=jpg",
      address: "North karachi",
    },
    {
      title: "Amazon",
      desc: "yghhfjhtfjthdgjdcjgh",
      image:
        "https://img.freepik.com/free-vector/flat-design-lake-scenery_23-2149161405.jpg?w=2000",
      address: "Defence",
    },
    {
      title: "Amazon",
      desc: "yghhfjhtfjthdgjdcjgh",
      image:
        "https://img.freepik.com/free-vector/flat-design-lake-scenery_23-2149161405.jpg?w=2000",
      address: "Defence",
    },
    {
      title: "Amazon",
      desc: "yghhfjhtfjthdgjdcjgh",
      image:
        "https://img.freepik.com/free-vector/flat-design-lake-scenery_23-2149161405.jpg?w=2000",
      address: "Defence",
    },
  ];

  return (
    <div>
      <Navbar />
      <div style={{ display: "flex", justifyContent: "space-evenly" }}>
        <div className="row">
          {posts.map((post, idx) => (
            <Post key={idx} data={post} />
          ))}
        </div>
      </div>
    </div>
  );
}
