import { Text } from '@chakra-ui/react'
import React from 'react'
import Aadver_card from '../components/Home_component/addvertise_card'
import Brands from '../components/Home_component/brands/brand'
import Category from '../components/Home_component/Category_cero/category'
import Heroslider from '../components/Home_component/heroslider'
import More_add from '../components/Home_component/more_cat/more_cat'
import Top_deal from '../components/Home_component/top_deles/top_deles'
import WatchCard from '../components/Home_component/watch_inspire/catchcard'
import Watch from '../components/Home_component/watch_inspire/watch'
import add1 from "../Homepage_Images/add1.webp"



const Homepage = () => {
  return (
    <div Style={"background:#F3F3F3"}>
      <Heroslider/>
      <br/>
      <br/>
      <div  className='top_deals'>
        <Top_deal/>
        
      </div>
      <br/>
      <br/>

      <div>
        <Category/>
      </div>
      <div>
        <img src={add1} />
      </div>
      <br/>
      <br/>

      <div>
        <Aadver_card/>
      </div>
      <More_add/>
      <div>
        <Brands/>
      </div>
      
        <Watch/>
      <div Style={"padding:0.2rem"} >
        <Text fontSize="3xl">Photography Equipment, Video Gear, and Electronics</Text>
        <Text>We are the world's only full-service destination for photo, video and electronics. We're more than a camera store—we offer the best selection and prices on professional photography and video gear, pro-audio, and consumer electronics such as home theaters , desktop computers, laptops, iPads, home office equipment and more. Equip your creativity with the best & newest Mirrorless, Point & Shoot, and DSLR photography equipment from brands like Sony, Canon and Nikon, or shop for the latest in smart tech, gaming, drones, musical instruments and recording studio gear.</Text>
        <Text fontSize="3xl">Exclusive Savings All Year Long</Text>
        <Text>For savings you won't find anywhere else and for weekly trending deals on top products from industry leading brands, browse Deals, Used, Deal Of The Day, only at Adorama.</Text>
      </div>
      
      <br/>
      <br/>

    </div>
  )
}

export default Homepage