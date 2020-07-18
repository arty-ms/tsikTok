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
      <div className="Details">
        <span className="UpperCase">Anatoly Semenyaka</span>
        <span>12.10.2020</span>
        <span className="UpperCase">City</span>
      </div>
      <video ref={videoElement} src="https://dl5.webmfiles.org/big-buck-bunny_trailer.webm" poster="https://www.rapidtables.com/web/html/link/flower.jpg" controls />
      <strong className="SelectedCandidate UpperCase">ЗА ТИХАНОВСКУЮ</strong>
    </div>
  );
};

export default VideoTile;
