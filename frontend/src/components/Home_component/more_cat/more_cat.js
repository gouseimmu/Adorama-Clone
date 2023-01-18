import "./more_cat.css"
import cat1 from "../../../Homepage_Images/cat1.webp"
import cat2 from "../../../Homepage_Images/cat2.jpg"
import cat3 from "../../../Homepage_Images/cat3.webp"
import cat4 from "../../../Homepage_Images/cat4.webp"
import cat5 from "../../../Homepage_Images/cat5.webp"
import cat6 from "../../../Homepage_Images/cat6.webp"
import { Text } from "@chakra-ui/react"

export default function More_add(){
    return (
        <div className="More_add_main" >
            <div id="cat1" > 
                <Text>Shop Pre-Owned</Text>
                <Text>Save Money On Used, Open Box, and Refurbished Equipment & Electronics.</Text>
                <Text>Shop Now</Text>
            </div>
            <div id="cat2" > 
                <Text>Sell or Trade</Text>
                <Text>Exchange Your Gear For Used Items, Cash or Credit Toward Future Purchases.</Text>
                <Text>Get A Quote</Text>
            </div>
            <div id="cat3" > 
                <Text>Students GearUP</Text>
                <Text>Exclusive student discounts on thousands of products in photography, video, audio, & more.</Text>
                <Text>Register Now</Text>
            </div>
            <div id="cat4" > 
                <Text>Adorama Rentals</Text>
                <Text>Providing the creative community with cameras, lenses, lighting & grip with two convenient locations in NYC.</Text>
                <Text>Get Started</Text>
            </div>
            <div id="cat5" > 
                <Text>Adorama Business</Text>
                <Text>Schedule a consultation, browse financing options & purchase gear for your corporate, educational or government institution.</Text>
                <Text>Enter Now</Text>
            </div>
            <div id="cat6" > 
                <Text>Printique</Text>
                <Text>Discover a world of options for printing and preserving your photographs.</Text>
                <Text>Visit Printique</Text>
            </div>

        </div>
    )
}