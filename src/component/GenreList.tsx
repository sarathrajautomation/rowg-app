import { Genre, useGenre } from "../hooks/useGenre";

import {
  Button,
  HStack,
  Image,
  List,
  ListItem,
  Spinner,
  Text,
} from "@chakra-ui/react";

interface props {
  onSelectGenre: (genre: Genre) => void;
  SelectedGenre: Genre|null
}

const GenreList = ({ onSelectGenre, SelectedGenre }: props) => {
  const { data, isLoading } = useGenre();
  if (isLoading)
    return (
      <Spinner
      thickness='4px'
      speed='0.65s'
      emptyColor='gray.200'
      color='blue.500'
      size='xl'
    />
    );
  return (
    <List> <Text>Genre</Text>
      {data.map((genrs) => (
        <ListItem key={genrs.id} paddingY={1}>
          <HStack>
            
            <Image
              boxSize="32px"
              borderRadius={8}
              src={genrs.image_background}
            ></Image>
            <Button textAlign='left'fontWeight={genrs.id===SelectedGenre?.id? 'bold':'normal'} onClick={() => onSelectGenre(genrs)} variant="link">
              {genrs.name}
            </Button>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
