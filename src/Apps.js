import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import App from "./App";
import Playlist from "./PlayList";

function Apps() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/playlists" element={<Playlist />} />
      </Routes>
    </Router>
  );
}

export default Apps;
