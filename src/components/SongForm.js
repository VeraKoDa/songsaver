import React from "react";
import { useState } from "react";

function SongForm(props) {
  const [song, setName] = useState();
  const [artist, setArtist] = useState();
  const [genre, setGenre] = useState();
  const [rating, setRating] = useState();

  const newSong = {
    song: song,
    artist: artist,
    genre: genre,
    rating: rating,
  };

  // onSubmit={(e) => props.addSong(e, newSong)}
  return (
    <form onSubmit={(e) => props.addSong(e, newSong)} name="newSongInput">
      <label name="song">
        Song
        <input
          type="text"
          name="song"
          onChange={(i) => setName(i.target.value)}
        ></input>
      </label>

      <label name="artist">
        Artist
        <input
          type="text"
          name="artist"
          onChange={(i) => setArtist(i.target.value)}
        ></input>
      </label>

      <label name="genre">
        Genre
        <input
          type="text"
          name="genre"
          onChange={(i) => setGenre(i.target.value)}
        ></input>
      </label>

      <label name="rating">
        Rating
        <select
          style={{ minWidth: "50px" }}
          onChange={(i) => setRating(i.target.value)}
        >
          <option name="choose">Please choose a value</option>
          <option name="1">1</option>
          <option name="2">2</option>
          <option name="3">3</option>
          <option name="4">4</option>
          <option name="5">5</option>
        </select>
      </label>

      <button>Toevoegen</button>
    </form>
  );
}

export default SongForm;
