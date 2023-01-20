import {
    Box,
    Image
  } from "@chakra-ui/react";
  import { StarIcon } from "@chakra-ui/icons";
export default function Top_deal_card({image,name,price,reviews,rating}){
    return (
        <div>

        <Box maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden' Style={"width:85%;background:white;margin:auto;"}>
        <Image src={image} Style={"display:block;margin:auto;width:60%"}/>
  
        <Box display='flex' alignItems='center' textAlign='center' margin="auto"  width={"60%"}>
            {Array(5)
              .fill('')
              .map((_, i) => (
                <StarIcon
                  key={i}
                  color={i < rating ? '#FEA82D' : 'gray.300'}
                  />
                  ))}
            <Box as='span' ml='2' color='gray.600' fontSize='sm'>
              {reviews} reviews
            </Box>
          </Box>

        <Box p='6' >
          <Box display='flex' alignItems='baseline' >
         
            <Box
              color='gray.500'
              fontWeight='semibold'
              letterSpacing='wide'
              fontSize='xs'
              textTransform='uppercase'
              textAlign='center'
              ml='2'
          
            >
            
            </Box>
          </Box>
  
          <Box
            mt='1'
            fontWeight='semibold'
            as='h4'
            lineHeight='tight'
            noOfLines={1}
            color={"#0066CC"}
          >
            {name}
          </Box>
  
          <Box>
            {price}
  
          </Box>
  
          
        </Box>
      </Box>
                  </div>
    )
       
    
}