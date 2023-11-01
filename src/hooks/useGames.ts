import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
export interface Game {
  id: number;
  name: number;
  background_image: string;
  parent_platforms:{platform: Platform}[]
  metacritic: number
}
export interface Platform{
  id: number,
  name: string,
  slug:string
}
interface FetchGameResponse {
  count: number;
  results: Game[];
}
export const useGames = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const controllers = new AbortController();
    apiClient
      .get<FetchGameResponse>("/games")
      .then((res) => setGames(res.data.results))
      .catch((err) => setError(err.message));

      return ()=>controllers.abort();
  },[]);
  return { games, error };
};
