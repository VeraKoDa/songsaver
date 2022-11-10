import React from "react";
import NewSongItem from "./NewSongItem";

function SongList(props) {
  // console.log("SongList props: ", props);

  const components = props.songs.map((song) => (
    <NewSongItem
      key={song.id}
      song={song.song}
      artist={song.artist}
      genre={song.genre}
      rating={song.rating}
    />
  ));

  return (
    <>
      <table style={{ width: "100%", textAlign: "center" }}>
        <thead>
          <tr className="song-header" onClick={props.sort}>
            <th className="song-row_item">Song</th>
            <th className="song-row_item">Artist</th>
            <th className="song-row_item">Genre</th>
            <th className="song-row_item">Rating</th>
          </tr>
        </thead>
        <tbody>{components}</tbody>
      </table>
    </>
  );
}

export default SongList;
