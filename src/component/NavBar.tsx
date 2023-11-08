import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColourModeSwitch from "./ColourModeSwitch";
import SearchInput from "./SearchInput";
interface props{
  search:(search: string)=>void
}
const NavBar = ({search}: props) => {
  return (

   
    <HStack  padding="20px">
      <Image src={logo} boxSize="60px" />
      <SearchInput onsearch={search}/>
      <ColourModeSwitch/>
    </HStack>
  );
};

export default NavBar;
