import React  from 'react';
import VideoRecorder from '../../components/video-recorder/VideoRecorder';
import './styles.scss';

const UploadVideoPage = (props) => {
  const {

  } = props;

  const onVideoUploaded = (videoUrl) => {
    console.log(videoUrl);
  };

  return (
    <div className="Page">
      <VideoRecorder
        onVideoUploaded={onVideoUploaded}
      />
    </div>
  );
};

export default UploadVideoPage;
