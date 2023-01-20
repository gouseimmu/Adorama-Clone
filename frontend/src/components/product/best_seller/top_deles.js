import Top_deal_card from "./top_dele_card";
import i1 from "../../../Homepage_Images/device/B.jpg"
import i2 from "../../../Homepage_Images/device/cam.jpg"
import i3 from "../../../Homepage_Images/device/car.jpg"
import i4 from "../../../Homepage_Images/device/head.jpg"
import i5 from "../../../Homepage_Images/device/piyano.jpg"
import i6 from "../../../Homepage_Images/device/speaker.jpg"
import i7 from "../../../Homepage_Images/device/projector.jpg"
import i8 from "../../../Homepage_Images/device/mediaplayer.jpg"
import Top_deal_cero from "./top_deles_cerosel";
import { Heading } from "@chakra-ui/react";


let deal_data=[
{image:i1,
name:"Fujifilm X-T4 Mirrorless Digital Camera Body, Silver",
rating:"4",
price:1000,
review:35
},    
{image:i2,
name:"Zhiyun Weebill 3 3-Axis Handheld Gimbal Stabilizer",
rating:5,
price:3500,
review:50
},
{image:i3,
name:"GoPro HERO10 Black Action Camera with Holiday Bundle",
rating:3,
price:1500,
review:10
},
{image:i4,
name:"SanDisk Extreme PRO Portable 4TB USB 3.2 Type-C External SSD V2",
rating:5,
price:6210,
review:38
},
{image:i5,
name:"Sony LinkBuds Truly Wireless Earbuds, White",
rating:5,
price:3500,
review:50
},
{image:i6,
name:"Klipsch Reference R-625FA 5.0 Home Theater Pack, Black Textured Wood Grain Vinyl",
rating:3,
price:1500,
review:10
},
{image:i7,
name:"BenQ TK700STi 4K HDR Low Latency DLP Gaming Projector, QS01 Streaming ATV Dongle",
rating:4,
price:1000,
review:35
},
{image:i8,
name:"Yamaha Arius YDP-144 88-Key Console Digital Piano with Bench, Black Walnut",
rating:5,
price:3500,
review:50,

}
]
export default function Top_deal(){
    return (
        <div Style={""}>
            <div>
                <Heading Style={"color: black;padding: 1.9rem 0;font-weight: 300;text-align:left;width:93%;margin:auto"} >Bestsellers</Heading>
            </div>
        <Top_deal_cero  data={deal_data} />
        </div>
          
        
         
    )
}