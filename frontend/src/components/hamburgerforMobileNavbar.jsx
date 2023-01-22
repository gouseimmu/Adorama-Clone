import { ReactNode, useState } from "react";
import {
  Box,
  Flex,
  Avatar,
  HStack,
  Link,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  Image,
  background,
  Text,
  RadioGroup,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  Radio,
  DrawerFooter,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import ProductButton from "./product_button";
import BrandButton from "./brand_button";
import DealButton from "./Deal_button";
import { SigninPopover } from "./signinPopover";

export const HamburgerForMobileNavbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Box borderBottom={['0.5px solid grey']} w={['100%']} h={['65%']} display={['flex','flex','none',"none"]} justifyContent={['space-between']} alignItems={['center']}>
      <Box  h={['100%']} width={["30%","30%","20%",'50%']} >
          
          <Image   src='https://i.postimg.cc/dVX2qNL0/Whats-App-Image-2023-01-17-at-9-03-55-PM.jpg' ml={["","","",'10px']}  mt={['0px']} height={['100%']} w={["","","50%",'40%']} alt='logo'/>
          
        </Box>
        <SigninPopover/>
          <Box   w={['7%']} h={['50%']} display={'flex'} alignItems="center">
            <Link to="/cart">
              <Image src='https://i.postimg.cc/BnwcxWds/baseline-shopping-cart-white-24dp.png'm={'0px'} h={['fit-content']}w={['fit-content']}/>
            </Link> 
          </Box>
        <Box>
          <Button
            onClick={onOpen}
            // display={{ sm: "block", md: "block", lg: "none", xl: "none" }}
          >
            <HamburgerIcon size="100px" />
          </Button>
        </Box>
        <Box color={'rgb(0,63,127)'}>
          <Drawer  placement={"top"} onClose={onClose} isOpen={isOpen}>
            <DrawerFooter />
            <DrawerContent w={"100%"} mt={"80px"} bg={'rgb(0,63,127)'}>
              <DrawerBody
                w={{ sm: "94%", md: "84%" }}
                ml={{ sm: "3%", md: "8%" }}
              >
                <Box pt={'20px'}>
                <ProductButton />
                </Box>
                <Box pt={'20px'}>
                <BrandButton />
                </Box>
                <Box pt={'20px'}>
                <DealButton />
                </Box>

                
              </DrawerBody>
            </DrawerContent>
          </Drawer>
        </Box>
        
      </Box>
    </>
  );
};
