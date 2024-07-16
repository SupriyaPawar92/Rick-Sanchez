// src/App.js

import React, { useEffect, useState } from "react";
import axios from "axios";
import CharacterCard from "./components/CharacterCard";
import ReactPaginate from 'react-paginate';
import styled from 'styled-components';

import './App.css';

const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

const CardListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  background: #1e1e1e;
  padding: 20px;
`;

const App = () => {
  const [characters, setCharacters] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    fetchCharacters(currentPage);
  }, [currentPage]);

  const handlePageClick = (data) => {
    setCurrentPage(data.selected + 1);
  };

  const fetchCharacters = (page) => {
    axios.get("https://rickandmortyapi.com/api/character")
      .then(response => {
        setCharacters(response.data.results);
      })
      .catch(error => {
        console.error("Error fetching data from API:", error);
      });
  }

  return (
    <>
    <div className="app">
      <div className="character-grid">
        {characters.map(character => (
          <CharacterCard key={character.id} character={character} />
        ))}
      </div>
    </div>

    <PaginationContainer>
        <ReactPaginate
          previousLabel={'previous'}
          nextLabel={'next'}
          breakLabel={'...'}
          breakClassName={'break-me'}
          pageCount={pageCount}
          marginPagesDisplayed={2}
          pageRangeDisplayed={3}
          onPageChange={handlePageClick}
          containerClassName={'pagination'}
          subContainerClassName={'pages pagination'}
          activeClassName={'active'}
        />
      </PaginationContainer>
    </>
  );
};

export default App;
