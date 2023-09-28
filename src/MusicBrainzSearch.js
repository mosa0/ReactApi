import React, { useState, useEffect } from 'react';
import axios from 'axios';

import './MusicBrainzSearch.css'; 
import Header from './Header';
import SearchBar from './SearchBar';
import Artist from './Artist';
import ReleaseGroups from './ReleaseGroups';

function MusicBrainzSearch() {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [selectedArtist, setSelectedArtist] = useState(null);

  const searchMusicBrainz = async () => {
    try {
      const response = await axios.get(
        `https://musicbrainz.org/ws/2/artist?query=${searchTerm}&fmt=json`,
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
      setSearchResults(response.data.artists);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const fetchArtistDetails = async (artistId) => {
    try {
      const response = await axios.get(
        `https://musicbrainz.org/ws/2/artist/${artistId}?inc=aliases+release-groups&fmt=json`,
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
      setSelectedArtist(response.data);
    } catch (error) {
      console.error('Error fetching artist details:', error);
    }
  };

  useEffect(() => {
    if (searchTerm) {
      searchMusicBrainz();
    }
  }, [searchTerm]);

  return (
    <div className="musicbrainz-container">
      <Header />
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <ul className="musicbrainz-results">
        {searchResults.map((artist) => (
          <Artist key={artist.id} artist={artist} fetchArtistDetails={fetchArtistDetails} />
        ))}
      </ul>
      {selectedArtist && <ReleaseGroups selectedArtist={selectedArtist} />}
    </div>
  );
}

export default MusicBrainzSearch;