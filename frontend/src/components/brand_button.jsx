

import { ReactNode } from "react";
import {
  
  Flex,
  
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
 
  Text,
  useDisclosure,
  Box,
} from "@chakra-ui/react";
import {  ChevronDownIcon } from "@chakra-ui/icons";
import { AiOutlineClockCircle } from "react-icons/ai";
import { BsBarChartLine, BsCalendarCheck } from "react-icons/bs";
import { FcStatistics } from "react-icons/fc";
// import {IoServerOutline } from "react-icons/io";
import {IoServerOutline } from "react-icons/io5";
import { RiMoneyDollarBoxLine } from "react-icons/ri";
import { GiPathDistance } from "react-icons/gi";
export default function BrandButton(){
    const { isOpen, onOpen, onClose } = useDisclosure();
    return(
        <>
         <Menu isOpen={isOpen} >
              <MenuButton
              varient='ghost'
                
                onMouseEnter={onOpen}
                onMouseLeave={onClose}
                fontWeight={500}
                backgroundColor="rgb(0,63,127)"
                _hover={{ color: "white" ,backgroundColor:"rgb(0,63,127)"}}
                border={'none'}
                p={0}
                color= "white"
                fontSize={'20px'}
              >
                Brands
                {<ChevronDownIcon />}
              </MenuButton>
              <MenuList onMouseEnter={onOpen} onMouseLeave={onClose} p={0}>
                <MenuItem
                  _hover={{
                    borderRadius: "7px",
                    color: "white",
                    bg:"blue"
                  }}
                >
                  <Box alignItems={"center"}>
                    
                    <Text ml={6}>Canon</Text>
                  </Box>
                </MenuItem>
                <MenuItem
                  _hover={{
                    borderRadius: "7px",
                    color: "white",
                    bg:"blue"
                  }}
                >
                  <Box alignItems={"center"}>
                    
                    <Text ml={6}>Apple</Text>
                  </Box>
                </MenuItem>
                <MenuItem
                  _hover={{
                    borderRadius: "7px",
                    color: "white",
                    bg:"blue"
                  }}
                >
                  <Box alignItems={"center"}>
                    
                    <Text ml={6}>Sony</Text>
                  </Box>
                </MenuItem>
                <MenuItem
                  _hover={{
                    borderRadius: "7px",
                    color: "white",
                    bg:"blue"
                  }}
                >
                  <Box alignItems={"center"}>
                   
                    <Text ml={6}>Panasonic</Text>
                  </Box>
                </MenuItem>
                <MenuItem
                  _hover={{
                    borderRadius: "7px",
                    color: "white",
                    bg:"blue"
                  }}
                >
                  <Box alignItems={"center"}>
                   
                    <Text ml={6}>ATOMOS</Text>
                  </Box>
                </MenuItem>
                <MenuItem
                  _hover={{
                    borderRadius: "7px",
                    color: "white",
                    bg:"blue"
                  }}
                >
                     <Box alignItems={"center"}>
                    
                    <Text ml={6}>Profoto</Text>
                  </Box>
                  
                </MenuItem>
                <MenuItem
                  _hover={{
                    borderRadius: "7px",
                    color: "white",
                    bg:"blue"
                  }}
                >
                     <Box alignItems={"center"}>
                   
                    <Text ml={6}>Asus</Text>
                  </Box>
                  
                </MenuItem>
               
              </MenuList>
            </Menu>
        </>
    )
}
