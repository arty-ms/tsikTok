import React from 'react';
import PropTypes from 'prop-types';
import VideoRecorder from '../../components/video-recorder/VideoRecorder';

const UploadVideoPage = (props) => {
  const {

  } = props;

  const onVideoUploaded = (videoUrl) => {
    console.log(videoUrl);
  };

  return (
    <div>
      <VideoRecorder
        onVideoUploaded={onVideoUploaded}
      />
    </div>
  );
};

export default UploadVideoPage;
