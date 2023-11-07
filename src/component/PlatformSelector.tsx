import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import React from "react";
import { BsChevronDown, BsMenuDown } from "react-icons/bs";
import { usePlatform } from "../hooks/usePlatform";
import { Platform } from "../hooks/useGames";

interface props {
  selectedPlatform: (platform: Platform) => void;
  displayPlatform: Platform|null;
}
const PlatformSelector = ({selectedPlatform, displayPlatform}:props) => {
  const { data, error } = usePlatform();
  if (error) return null;
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
       {displayPlatform?.name||"Platforms"}
      </MenuButton>
      <MenuList>
        {data.map((dat) => (
          <MenuItem onClick={()=>selectedPlatform(dat)} key={dat.id}>{dat.name}</MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;
