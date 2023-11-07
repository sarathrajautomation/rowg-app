import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { useData } from "./useData";
import { Genre } from "./useGenre";
export interface Game {
  id: number;
  name: number;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
}
export interface Platform {
  id: number;
  name: string;
  slug: string;
}

export const useGames = (selectedGenre: Genre | null, selectedPlatform:Platform|null, selectedRev: string|null) =>
  useData<Game>("/games", {
    params: {
      genres: selectedGenre?.id, 
      platforms: selectedPlatform?.id,
      ordering:selectedRev,
    },

  },
  [selectedGenre?.id, selectedPlatform?.id, selectedRev]
  
 
  );
