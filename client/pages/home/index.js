import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import TrackVisibility from "react-on-screen";
import VideoTile from "./VideoTile";
import { Button, Container } from "react-bootstrap";

import './styles.scss'

const Home = () => {

  return (
      <div className="Page">
        <Container>
          <TrackVisibility>
            <VideoTile />
          </TrackVisibility>
          <TrackVisibility>
            <VideoTile />
          </TrackVisibility>
          <TrackVisibility>
            <VideoTile />
          </TrackVisibility>
        </Container>
      </div>
  );
};

export default Home;
