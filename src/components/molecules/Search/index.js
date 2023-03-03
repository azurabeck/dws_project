import React, { useState } from "react";
import PropTypes from "prop-types";
import Input from "../../atoms/Input";
import { SearchButton, SearchImageWrapper, SearchWrapper } from "./Search.styles";
import SearchImage from '../../../assets/images/search.png'

const Search = ({ handleSearch }) => {
  const [query, setQuery] = useState("");

  const handleQueryChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault(); 
    handleSearch(query); 
  };

  return (
    <SearchWrapper >
      <Input value={query} onChange={handleQueryChange} />
      <SearchButton onClick={handleSubmit}>
            <SearchImageWrapper src={SearchImage} alt='Button Search' />
      </SearchButton>
    </SearchWrapper>
  );
};

Search.propTypes = {
  handleSearch: PropTypes.func
};

export default Search;
