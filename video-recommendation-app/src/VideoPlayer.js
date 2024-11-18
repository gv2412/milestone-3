import React from "react";

function VideoPlayer({ videoId, onBack }) {
  return (
    <div id="video-player" className="video-player">
      <button id="back-button" className="back-button" onClick={onBack}>
        &#8592; Back
      </button>
      <iframe
        id="video-iframe"
        width="100%"
        height="500px"
        src={`https://www.youtube.com/embed/${videoId}`}
        frameBorder="0"
        allowFullScreen
      ></iframe>
    </div>
  );
}

export default VideoPlayer;
