function NewSongItem(props) {
  // console.log("newSongItem: ", props);

  return (
    <tr className="song-data">
      <td className="song">{props.song}</td>
      <td className="artist">{props.artist}</td>
      <td className="genre">{props.genre}</td>
      <td className="rating">{props.rating}</td>
    </tr>
  );
}

export default NewSongItem;
