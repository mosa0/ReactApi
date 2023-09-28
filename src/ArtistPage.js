// ArtistPage.js
import React from 'react';
import './MusicBrainzSearch.css'; // Import the CSS file

function ArtistPage({ artist }) {
  return (
    <div className="musicbrainz-artist-details">
      <h2>Artist Details</h2>
      <p>Name: {artist.name}</p>
      <p>Country: {artist.country}</p>
      <p>Aliases: {artist.aliases.map((alias) => alias.name).join(', ')}</p>
      <h3>Release Groups:</h3>
      <ul>
        {artist['release-groups'].map((group) => (
          <li key={group.id}>{group.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default ArtistPage;

