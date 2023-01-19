import { Heading, Text } from "@chakra-ui/react"
import audio from "../../../Homepage_Images/cat/icon-category-audio.png"
import cameras from "../../../Homepage_Images/cat/icon-category-cameras.png"
import computers from "../../../Homepage_Images/cat/icon-category-computers.png"
import drones from "../../../Homepage_Images/cat/icon-category-drones.png"
import gaming from "../../../Homepage_Images/cat/icon-category-gaming.png"
import headphones from "../../../Homepage_Images/cat/icon-category-headphones.png"
import homeoffice from "../../../Homepage_Images/cat/icon-category-homeoffice.png"
import lenses from "../../../Homepage_Images/cat/icon-category-lenses.png"
import lighting from "../../../Homepage_Images/cat/icon-category-lighting.png"
import mics from "../../../Homepage_Images/cat/icon-category-mics.png"
import music from "../../../Homepage_Images/cat/icon-category-music.png"
import optics from "../../../Homepage_Images/cat/icon-category-optics.png"
import security from "../../../Homepage_Images/cat/icon-category-security.png"
import smarthome from "../../../Homepage_Images/cat/icon-category-smarthome.png"
import wearables from "../../../Homepage_Images/cat/icon-category-wearables.png"
import Cat_carousel from "./cat_crousel"
let cat_data=[audio,cameras,computers,drones,gaming,headphones,homeoffice,lenses,lighting,mics,music,optics,security,smarthome,wearables]
let cat_name=["audio","cameras","computers","drones","gaming","headphones","homeoffice","lenses","lighting","mics","music","optics","security","smarthome","wearables"]
export default function Category(){
    return(
        <>
   <Text fontSize='3xl' Style={"text-align:Start;padding-left:2rem"}>SHOP BY CATEGORY</Text>
        <Cat_carousel category_data={cat_data} category_name={cat_name}/>
        </>

    )
}