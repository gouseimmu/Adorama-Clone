import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  PopoverAnchor,
  Box,
  Image,
  Text,
  Button,
} from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
export const SigninPopover = () => {
    const navigate=useNavigate()
    const isAuth=JSON.parse(localStorage.getItem("details"))||[]
    if(isAuth[1]!==undefined){

        var name=isAuth[1].name
        console.log(name)
    }
    const handleClick=()=>{
        localStorage.clear("details")
        navigate("/")
        name="SignIn"
    }
  return (
    
    <Popover>
      <PopoverTrigger >
        <Box  w={['20%']} h={['50%']} display={['flex']} justifyContent={['center']} alignItems={['center']} cursor={'pointer'}> 
           
            <Box h={['100%']}  width={['30%']} display={'flex'} justifyContent={['center']} alignItems={['center']}>
                <Image m={'0px'} h={['fit-content']}w={['fit-content']} src='https://i.postimg.cc/zvNj2Czk/baseline-perm-identity-white-24dp.png'/>
            </Box>
            <Box display={'flex'} justifyContent={['center']} alignItems={['center']}>
                <Text color={'white'} textAlign={'center'}>{name?name:"SignIn"}</Text>
            </Box>

        </Box>
      </PopoverTrigger>
      <PopoverContent width={['230px']}>
        <PopoverArrow />
        <PopoverCloseButton />
        <Box>
            <Box _hover={{bg:"skyblue",borderRadius:"5px"}} height={['30px']} w={['80%']} ml={['10%']} mt={['15px']} display={['flex']}>
                <Box w={['30%']}>
                    <Image m={'0px'} h={['fit-content']}w={['fit-content']} src="https://i.postimg.cc/j2tkqtRH/baseline-perm-identity-black-18dp.png" />
                </Box>
                <Box textAlign={['start']}  width={['70%']}>
                    <Text >My Account</Text>
                </Box>
            </Box>
            <Box _hover={{bg:"skyblue",borderRadius:"5px"}} height={['30px']} w={['80%']} ml={['10%']} mt={['15px']} display={['flex']}>
                <Box w={['30%']}>
                    <Image m={'0px'} h={['fit-content']}w={['fit-content']} src="https://i.postimg.cc/DzJ7Kdzr/outline-shopping-bag-black-18dp.png" />
                </Box>
                <Box textAlign={['start']}  width={['70%']}>
                    <Text >My Order</Text>
                </Box>
            </Box>
            <Box _hover={{bg:"skyblue",borderRadius:"5px"}} height={['30px']} w={['80%']} ml={['10%']} mt={['15px']} display={['flex']}>
                <Box w={['30%']}>
                    <Image m={'0px'} h={['fit-content']}w={['fit-content']} src="https://i.postimg.cc/Fs8PBj25/outline-favorite-border-black-18dp.png" />
                </Box>
                <Box textAlign={['start']}  width={['70%']}>
                    <Text >Wishlist</Text>
                </Box>
            </Box>
            <Box _hover={{bg:"skyblue",borderRadius:"5px"}} height={['30px']} w={['80%']} ml={['10%']} mt={['15px']} display={['flex']}>
                <Box w={['30%']}>
                    <Image m={'0px'} h={['fit-content']}w={['fit-content']} src="https://i.postimg.cc/dtfyR6gd/outline-location-on-black-18dp.png" />
                </Box>
                <Box textAlign={['start']}  width={['70%']}>
                    <Text >Address Book</Text>
                </Box>
            </Box>
            <Link to='/login'>
            <Button onClick={handleClick} _hover={{bg:"skyblue"}} bg={['skyblue']} mt={['15px']} mb={['15px']} pt={['10px']} pb={['10px']} pl={['70px']} pr={['70px']} >
                {name ? "Logout" :"Login"}
            </Button>
            </Link>
            <Link to="/signup"><Text color={'blue'} mb={['15px']}>Create New Account</Text></Link>
            <Link to="/admin"><Text color={'blue'} mb={['15px']}>For Admin Only</Text></Link>

        </Box>
        
      </PopoverContent>
    </Popover>
  );
};
