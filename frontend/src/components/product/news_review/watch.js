import { Text } from "@chakra-ui/react"

import desktopp from "../../../photography_images/desktopp.webp"
import sony from "../../../photography_images/sony-2070f4.webp"
import lenss from "../../../photography_images/lenss.webp"
import standd from "../../../photography_images/standd.webp"
import WatchCard from "./catchcard"
import "./watch.css"
let vid_data=[
    {image:desktopp,
    dis:"Apple Offers Mac Mini, MacBook Pro with M2 Pro & M2 Max Chips"},
    {image:sony,
        dis:"Sony FE 20-70mm F/4 G Zoom Lens: Hands-On Review"},
    {image:lenss,
    dis:"New Sigma 60-600mm Lens Announced for Sony and Leica Users"},
   {image:standd,
    dis:"Nanlite Debuts Updated PavoTube II and Forza II Series"},
                                
]

export default function Watch(){
    return (<>
    <Text fontSize="3xl" className="watch_news_text">NEWS & REVIEWS FROM 42 WEST</Text>
        <div className="watch_crousel">
        {vid_data && vid_data.map(el=>(<WatchCard watch_image={el.image} watchText={el.dis} />))}

        </div>
        <br/>
        <br/>
    </>
        
    )
}