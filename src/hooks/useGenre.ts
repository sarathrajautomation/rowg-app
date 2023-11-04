import { useEffect, useState } from "react";
import apiClient from "../services/api-client";

interface Genre{
id: number;
name: String;


}

interface FetchGenreResponse{
   count: number;
    results: Genre[];
    
    
    }

export const useGenre = () => {
    const [genre, setGenre] = useState<Genre[]>([]);
    const [error, setError] = useState("");
  
  
    const [isLoading, SetLoading]=useState(false);
  
    useEffect(() => {
      const controllers = new AbortController();
      SetLoading(true)
      apiClient
        .get<FetchGenreResponse>("/genres")
        .then((res) => 
        
        {
           setGenre(res.data.results)
           SetLoading(false) 
        
        }
        
       
        
        )
        .catch((err) => setError(err.message));
        SetLoading(false)
  
        return ()=>controllers.abort();
    },[]);
    return { genre, error, isLoading };
  };
  