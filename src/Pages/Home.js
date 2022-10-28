import React from "react";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Post from "../components/Post";
import Search from "../components/Search";

export default function Home() {
  let posts = [
    {
      title: "MicroSoft Laptop Pro",
      desc: "Specifications, Processor, 10th Generation Intel Core i5-1035G1, Memory, 8GB LPDDR4x, Storage, 128GB SSD, Display, 12.4” PixelSense Touch ",
      image: "https://computerchoice.pk/wp-content/uploads/2022/02/2-4012-554650-091220084748.jpg",
      address: "Rs145,000 PKR",
    },
    {
      title: "MacOs",
      desc: "Specifications, Processor, 10th Generation Intel Core i5-1035G1, Memory, 8GB LPDDR4x, Storage, 128GB SSD, Display, 12.4” PixelSense Touch ",
      image:
        "https://www.digitaltrends.com/wp-content/uploads/2021/08/dell-xps-15-oled-2021-laptop.jpg?fit=720%2C720&p=1",
      address: "Rs250,000 PKR",
    },
    {
      title: "Amazon",
      desc: "Specifications, Processor, 10th Generation Intel Core i5-1035G1, Memory, 8GB LPDDR4x, Storage, 128GB SSD, Display, 12.4” PixelSense Touch",
      image:
        "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6502/6502660_sd.jpg",
      address: "Rs255,000 PKR",
    },
    {
      title: "Dell Inspiration",
      desc: "Specifications, Processor, 10th Generation Intel Core i5-1035G1, Memory, 8GB LPDDR4x, Storage, 128GB SSD, Display, 12.4” PixelSense Touch",
      image:
        "https://m.media-amazon.com/images/I/41QSPGEmLaL._SX450_.jpg",
      address: "Rs150,000 PKR",
    },
    {
      title: "Touch Screen",
      desc: "Specifications, Processor, 10th Generation Intel Core i5-1035G1, Memory, 8GB LPDDR4x, Storage, 128GB SSD, Display, 12.4” PixelSense Touch",
      image:
        "https://m.media-amazon.com/images/I/51if47n2aPL.jpg",
      address: "Rs150,000 PKR",
    },
    {
      title: "Amazon Mini",
      desc: "Specifications, Processor, 10th Generation Intel Core i5-1035G1, Memory, 8GB LPDDR4x, Storage, 128GB SSD, Display, 12.4” PixelSense Touch",
      image:
        "http://pricematch.pk/uploadedstuff/productimages/62-Dell-Inspiron-15---7000-(7568)-i5.jpg",
      address: "Rs150,000 PKR",
    },
    {
      title: "Touch Mini",
      desc: "Specifications, Processor, 10th Generation Intel Core i5-1035G1, Memory, 8GB LPDDR4x, Storage, 128GB SSD, Display, 12.4” PixelSense Touch",
      image:
        "https://www.lenovo.com/medias/ww-lenovo-laptop-v14-amd-hero.png?context=bWFzdGVyfHJvb3R8MjU2MjQ1fGltYWdlL3BuZ3xoNjIvaDkwLzE0MzI1NjI5NjQ4OTI2LnBuZ3w2MjQ3YjIwZjkxZTZkYjY4NDczNjg1YTFiZDk0NzJlYmFhMWFmMTJhZmY1YjA4NmIyOTJhMzc1YzhiODA1ODUx",
      address: "Rs150,000 PKR",
    },
    {
      title: "Toshiba",
      desc: "Specifications, Processor, 10th Generation Intel Core i5-1035G1, Memory, 8GB LPDDR4x, Storage, 128GB SSD, Display, 12.4” PixelSense Touch",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwt_wuzd0haeZeKsBwqQdI5Utqp1Fkboa7jw&usqp=CAU",
      address: "Rs150,000 PKR",
    },
  ];

  return (
    <div>
      <Header/>
      <Search/>
      <Navbar/>
      <div><img src="https://images.olx.com.pk/thumbnails/298083045-800x600.webp" alt="" /></div>
      <div style={{ display: "flex", justifyContent: "space-evenly" }}>
        <div
          className="row">
          {posts.map((post, idx) => (
            <Post key={idx} data={post} />
          ))}
        </div>
      </div>
    </div>
  );
}
