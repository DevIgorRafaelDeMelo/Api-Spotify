import React, { useEffect } from "react";
import axios from "axios";

export default function Playlist() {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(async () => {
    let params = new URLSearchParams(document.location.search);
    let code = params.get("code");

    if (code) {
      let body = {
        grant_type: "authorization_code",
        code,
        redirect_uri: "http://localhost:3000/playlists",
      };

      try {
        let resposta = await axios({
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
        let respostausuario = axios({
          method: "GET",
          url: "https://api.spotify.com/v1/me",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${resposta.data.access_token}`,
          },
        });

        console.log(resposta);
      } catch (error) {
        console.error("Erro ao obter token:", error);
      }
    }
  }, []);

  return <>Clicka</>;
}
