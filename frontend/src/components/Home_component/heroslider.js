
import slider1 from "../../Homepage_Images/slider1.jpg"
import slider2 from "../../Homepage_Images/slider2.jpg"
import slider3 from "../../Homepage_Images/slider3.jpg"
import slider4 from "../../Homepage_Images/slider4.webp"
import Cerosel from "./home_cerosel"
let img_data=[slider1,slider2,slider3,slider4]
export default function Heroslider(){
    return (
        <>
        <Cerosel data={img_data}/>
        </>
    )

    
}