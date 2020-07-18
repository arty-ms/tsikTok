import React from 'react';
import PropTypes from 'prop-types';
import VideoRecorder from '../../components/video-recorder/VideoRecorder';
import { Container, Row, Col } from 'react-bootstrap';
import './styles.scss';

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
      <Container className="PageGrid">
        <Row>
          <Col>
            <div className="VideoTile" />
          </Col>
          <Col>
            <div className="VideoTile" />
          </Col>
          <Col>
            <div className="VideoTile" />
          </Col>
        </Row>
        <Row>
          <Col>
            <div className="VideoTile" />
          </Col>
          <Col>
            <div className="VideoTile" />
          </Col>
          <Col>
            <div className="VideoTile" />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default UploadVideoPage;
