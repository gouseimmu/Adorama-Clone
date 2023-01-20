import { Text } from "@chakra-ui/react";

export default function WatchCard({watch_image,watchText}){
  return(
    <div>
      <div><img src={watch_image} /></div>
      <Text>{watchText}</Text>
    </div>
  )
}