import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaLinux,
  FaAndroid,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";

import { Platform } from "../hooks/useGames";
import { HStack, Icon, Text } from "@chakra-ui/react";
import { BsGlobe } from "react-icons/bs";
import { IconType } from "react-icons";
interface props {
  platform: Platform[];
}
const PlatformIcon = ({ platform }: props) => {
  const iconMap: { [key: string]: IconType } = {
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    mac: FaApple,
    linux: FaLinux,
    ios: MdPhoneIphone,
    web: BsGlobe,
    android: FaAndroid,
  };
  return (
    <HStack marginY={1}>
      {platform.map((platform) => (
        <Icon  key={platform.id}
        as={iconMap[platform.slug]} color='grey.500' />
      ))}
    </HStack>
  );
};

export default PlatformIcon;
