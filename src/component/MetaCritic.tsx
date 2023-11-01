import { Badge } from "@chakra-ui/react";
import React from "react";
interface props {
  score: number;
}
const MetaCritic = ({ score }: props) => {
  let colour = score > 90 ? "green" : score < 90 ? "yellow" : "";

  return (
    <Badge colorScheme={colour} fontSize={25} paddingX={2}>
      {score}
    </Badge>
  );
};

export default MetaCritic;
