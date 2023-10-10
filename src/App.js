import React from "react";

import Banner from "./Banner";

import "./styles.css";

export default function App() {
  const apiData = {
    imageUrl:
      "https://i8.amplience.net/i/hotter/hotter-shoes-AW20-1350x500px-b",
    linkUrl: "/gb/en/viewallwomens",
    linkText: "New, React JS Sneakers made for comfort.",
    ctaText: "Shop Now"
  };

  return (
    <div className="App">
      <Banner />
    </div>
  );
}
