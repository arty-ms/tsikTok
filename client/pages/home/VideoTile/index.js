import React, { useRef, useEffect } from 'react';
import './styles.scss';

const VideoTile = ({isVisible}) => {
  const videoElement = useRef(null);

  useEffect(() => {
    if (isVisible) {
      videoElement.current.play();
    } else {
      videoElement.current.pause();
    }
  }, [isVisible])

  return (
    <div className="VideoElement">
      <div>Anatoly Semenyaka {isVisible ? "true" : "false"}</div>
      <video ref={videoElement} src="https://dl5.webmfiles.org/big-buck-bunny_trailer.webm" poster="https://www.rapidtables.com/web/html/link/flower.jpg" controls />
    </div>
  );
}

export default VideoTile;
