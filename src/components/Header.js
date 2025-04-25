import React from "react";
import "../styles.css";

export default function Header() {
  return (
    <div className="header">
      <img className="logo" src="logo.png" alt="moviedux" />
      <h2 className="app-subtitle">
        Looking for a game? You came to the right place!
      </h2>
    </div>
  );
}
