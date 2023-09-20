import "./App.css";
import React from "react";
import LoggingButton from "./Componets/buttonApi.js";
import { BiLogoSpotify } from "react-icons/bi";

function App() {
  return (
    <div className="App ">
      <div className="BackGround BackGroundDeskTop bg-cover h-screen bg-cover"></div>
      <div className="fixed top-0 w-full text-center  ">
        <div className="text-white text-3xl font-bold pt-40 md:text-6xl">
          LISTEN TO YOUR <br />
          FAVORITE SONGS
        </div>
        <LoggingButton />
        <div className="text-white text-center w-20 justify-between m-auto flex text-1xl mt-80">
          <BiLogoSpotify /> Spotify
        </div>
      </div>
    </div>
  );
}

export default App;
