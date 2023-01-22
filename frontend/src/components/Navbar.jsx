import React from 'react'
import {Box, Image} from "@chakra-ui/react"
import { Link } from 'react-router-dom'
import { Search } from './searchNavbar'
import { MdOutlinePersonOutline } from "react-icons/md";
import { SigninPopover } from './signinPopover';
import ProductButton from './product_button';
import BrandButton from './brand_button';
import DealButton from './Deal_button';
import { HamburgerForMobileNavbar } from './hamburgerforMobileNavbar';

const Navbar = () => {
  return (
    <>
    <Box position={['fixed']} zIndex={['27']}  width={['100%']} height={['130px']} bg={['rgb(0,63,127)']}>
      <Box borderBottom={['0.5px solid grey']} w={['100%']} h={['65%']} display={['none','none','flex',"flex"]}>
        <Box   h={['100%']} width={["","20%","20%",'50%']} >
          
          <Image  src='https://i.postimg.cc/dVX2qNL0/Whats-App-Image-2023-01-17-at-9-03-55-PM.jpg' ml={["","","",'10px']}  mt={['0px']} height={['100%']} w={["","","50%",'40%']} alt='logo'/>
          
        </Box>
        <Box    h={['100%']} width={["","80%","80%",'50%']} display={['flex']}  alignItems={['center']} justifyContent={['space-between']}>
          {/* <Search/> */}
          
            
          <ProductButton/>
          <BrandButton/>
          <DealButton/>
          
          <SigninPopover />
          <Box  w={['7%']} h={['50%']}> 
          <Link to='/cart'>
              <Image src='https://i.postimg.cc/BnwcxWds/baseline-shopping-cart-white-24dp.png'm={'0px'} h={['fit-content']}w={['fit-content']}/>
          </Link>
          </Box>
        </Box>
      </Box>
    <HamburgerForMobileNavbar/>
      <Box w={['100%']} h={['30%']} display={['flex']} alignItems={['center']}>
      <Search/>
      </Box>
    </Box>
    </>
    )
}

export default Navbar