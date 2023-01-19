import { Text } from "@chakra-ui/react";

export default function NewsCard({news_image,newsText}){
  return(
    <div>
      <div><img src={news_image} /></div>
      <Text>{newsText}</Text>
    </div>
  )
}