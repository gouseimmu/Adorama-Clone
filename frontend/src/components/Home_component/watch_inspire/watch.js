import a from "../../../Homepage_Images/vid/a.jpg"
import b from "../../../Homepage_Images/vid/b.jpg"
import c from "../../../Homepage_Images/vid/c.jpg"
import d from "../../../Homepage_Images/vid/d.jpg"
import e from "../../../Homepage_Images/vid/e.jpg"
import f from "../../../Homepage_Images/vid/f.jpg"
import g from "../../../Homepage_Images/vid/g.jpg"
import h from "../../../Homepage_Images/vid/h.jpg"
import WatchCard from "./catchcard"
import "./watch.css"
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

export default function Watch(){
    return (
        <div className="watch_crousel">
        {vid_data && vid_data.map(el=>(<WatchCard watch_image={el.image} watchText={el.dis} />))}
        </div>
        
    )
}