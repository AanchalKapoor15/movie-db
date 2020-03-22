import React from 'react';
import { Container, Row } from 'reactstrap';

import MediaTile from './media-tile';

export const MovieList = (props) => {
    function movieElement(movie) {
        return (
            <MediaTile 
            key={movie.id} 
            id={movie.id}
            posterPath={movie.poster_path}
            title={movie.title}
            releaseDate={new Date(movie.release_date)}
            mediaType="movie"
            votePercentage={movie.vote_average * 10}/>
        );
    }
    return (
        <Container>
            <Row>
                {props.movies.map(movieElement)}
            </Row>
        </Container>
    );
}

export default MovieList;