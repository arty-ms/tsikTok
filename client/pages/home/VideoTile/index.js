import React, { useRef, useEffect } from 'react';
import './styles.scss';
import tick from '../../../assets/images/tick.png';
import { getFormattedDateWithoutTime } from '../../../utils/DateUtils';

const VideoTile = ({ isVisible, publication }) => {
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
        <span className="UpperCase">{publication.user.firstName} {publication.user.lastName}</span>
        <small>{getFormattedDateWithoutTime(publication.createdAt)}</small>
        <span className="UpperCase">City</span>
      </div>
      <video ref={videoElement}
             src={publication.videoUrl}
             controls
      />
        <div className="SelectedCandidate UpperCase"><span>ЗА ${publication.selectedCandidate.fullName}</span> <img src={tick} className="Tick" alt="tick"/></div>
    </div>
  );
};

export default VideoTile;
