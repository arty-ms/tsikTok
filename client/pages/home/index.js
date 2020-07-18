import React, { useContext, useEffect, useCallback, useState } from 'react';
import TrackVisibility from "react-on-screen";
import VideoTile from "./VideoTile";
import { Button, Container, Spinner } from "react-bootstrap";
import PublicationAPI from '../../APIs/PublicationAPI';
import Logger from '../../services/Logger';

import './styles.scss'
import LoadingContext from '../../contexts/LoadingContext';

export const defaultPageOptions = {
  page: 0,
  pageSize: 10,
};

const Home = () => {
  const { startFetchingData, stopFetchingData, isLoading } = useContext(LoadingContext);
  const isPublicationLoading = isLoading('latestPublications');

  const [publications, setPublications] = useState([]);
  const [currentPageOptions, setCurrentPageOptions] = useState(defaultPageOptions);
  const fetchPublications = useCallback(async () => {
    try {
      startFetchingData('latestPublications');

      const {
        totalItems,
        result: fetchedPublications,
      } = await PublicationAPI.getLatestPublications(currentPageOptions);

      setPublications(fetchedPublications);
    } catch (error) {
      Logger.error(error.message);
    } finally {
      stopFetchingData('latestPublications');
    }
  }, [currentPageOptions]);

  useEffect(() => {
    fetchPublications();
  }, [currentPageOptions]);

  return (
      <div className="Page">
        <Container>
          {(publications || []).map(publication => (
            <TrackVisibility key={publication.id}>
              <VideoTile publication={publication}/>
            </TrackVisibility>
          ))}
          { isPublicationLoading && <Spinner animation="border" role="status"/> }
        </Container>
      </div>
  );
};

export default Home;
