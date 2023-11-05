import React from "react";
import { Genre, useGenre } from "../hooks/useGenre";
import { useData } from "../hooks/useData";
import { HStack, Image, List, ListItem, Spinner, Text } from "@chakra-ui/react";

const GenreList = () => {
  const { data, isLoading } = useGenre();
  if(isLoading) return <Spinner/>
  return (

   
    <List>
      {data.map((genrs) => (
        <ListItem key={genrs.id} paddingY={1}>
          <HStack>
            <Image boxSize="32px" borderRadius={8} src={genrs.image_background}>
              
            </Image>
            <Text>{genrs.name}</Text>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
