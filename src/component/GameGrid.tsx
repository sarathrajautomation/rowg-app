import { SimpleGrid, Text } from "@chakra-ui/react";
import { useGames } from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCarSkeleton from "./GameCarSkeleton";

const GameGrid = () => {
  const { games, error ,isLoading} = useGames();


  const skeleton=[1,2,3,4,5,6]
  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid columns={{
        sm:1,md:2, lg:3, xl:4
      }} padding='10px' spacing={10} >

        {isLoading&& skeleton.map((skelton)=><GameCarSkeleton key={skelton}/>)}
        {games.map((game) => (
         <GameCard key={game.id} game={game}/>
        ))}
      </SimpleGrid>
    </>
  );
  
};

export default GameGrid;
