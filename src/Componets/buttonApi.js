import React from "react";
import { BiLogoSpotify } from "react-icons/bi";

export default class LoggingButton extends React.Component {
  handleClick() {
    window.location.href = `https://accounts.spotify.com/authorize?response_type=code&client_id=330f5fbdcacd4312998be3d395ef6c63&scope=playlist-read-private playlist-read-collaborative playlist-modify-private playlist-modify-private`;
  }

  render() {
    return (
      <button
        className="bg-spotify w-80 m-auto mt-40 rounded-full p-1 flex text-3xl font-bold relative"
        onClick={() => this.handleClick()}
      >
        <BiLogoSpotify
          style={{ height: "70px", width: "70px", color: "white" }}
        />
        <div className="absolute inset-0">
          <div className="py-6 text-2xl text-xl ps-10 text-white">
            connect your account
          </div>
        </div>
      </button>
    );
  }
}