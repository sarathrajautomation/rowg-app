import React from "react";
import { Game } from "../hooks/useGames";
import { Card, CardBody, HStack, Heading, Image, Text } from "@chakra-ui/react";
import PlatformIcon from "./PlatformIcon";
import MetaCritic from "./MetaCritic";
import url from "../services/img";

interface props {
  game: Game;
}

const GameCard = ({ game }: props) => {
  return (
    <Card width='300px'>
      <Image src={game.background_image} />

      <CardBody>
       
        <HStack justifyContent={"space-between"}>
          <PlatformIcon
            platform={game.parent_platforms.map((e) => e.platform)}
          />
          <MetaCritic score={game.metacritic} />
        </HStack>
        <Heading>{game.name}</Heading>

      </CardBody>
    </Card>
  );
};

export default GameCard;
