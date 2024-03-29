import React, { useRef, useEffect, useState, useContext } from 'react';
import PropTypes from 'prop-types';
import { Button, Spinner } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';

import './styles.scss';

// Please do not remove imports which is not used. Seems like video.js needs it internally

import 'video.js/dist/video-js.css';
import videojs from 'video.js';
import 'webrtc-adapter';
import RecordRTC from 'recordrtc';
import WaveSurfer from 'wavesurfer.js';
import MicrophonePlugin
  from 'wavesurfer.js/dist/plugin/wavesurfer.microphone.js';

WaveSurfer.microphone = MicrophonePlugin;
import 'videojs-wavesurfer/dist/css/videojs.wavesurfer.css';
import Wavesurfer from 'videojs-wavesurfer/dist/videojs.wavesurfer.js';
import 'videojs-record/dist/css/videojs.record.css';
import Record from 'videojs-record/dist/videojs.record.js';
//import '@mattiasbuelens/web-streams-polyfill/dist/polyfill.min.js';
import 'videojs-record/dist/plugins/videojs.record.webm-wasm.js';
import 'videojs-record/dist/plugins/videojs.record.ts-ebml.js';

import useStyle from './VideoRecorderStyle';
import {getClassName} from '../../utils/ClassUtils';
import LoadingContext from '../../contexts/LoadingContext';

import { useAlert } from 'react-alert'

const options = {
  controls: true,
  width: 320,
  height: 240,
  fluid: false,
  controlBar: {
    volumePanel: false,
  },
  plugins: {
    record: {
      audio: true,
      maxLength: 1000,
      debug: true,
      video: {
        width: 320,
        height: 240,
      },
      frameWidth: 320,
      frameHeight: 240,
    },
  },
};

const VideoRecorder = (props) => {
  const {
    className,
    name,
    onVideoUploaded,
    onVideoPublish,
    onUploadingStateChange,
    history
  } = props;

  const { isLoading } = useContext(LoadingContext);
  const isVideoPublishing = isLoading('publishVideo');

  const classes = useStyle();
  const videoPlayerClasses = getClassName([
    classes.video,
    'video-js',
    'vjs-default-skin',
    'my-video-js'
  ]);

  const videoRef = useRef(null);

  const videoJsRef = useRef(null);

  const [recordedData, setRecordedData] = useState(null);

  const [isRecording, setIsRecording] = useState(null);

  const alert = useAlert()

  useEffect(() => {
    videoJsRef.current = videojs(videoRef.current, options);

    videoJsRef.current.record().getDevice();

    videoJsRef.current.on('error', (element, error) => console.error(error));

    videoJsRef.current.on('finishRecord', async () => {
      onUploadingStateChange(true);

      setRecordedData(videoJsRef.current.recordedData);

      onUploadingStateChange(false);
    });
  }, []);

  return (
    <div className={`VideoRecorderWidget ${recordedData ? '' : 'HasNoRecordedData'}`}>
      <div className="VideoPlayerWrapper">
      <video
        ref={videoRef}
        playsinline
        className={videoPlayerClasses}
      >
      </video>
      </div>
      <div className="ButtonWrapper">
      {recordedData ? (
        <div>
          <Button
            width="lg"
            px="16px"
            block
            disabled={!recordedData}
            onClick={() => onVideoPublish(recordedData)}
          >
            Опубликовать видео
            { isVideoPublishing && <Spinner animation="border" role="status"/> }
          </Button>
          <Button
            width="lg"
            block
            disabled={!recordedData}
            variant="warning"
            onClick={() => {
              videoJsRef.current.record().reset();
              videoJsRef.current.record().getDevice();
              setRecordedData(null);
            }}
          >
            Перезаписать видео
          </Button>
        </div>
      ) : (
        isRecording ? (
          <Button
            width="lg"
            block
            variant="danger"
            onClick={() => {
              videoJsRef.current.record().stop();
              setIsRecording(false);
            }}>
            Остановить запись
          </Button>
        ) : (
          <Button
            width="lg"
            block
            onClick={() => {
              videoJsRef.current.record().start();
              setIsRecording(true);
            }}>
            Начать запись
          </Button>)
      )}
      </div>
    </div>
  );
};

VideoRecorder.defaultProps = {
  className: '',
  name: '',
  onVideoUploaded: () => {},
  onVideoPublish: () => {},
  onUploadingStateChange: () => {},
};

VideoRecorder.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string,
  onVideoUploaded: PropTypes.func,
  onVideoPublish: PropTypes.func,
  onUploadingStateChange: PropTypes.func,
};

export default withRouter(VideoRecorder);
