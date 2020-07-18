import React, { useRef, useEffect } from 'react';
import './styles.scss';
import tick from '../../../assets/images/tick.png';

const VideoTile = ({isVisible}) => {
  const videoElement = useRef(null);

  useEffect(() => {
    if (isVisible) {
      videoElement.current.play();
    } else {
      videoElement.current.pause();
    }
  }, [isVisible]);

  return (
    <div className="VideoElement">
      <div className="Details">
        <span className="UpperCase">Anatoly Semenyaka</span>
        <small>12.10.2020</small>
        <span className="UpperCase">City</span>
      </div>
      <video ref={videoElement} src="https://dl5.webmfiles.org/big-buck-bunny_trailer.webm" poster="https://i.pinimg.com/564x/cd/65/02/cd6502e619912e69a40d032478fd0b44.jpg" controls />
        <div className="SelectedCandidate UpperCase"><span>ЗА ТИХАНОВСКУЮ</span> <img src={tick} className="Tick" alt="tick"/></div>
    </div>
  );
};

export default VideoTile;
