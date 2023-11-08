import "./App.css";
import {
  Button,
  ButtonGroup,
  Grid,
  GridItem,
  HStack,
  Show,
} from "@chakra-ui/react";
import NavBar from "./component/NavBar";
import GameGrid from "./component/GameGrid";
import GenreList from "./component/GenreList";
import { useState } from "react";
import { Genre } from "./hooks/useGenre";
import PlatformSelector from "./component/PlatformSelector";
import { Platform } from "./hooks/useGames";
import SortSelector from "./component/SortSelector";
import { FaLaravel } from "react-icons/fa";
function App() {
  const [selectedGenre, SetGenre] = useState<Genre | null>(null);
  const [selectedPlatform, SetPlatform] = useState<Platform | null>(null);
  const [SelectRev, SetSelectRev] = useState("");
  const [ViewSearch, SetSearch] = useState("");



  const gameQuery=[
    {
      selectedGenre, selectedPlatform, SelectRev, ViewSearch
    }
  ]
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,

        lg: `"nav nav" "aside main"`,
      }}
    >
      <GridItem area="nav">
        <NavBar search={(value) => SetSearch(value)} />
      </GridItem>

      <Show above="lg">
        <GridItem area="aside" padding={3}>
          <GenreList
            SelectedGenre={selectedGenre}
            onSelectGenre={(genre) => SetGenre(genre)}
          />
        </GridItem>
      </Show>

      <GridItem area="main">
        <HStack>
          <PlatformSelector
            displayPlatform={selectedPlatform}
            selectedPlatform={(plat) => SetPlatform(plat)}
          />
          <SortSelector onSelectSortOrder={(ls) => SetSelectRev(ls)} />
        </HStack>
        <GameGrid
          selectedPopular={SelectRev}
          selectedPlatform={selectedPlatform}
          searchGame={ViewSearch}
          selectedGenre={selectedGenre}
        />
      </GridItem>
    </Grid>
  );
}

export default App;
