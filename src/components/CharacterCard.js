// src/components/CharacterCard.js

import React from "react";
import './CharacterCard.css';
import styled from 'styled-components';

const Status = styled.span`
  color: ${props => (props.status === 'Alive' ? 'green' : props.status === 'Dead' ? 'red' : 'gray')};
`;



const CharacterCard = ({ character }) => {
  return (
    
    <div className="character-card">
      <div className="character-image">
        <img src={character.image} alt={character.name} />
      </div>
      <div className="character-info">
        <h3>{character.name}</h3>
        <p><Status status={character.status}>{character.status}</Status> - {character.species}</p>
        <p>Species: {character.species}</p>
        <p>Last known location: {character.location.name}</p>
        <p>First seen in: {character.episode[0]}</p>
      </div>
    </div>
    
  );
};

export default CharacterCard;
