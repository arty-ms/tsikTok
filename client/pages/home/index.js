import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import TrackVisibility from "react-on-screen";
import VideoTile from "./VideoTile";
import { Button } from "react-bootstrap";

import './styles.scss'

const Home = () => {
  const { t } = useTranslation();

  return (
    <div>
      <div className="Page">
        <TrackVisibility>
          <VideoTile />
        </TrackVisibility>
        <TrackVisibility>
          <VideoTile />
        </TrackVisibility>
        <TrackVisibility>
          <VideoTile />
        </TrackVisibility>
      </div>
    </div>
  );
};

export default Home;
