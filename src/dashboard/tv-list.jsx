import React from 'react';
import { Container, Row, Col } from 'reactstrap';

import MediaTile from './media-tile';

export const TvShowsList = (props) => {
    function tvShowElement(tvShow) {
        return (
            <MediaTile 
            key={tvShow.id} 
            id={tvShow.id}
            posterPath={tvShow.poster_path}
            title={tvShow.original_name}
            releaseDate={new Date(tvShow.first_air_date)}
            mediaType="tv"
            votePercentage={tvShow.vote_average * 10}/>
        );
    }
    return (
        <Container>
            <Row>
                {props.tvShows.map(tvShowElement)}
            </Row>
        </Container>
    );
}

export default TvShowsList;