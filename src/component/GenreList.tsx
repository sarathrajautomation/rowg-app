import React from "react";
import { useGenre } from "../hooks/useGenre";

const GenreList = () => {
  const { genre } = useGenre();
  return (
    <ul>
      {genre.map((genres) => (
        <li key={genres.id}>{genres.name}</li>
      ))}
    </ul>
  );
};

export default GenreList;
