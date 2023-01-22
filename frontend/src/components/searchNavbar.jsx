import { Box, Center, Flex, Image, Input, Text } from "@chakra-ui/react"
import { useEffect, useState } from "react";
import axios from "axios"

export const Search=()=>{
    const [text,setText]=useState("")
    const [posi, setposi] = useState("absolute");
    const [result,setresult]=useState([])


    const getData = async (text) => {
      
        await axios.get(`https://joyous-robe-tick.cyclic.app/product/search/${text}`)
        .then((res)=>setresult(res.data))
        
      };
      useEffect(() => {
        if (!text) {
          setresult([]);
        }
        getData(text);
      }, [text]);
    
    //   const handleNavigate = (id) => {
    //     navigate(`/wellness/${id}`);
    //     setresult([]);
    //   };
    return(
        <>
             
          <Input
            onChange={(e) => setText(e.target.value)}
            
            bg="white"
            type="text"
            placeholder={'Search'}
            fontSize={"sm"}
            color={"grey"}
             width={["96%","96%","96%","60%"]}
             ml={["2%","2%","2%",'40%']}
             
            fontWeight={500}
            _placeholder={{
              color: "blackAlpha.300",
              fontWeight: 500,
              letterSpacing: 0.5,
            }}
          />
          <Center>
        <Box
          top={"125"}
          right={'0px'}
          maxH={["200px","200px","200px",'500px']}
          borderBottomRadius={"lg"}
          color={"black"}
          bg={"white"}
          boxShadow={"dark-lg"}
          zIndex={"77"}
          w={["100%","100%","100%","60%"]}
          position={['absolute']}
          overflowY={['scroll']}
          
          
        >
          {result.map((el) => {
            return (
              <Flex
                key={el._id}
                borderBottomRadius={"lg"}
                _hover={{ backgroundColor: "lightgray" }}
                cursor={"pointer"}
                w={"100%"}
                // onClick={() => handleNavigate(el._id)}
                justify={"space-between"}
                align={"center"}
                border={"2px"}
                borderColor={"white"}
                h={["120px","70px","70px","50px"]}
              >
                <Image height={"100%"} src={el.image} />
                <Text>{el.title}</Text>
                <Text>{el.price}</Text>
              </Flex>
            );
          })}
        </Box>
      </Center>
     
        </>
    )
}