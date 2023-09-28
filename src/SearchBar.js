import React from 'react';
import './MusicBrainzSearch.css';

function SearchBar({ searchTerm, setSearchTerm }) {
  return (
    <input
      type="text"
      placeholder="Search for artists..."
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      className="musicbrainz-input"
    />
  );
}

export default SearchBar;
