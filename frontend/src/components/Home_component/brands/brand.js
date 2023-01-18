import Brand_cerosel from "./brand_ceros";
import "./brand.css"
import Blackmagic_brand_logo from "../../../Homepage_Images/brand/Blackmagic_brand_logo.png"
import DJI_logo2 from "../../../Homepage_Images/brand/DJI_logo2.gif"
import Flashpoint_logo_blue from "../../../Homepage_Images/brand/Flashpoint_logo_blue.png"
import Fujifilm_brand_logo from "../../../Homepage_Images/brand/Fujifilm_brand_logo.png"
import GoPro_logo from "../../../Homepage_Images/brand/GoPro_logo.gif"
import Microsoft_logo from "../../../Homepage_Images/brand/Microsoft_logo.gif"
import Nikon_logo from "../../../Homepage_Images/brand/Nikon_logo.gif"
import Olympus_brand_logo from "../../../Homepage_Images/brand/Olympus_brand_logo.png"
import Panasonic_brand_logo from "../../../Homepage_Images/brand/Panasonic_brand_logo.png"
import Profoto_logo from "../../../Homepage_Images/brand/Profoto_logo.gif"
import Sigma_logo from "../../../Homepage_Images/brand/Sigma_logo.gif"
import Sony_brand_logo from "../../../Homepage_Images/brand/Sony_brand_logo.png"
let brand_array=[Blackmagic_brand_logo,DJI_logo2,Flashpoint_logo_blue,Fujifilm_brand_logo,GoPro_logo,Microsoft_logo,Nikon_logo,Olympus_brand_logo,Panasonic_brand_logo,Profoto_logo,Sigma_logo,Sony_brand_logo]
export default function Brands(){
    return (
        <Brand_cerosel brand_data={brand_array}/>
    )
}