import React, { Component } from "react";
import { songData } from "../songData";
import SongForm from "./SongForm.js";
import SongList from "./SongList";

class SongOverview extends Component {
  constructor() {
    super();
    this.state = {
      songs: songData,
    };
  }

  addSong = (e, newSong) => {
    e.preventDefault();
    console.log(`song in addSong: `, newSong);

    const checkValues = Object.values(newSong).includes(undefined);
    console.log(checkValues);

    if (checkValues === true) {
      alert("Please fill in all the fields");
      return;
    }
    const id = this.state.songs.length + 1;
    this.setState({
      songs: [
        ...this.state.songs,
        {
          id: id,
          song: newSong.song,
          artist: newSong.artist,
          genre: newSong.genre,
          rating: newSong.rating,
        },
      ],
    });
    e.target.reset();
  };

  handleSort = (event) => {
    event.preventDefault();

    const name = event.target.innerText;
    const songState = [...this.state.songs];

    const sortSong = songState.sort((a, b) => {
      switch (name) {
        case "Song":
          return a.song < b.song ? -1 : 1;

        case "Artist":
          return a.artist < b.artist ? -1 : 1;

        case "Genre":
          return a.genre < b.genre ? -1 : 1;

        case "Rating":
          return a.rating < b.rating ? -1 : 1;

        default:
          return null;
      }
    });

    this.setState({
      songs: sortSong,
    });

    //     a.song < b.song ? -1 : 1
    //   );
    //   const sortArtist = [...this.state.songs].sort((a, b) =>
    //     a.artist < b.artist ? -1 : 1
    //   );
    //   const sortGenre = [...this.state.songs].sort((a, b) =>
    //     a.genre < b.genre ? -1 : 1
    //   );
    //   const sortRating = [...this.state.songs].sort((a, b) =>
    //     a.rating < b.rating ? -1 : 1
    //   );

    // }
    //   switch (name) {
    //     case "Song":
    //       this.setState({
    //         songs: sortSong,
    //       });
    //       break;
    //     case "Artist":
    //       this.setState({
    //         songs: sortArtist,
    //       });
    //       break;
    //     case "Genre":
    //       this.setState({
    //         songs: sortGenre,
    //       });
    //       break;
    //     case "Rating":
    //       this.setState({
    //         songs: sortRating,
    //       });
    //       break;

    //     default:
    //   }
  };

  render() {
    return (
      <>
        <div>
          {/* Song input component */}
          <SongForm addSong={this.addSong} onClick={this.onClick} />
          <hr />

          {/* Song overview component*/}
          <SongList songs={this.state.songs} sort={this.handleSort} />
          <hr />
        </div>
      </>
    );
  }
}

export default SongOverview;
