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
import { Link } from "react-router-dom";
export const SigninPopover = () => {
  return (
    <Popover>
      <PopoverTrigger >
        <Box border={"1px solid white"} w={['20%']} h={['50%']} display={['flex']} cursor={'pointer'}> 
           
            <Box h={['100%']} border={"1px solid red"} width={['30%']}>
                <Image m={'0px'} h={['fit-content']}w={['fit-content']} src='https://i.postimg.cc/zvNj2Czk/baseline-perm-identity-white-24dp.png'/>
            </Box>
            <Box display={'flex'} justifyContent={['center']} alignItems={['center']}>
                <Text color={'white'} textAlign={'center'}>SignIn</Text>
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
            <Button _hover={{bg:"skyblue"}} bg={['skyblue']} mt={['15px']} mb={['15px']} pt={['10px']} pb={['10px']} pl={['70px']} pr={['70px']} >LogIn</Button>
            <Link><Text color={'blue'} mb={['15px']}>Create New Account</Text></Link>
        </Box>
        
      </PopoverContent>
    </Popover>
  );
};
