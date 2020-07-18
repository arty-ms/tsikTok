import React, { useCallback, useContext } from 'react';
import { withRouter } from 'react-router-dom';
import VideoRecorder from '../../components/video-recorder/VideoRecorder';
import PublicationAPI from '../../APIs/PublicationAPI';
import VideoAPI from '../../APIs/VideoAPI';
import Logger from '../../services/Logger';
import LoadingContext from '../../contexts/LoadingContext';
import './styles.scss';

const UploadVideoPage = (props) => {
  const { history  } = props;
  const {
    startSavingData,
    stopSavingData,
  } = useContext(LoadingContext);

  const publishVideo = useCallback(async (recordedData) => {
    try {
      startSavingData('publishVideo');

      const video = await VideoAPI.uploadVideo(recordedData);
      await PublicationAPI.createPublication({
        videoId: video.id,
        selectedCandidateId: 1,
      });

      history.push('/');
    } catch (error) {
      Logger.error(error.message);
    } finally {
      stopSavingData('publishVideo');
    }
  }, []);

  return (
    <div className="Page">
      <VideoRecorder
        onVideoPublish={publishVideo}
      />
    </div>
  );
};

export default withRouter(UploadVideoPage);
