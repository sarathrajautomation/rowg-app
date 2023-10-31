import React from "react";
import { Game } from "../hooks/useGames";
import { Card, CardBody, Heading, Image, Text } from "@chakra-ui/react";
import PlatformIcon from "./PlatformIcon";

interface props {
  game: Game;
}

const GameCard = ({ game }: props) => {
  return (
    <Card>
      <Image src={game.background_image} />

      <CardBody>
        <Heading>{game.name}</Heading>
       <PlatformIcon platform={game.parent_platforms.map(e=>e.platform)}/>
      </CardBody>
    </Card>
  );
};

export default GameCard;
