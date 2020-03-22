import React, { useState, useEffect } from 'react';

import DashboardStyles from './dashboard-styles';
import MovieList from './movie-list';
import * as Constants from '../constants';
import SearchBar from './search-bar';
import TvShowsList from './tv-list';
import Header from './header';

export const DashboardView = () => {
    const [popularMovies, setPopularMovies] = useState([]);
    const [tvShows, setTvShows] = useState([]);
    const [searchResult, setSearchResult] = useState([]);

    useEffect(() => {
        getMovies();
        getTvShows();
    }, []);

    function getMovies() {
        fetch(`${Constants.baseUrl}/movie/popular?api_key=${Constants.key}&language=en-US&page=1`, {
            method: 'GET',
            headers: {
                ...Constants.httpConfig
            }
        }).then((response) => response.json())
            .then((result) => {
                setPopularMovies(result.results);
            });
    }

    function getTvShows() {
        fetch(`${Constants.baseUrl}/tv/popular?api_key=${Constants.key}&language=en-US&page=1`, {
            method: 'GET',
            headers: {
                ...Constants.httpConfig
            }
        }).then((response) => response.json())
            .then((result) => {
                setTvShows(result.results);
            });

    }

    function searchMovies(searchText) {
        let formattedSearchText = searchText.replace(/\s/g, '%20'); //regex to replace all occurrences of white space character
        fetch(`${Constants.baseUrl}/search/movie?api_key=${Constants.key}&language=en-US&page=1&query=${formattedSearchText}&include_adult=false`, {
            method: 'GET',
            headers: {
                ...Constants.httpConfig
            }
        })
            .then((response) => response.json())
            .then((result) => {
                setSearchResult(result.results);
            })
    }

    function setMovieList() {
        return searchResult.length > 0 ? searchResult : popularMovies;
    }

    return (
        <div style={DashboardStyles.DashboardBg}>
            <Header />
            <SearchBar searchMovies={searchMovies} />
            <h3
                style={DashboardStyles.PopularMoviesHeader}>
                {searchResult.length > 0 ? 'Search Results' : 'Popular Movies'}
            </h3>
            <MovieList movies={setMovieList()} />
            <TvShowsList tvShows={tvShows} />
        </div>
    );
}

export default DashboardView;