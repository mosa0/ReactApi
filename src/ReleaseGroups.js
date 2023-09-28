import React from 'react';
import './MusicBrainzSearch.css';

function ReleaseGroups({ selectedArtist }) {
  let artistDetails = null;

  if (selectedArtist) {
    artistDetails = (
      <div>
        <h2>Artist Details</h2>
        <p>Name: {selectedArtist.name}</p>
        <p>Country: {selectedArtist.country}</p>
        <p>Aliases: {selectedArtist.aliases.map((alias) => alias.name).join(', ')}</p>
      </div>
    );
  }

  return (
    <div className="musicbrainz-artist-details">
      {artistDetails}
      <h3>Release Groups:</h3>
      <ul>
        {selectedArtist && selectedArtist['release-groups'].map((group) => (
          <li key={group.id}>{group.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default ReleaseGroups;
