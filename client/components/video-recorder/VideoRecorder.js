import React, { useRef, useEffect, useState } from 'react';
import PropTypes from 'prop-types';

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
import { getClassName } from '../../utils/ClassUtils';
import VideoAPI from '../../APIs/VideoAPI';

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
    onUploadingStateChange,
  } = props;

  const classes = useStyle();
  const rootClasses = getClassName([
    classes.root,
    className,
  ]);
  const videoPlayerClasses = getClassName([
    classes.video,
    'video-js',
    'vjs-default-skin',
  ]);

  const videoRef = useRef(null);

  const [playerInstance, setPlayerInstance] = useState(null);

  useEffect(() => {
    const player = videojs(videoRef.current, options);

    player.on('deviceError', function() {
      console.warn('device error:', player.deviceErrorCode);
    });

    player.on('error', (element, error) => console.error(error));

    player.on('finishRecord', async () => {
      onUploadingStateChange(true);

      const videoUrl = await VideoAPI.uploadVideo(player.recordedData);

      if (videoUrl) {
        onVideoUploaded(videoUrl);
      }

      onUploadingStateChange(false);
    });

    setPlayerInstance(player);
  }, []);

  return (
    <div className={rootClasses}>
      <video
        ref={videoRef}
        playsinline
        className={videoPlayerClasses}
      >
      </video>
    </div>
  );
};

VideoRecorder.defaultProps = {
  className: '',
  name: '',
  onVideoUploaded: () => {},
  onUploadingStateChange: () => {},
};

VideoRecorder.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string,
  onVideoUploaded: PropTypes.func,
  onUploadingStateChange: PropTypes.func,
};

export default VideoRecorder;
