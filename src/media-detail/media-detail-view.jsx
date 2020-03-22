import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'reactstrap';

import * as Constants from '../constants';
import MediaDetailStyles from './media-detail-styles';
import { useHistory } from 'react-router-dom'
import BackIcon from '../assets/back-icon';

export const MediaDetail = (props) => {
    const { params } = props.match;
    const [media, setMedia] = useState({});
    const history = useHistory();

    useEffect(() => {
        fetch(`${Constants.baseUrl}/${params.mediaType}/${params.id}?api_key=${Constants.key}&language=en-US`, {
            method: 'GET',
            headers: {
                ...Constants.httpConfig
            }
        }).then((response) => response.json())
            .then((result) => {
                setMedia(result);
            });
    }, []);

    function getReleaseYear() {
        if (media && media.release_date) {
            return media.release_date.split('-')[0];
        }
        else if (media && media.first_air_date) {
            return media.first_air_date.split('-')[0];
        }
    }

    function getVoteAverage() {
        if (media) {
            return media.vote_average * 10;
        }
    }

    function getMediaDuration() {
        if (media) {
            return `${Math.floor(media.runtime / 60)}h ${media.runtime % 60}min`;
        }
    }

    return (
        <div>
            <Container style={MediaDetailStyles.MediaDetailBg}>
                <Row>
                    <span onClick={() => history.goBack()} style={MediaDetailStyles.BackButton}>
                        <BackIcon width="25" height="25"/>
                    </span>
                    <img
                        src={`${Constants.imageBaseUrl}/${media.backdrop_path}`}
                        style={MediaDetailStyles.BgImage} />
                </Row>
                <Row>
                    <Col>
                        <img
                            src={`${Constants.imageBaseUrl}/${media.poster_path}`}
                            style={MediaDetailStyles.PosterImage} />
                    </Col>
                    <Col>
                        <Container>
                            <Row style={MediaDetailStyles.MediaInfo}>
                                <span style={MediaDetailStyles.MediaName}>
                                    {media.title || media.name}
                                </span>
                                <br />
                                <br />
                                <span>
                                    {`${getReleaseYear()} . ${getVoteAverage()}% User Score`}
                                </span>
                                <br />
                                <span>
                                    {getMediaDuration()}
                                </span>
                            </Row>
                        </Container>
                    </Col>
                </Row>
                <Row>
                    <hr style={MediaDetailStyles.HorizontalRule} />
                    <span style={MediaDetailStyles.MediaOverviewHeader}>
                        Overview
                </span>
                    <span
                        style={MediaDetailStyles.MediaOverviewText}>
                        {media.overview}
                    </span>
                </Row>
            </Container>
        </div>
    );
}

export default MediaDetail;