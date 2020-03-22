import React, { useState } from 'react';
import { Input, Label } from 'reactstrap';

import DashboardStyles from './dashboard-styles';
import IconSearch from '../assets/search-icon';


export const SearchBar = (props) => {
    const [placeholder, setPlaceholder] = useState('Search');
    const [searchText, setSearchText] = useState('');

    function onSearchMovies() {
        props.searchMovies(searchText);
    }

    function onBlur() {
        if (searchText.length === 0) {
            setPlaceholder('Search')
        }
    }

    return (
        <div>
            <Label
                for="searchBar"
                style={DashboardStyles.SearchLabel}>
                {placeholder}
            </Label>
            <span onClick={onSearchMovies}>
                <IconSearch
                    height="13px"
                    width="13px"
                    position="relative"
                    top="31px"
                    left="411px"
                    marginLeft="50px" />
            </span>
            <Input
                id="searchBar"
                style={DashboardStyles.SearchBox}
                type="text"
                value={searchText}
                onClick={() => { setPlaceholder('') }}
                onChange={(event) => { setSearchText(event.target.value); }}
                onBlur={onBlur}
            />
        </div>
    );

}

export default SearchBar;