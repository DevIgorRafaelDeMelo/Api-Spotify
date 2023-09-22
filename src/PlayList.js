import axios from "axios";
import "./App.css";
import React, { useEffect, useRef, useState } from "react";

function Playlist() {
  useEffect(() => {
    let params = new URLSearchParams(document.location.search);
    let code = params.get("code");

    let body = {
      grant_type: "authorization_code",
      code,
      redirect_uri: "http://localhost:3000/playlists",
    };

    axios({
      method: "POST",
      url: "https://accounts.spotify.com/api/token",
      data: new URLSearchParams(Object.entries(body)).toString(),
      headers: {
        Authorization: `Basic ${btoa(
          "92c118f048994954b8df4fd6d05f9085" +
            ":" +
            "504a3f8b90e54431bbbc7cead78cc33b"
        )}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
    });
  });

  return <>Clicka</>;
}

export default Playlist;
