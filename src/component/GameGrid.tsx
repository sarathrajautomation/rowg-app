import { SimpleGrid, Spinner, Text } from "@chakra-ui/react";
import { useGames } from "../hooks/useGames";
import GameCard from "./GameCard";
import { Genre } from "../hooks/useGenre";

interface props {
  selectedGenre: Genre | null;
}
const GameGrid = ({selectedGenre}: props) => {
  const { data, error, isLoading } = useGames(selectedGenre);

  if (isLoading)
    return (
      <Spinner
        thickness="4px"
        speed="0.65s"
        emptyColor="gray.200"
        color="blue.500"
        size="xl"
      />
    );
  const skeleton = [1, 2, 3, 4, 5, 6];
  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{
          sm: 2,
          md: 2,
          lg: 3,
          xl: 4,
        }}
        padding="10px"
        spacing={10}
      >
        {data.map((games) => (
          <GameCard key={games.id} game={games} />
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
