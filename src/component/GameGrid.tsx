import { SimpleGrid, Text } from "@chakra-ui/react";
import { useGames } from "../hooks/useGames";
import GameCard from "./GameCard";


const GameGrid = () => {
  const { data, error ,isLoading} = useGames();


  const skeleton=[1,2,3,4,5,6]
  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid columns={{
        sm:2,md:2, lg:3, xl:4
      }} padding='10px' spacing={10} >

        
        {data.map((games) => (
         <GameCard key={games.id} game={games}/>
        ))}
      </SimpleGrid>
    </>
  );
  
};

export default GameGrid;
