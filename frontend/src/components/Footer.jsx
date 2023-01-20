import {
  Box,
  Container,
  Link,
  SimpleGrid,
  Stack,
  Text,
  Flex,
  Tag,
  useColorModeValue,
} from '@chakra-ui/react';
import { ReactNode } from 'react';



const ListHeader = ({ children }) => {
  return (
    <Text fontWeight={'500'} fontSize={'2xl'} mb={2}>
      {children}
    </Text>
  );
};

const  Footer=() =>{
  return (
    <Box
      bg={''}
      color={'rgb(78,102,204)'}>
      <Container as={Stack} maxW={'6xl'} py={10}>
        <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={8} >
          <Stack align={'flex-start'} >
            <ListHeader    >Who We Are</ListHeader>
            <Link fontSize='20px' href={'#'}>About Adorama</Link>
            <Link fontSize='20px' href={'#'}>Our History</Link>
            <Link fontSize='20px' href={'#'}>Creator Highlights</Link>
            <Link fontSize='20px' href={'#'}>Adorama Reviews</Link>
            <Link fontSize='20px' href={'#'}>Map & Directions</Link>
            <Link fontSize='20px' href={'#'}>Events</Link>
            <Link fontSize='20px' href={'#'}>Learning Center</Link>
            <Link fontSize='20px' href={'#'}>Gift Cards</Link>
            <Link fontSize='20px' href={'#'}>Brands</Link>

          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader  >Special Programs</ListHeader>
            <Link fontSize='20px' href={'#'}>Corporate</Link>
            <Link fontSize='20px' href={'#'}>Education</Link>
            <Link fontSize='20px' href={'#'}>Government</Link>
            <Link fontSize='20px' href={'#'}>VIP Rewards</Link>
            <Link fontSize='20px' href={'#'}>Students</Link>
            <Link fontSize='20px' href={'#'}>Adorama Protect</Link>

          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader  >How Can We Help</ListHeader>
            <Link fontSize='20px' href={'#'}>Customer Service</Link>
            <Link fontSize='20px' href={'#'}>Track Your Order</Link>
            <Link fontSize='20px' href={'#'}>Shipping & Delivery</Link>
            <Link fontSize='20px' href={'#'}>In-Store Pickup</Link>
            <Link fontSize='20px' href={'#'}>International Orders</Link>
            <Link fontSize='20px' href={'#'}>Return Policy</Link>
            <Link fontSize='20px' href={'#'}>Contact Us</Link>
            <Link fontSize='20px' href={'#'}>Warranties</Link>
            <Link fontSize='20px' href={'#'}>Accessibility Policy</Link>

          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader  >More Services</ListHeader>
            <Link fontSize='20px' href={'#'}>Photo Printing</Link>
            <Link fontSize='20px' href={'#'}>Camera Rentals</Link>
            <Link fontSize='20px' href={'#'}>Sell Used Equipment</Link>
            <Link fontSize='20px' href={'#'}>Authorized Apple Service</Link>
          </Stack>
        </SimpleGrid>
      </Container>
      
    </Box>
  );
}
export default Footer