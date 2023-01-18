import { Text } from "@chakra-ui/react"
import add2 from "../../Homepage_Images/add2.webp"
import add3 from "../../Homepage_Images/add3.webp"
import "./addvertise.css"
export default function Aadver_card({addVer_img}){
    return (
        <div className="Advertise_box">
           <div>
            <img src={add2}/>
            <Text fontSize='3xl'>Ride into New Year in Style !</Text>
            <Text>X10 Electric Scooter with Dual-drive motors - </Text>
            <Text>Shop Now</Text>
           </div>

           <div>
            <img src={add3}/>
            <Text fontSize='3xl'>Bundle. Upgrade. Reward.</Text>
            <Text>Save up to $2300 on SL Camera & Prime Lenses with the Leica SL Customer Appreciation Program. Now through February 7th, 2023.</Text>
            <Text>Shop Now</Text>
           </div>
        </div>
    )
}
