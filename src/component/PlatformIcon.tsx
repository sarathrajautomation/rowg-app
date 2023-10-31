import React from 'react'
import { Platform } from '../hooks/useGames'
import { Text } from '@chakra-ui/react';
interface props{
    platform: Platform[];
}
const PlatformIcon = ({platform}:props) => {
  return (
   <>
   
   {platform.map((platform)=><Text>{platform.name}</Text>)}
   
   </>
  )
}

export default PlatformIcon