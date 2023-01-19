import { Text } from "@chakra-ui/react"
import a from "../../../Homepage_Images/news/a.jpg"
import b from "../../../Homepage_Images/news/b.jpg"
import c from "../../../Homepage_Images/news/c.jpg"
import d from "../../../Homepage_Images/news/d.jpg"
import NewsCard from "./news_card"

let vid_data=[
    {image:a,
    dis:"Apple Event Introduces Mac Studio, Studio Display, iPad Air, & More"},
    {image:b,
        dis:"Apple Offers Mac Mini, MacBook Pro with M2 Pro & M2 Max Chips"},
    {image:c,
    dis:"Sony FE 20-70mm F/4 G Zoom Lens: Hands-On Review"},
   {image:d,
    dis:"New Sigma 60-600mm Lens Announced for Sony and Leica Users"},
                                
]

export default function News(){
    return (
        <>
            <Text fontSize="3xl" className="watch_news_text">WATCH. CREATE. INSPIRE.</Text>
        <div className="watch_crousel">
        {vid_data && vid_data.map(el=>(<NewsCard news_image={el.image} newsText={el.dis} />))}
        </div>
        <br/>
        <br/>
        </>
        
    )
}