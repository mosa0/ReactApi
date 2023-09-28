import React from 'react';
import './MusicBrainzSearch.css';

function Artist({ artist, fetchArtistDetails }) {
  return (
    <li>
      <button
        onClick={() => fetchArtistDetails(artist.id)}
        className="musicbrainz-artist-button"
      >
        {artist.name}
      </button>
    </li>
  );
}

export default Artist;
