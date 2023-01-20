import {
  Heading,
  HStack,
  Text,
  Box,
  Divider,
  Img,
  Button,
 
  Flex,
  Stack,
} from "@chakra-ui/react";
import React from "react";
import { useState } from "react";

const Payment = () => {
  const [count,setCount] = useState(0)
 
  return (
    <>
      <Box m={"auto"} w={"85%"} mt={"1em"}>
        <HStack spacing={"111vh"}>
          <Heading fontSize={"25px"}>Shopping Cart</Heading>
          <Box display={"flex"} flexDirection={"row"} gap={"1em"}>
            <Text>Email My Cart</Text>
            <Text>Need Help?Call 800-811-4002</Text>
          </Box>
        </HStack>
      </Box>
      <Divider
        opacity={"revert-layer"}
        w={"84%"}
        fontWeight={"bold"}
        m={"auto"}
      />
      <Box w={"30%"} mt={"2em"} mb={"1.2em"}>
        <Heading fontSize={"30px"} fontWeight={"lighter"}>
          Ship-Expedited
        </Heading>
      </Box>
      <Box
        w={"85%"}
        display={"flex"}
        flexDirection={"row"}
        gap={"25px"}
        justifyContent={"space-around"}
        m={"auto"}
      >
        <Box
          boxShadow={"dark-lg"}
          borderRadius={"20px"}
          padding={"1em"}
          display={"flex"}
          flexDirection={"row"}
          alignItems={"flex-start"}
          gap={"20px"}
          m={"auto"}
          justifyContent={"space-around"}
          h={"28em"}
          w={"65%"}
        >
          <Box w={"20%"} borderRadius={"10px"} h={"25em"}>
            <Img
              height={"8em"}
              w={"8em"}
              pt={"0.5em"}
              src="https://www.adorama.com/images/300x300/fpbs10.jpg"
              alt="image"
            />
          </Box>
          <Box w={"80%"} h={"23em"} mt={"1.5em"}>
            <Box w={"100%"} height={"11em"} m={"auto"}>
              <Box pt={"1.5em"}>
                <Flex
                  alignItems={"flex-start"}
                  justifyContent={"space-between"}
                  m={"auto"}
                >
                  <Text
                    color={"blue"}
                    fontWeight={"semibold"}
                    fontSize={"20px"}
                  >
                    FlashPoint 10 Background Suppourt System-Air
                  </Text>
                  <Box w={"10%"}  >
                    <Flex  alignItems={"flex-start"} justifyContent={"space-around"} flexDirection={"row"} gap={"8px"} m={"auto"}>

                  <Button onClick={()=>setCount(count+1)}>+</Button>
                  <Button>{count}</Button>
                  <Button disabled={count===0}  onClick={( )=>setCount(count-1)}>-</Button>
                    </Flex>

                  </Box>
                  <Text fontWeight={"bold"} fontSize={"18px"}>
                    $890.00
                  </Text>
                </Flex>
              </Box>

              <Box w={"12%"}>InStock</Box>
              <Box w={"62%"} mt={"1.5em"}>
                <Flex
                  alignItems={"flex-start"}
                  justifyContent={"space-evenly"}
                  gap={"10px"}
                  m={"auto"}
                >
                  <Text cursor={"pointer"} color={"blue"}>
                    Save For Later
                  </Text>
                  <Stack direction="row" h="30px">
                    <Divider orientation="vertical" />
                    <Text cursor={"pointer"} color={"blue"}>
                      Accessories
                    </Text>
                  </Stack>

                  <Stack direction="row" h="30px">
                    <Divider orientation="vertical" />
                    <Text cursor={"pointer"} color={"blue"}>
                      Move to Whishlist
                    </Text>
                  </Stack>
                </Flex>
              </Box>
            </Box>
            <Box
              border={"1px solid gray"}
              pr={"1em"}
              pt={"1em"}
              w={"100%"}
              h={"5em"}
            >
              <Box>
                <Flex
                  width={"40em"}
                  gap={"2em"}
                  alignItems={"flex-start"}
                  justifyContent={"space-evenly"}
                  m={"auto"}
                >
                  <Img
                    h={"2em"}
                    w={"3.5em"}
                    m={"auto"}
                    src="https://www.adorama.com/col/_ado-protect-extend/ado-protect-extend-logo.svg"
                    alt="vip"
                  />
                  <Text width={"22em"} textAlign={"justify"}>
                    Free 2-Day Shipping, 1 Year Drops & Spills and more!
                  </Text>
                  <Text fontWeight={"bold"}>$49.90</Text>
                  <Button color={"white"} bg={"blue"}>
                    ADD
                  </Button>
                </Flex>
              </Box>
            </Box>
            <Box
              mt={"2em"}
              border={"1px solid grey"}
              pr={"1em"}
              pl={"0.5"}
              w={"100%"}
              pt={"1em"}
              h={"5em"}
            >
              <Box>
                <Flex
                  width={"40em"}
                  gap={"2em"}
                  alignItems={"flex-start"}
                  justifyContent={"space-evenly"}
                  m={"auto"}
                >
                  <Img
                    h={"1em"}
                    w={"3.5em"}
                    m={"auto"}
                    src="https://adorama.com/col/UIimages/VIp360/VIPPRO-Logo.png"
                    alt="vip"
                  />
                  <Text textAlign={"justify"}>
                    Free 2-Day Shipping, 1 Year Drops & Spills and more!
                  </Text>
                  <Text fontWeight={"bold"}>$49.90</Text>
                  <Button color={"white"} bg={"orange"}>
                    ADD
                  </Button>
                </Flex>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box boxShadow={"dark-lg"} borderRadius={"20px"} h={"30em"} w={"30%"}>
          <Box
            display={"flex"}
            pt={"2em"}
            flexDirection={"row"}
            alignItems={"flex-start"}
            justifyContent={"space-around"}
            m={"auto"}
          >
            <Text>Sub-Total </Text>
            <Text>$89.95</Text>
          </Box>
          <Box
            display={"flex"}
            pt={"2em"}
            flexDirection={"row"}
            alignItems={"flex-start"}
            justifyContent={"space-around"}
            m={"auto"}
          >
            <Text>Shipping</Text>
            <Text>FREE</Text>
          </Box>
          <Box
            display={"flex"}
            pt={"2em"}
            flexDirection={"row"}
            alignItems={"flex-start"}
            justifyContent={"space-around"}
            m={"auto"}
          >
            <Text>Taxes</Text>
            <Text>$0.00</Text>
          </Box>
          <hr />
          <Box
            display={"flex"}
            pt={"0.7em"}
            flexDirection={"row"}
            alignItems={"flex-start"}
            justifyContent={"space-around"}
            m={"auto"}
            mb={"0.5em"}
          >
            <Text fontSize={"25px"} fontWeight={"bold"}>
              Order Total
            </Text>
            <Text fontSize={"25px"} fontWeight={"bold"}>
              $89.95
            </Text>
          </Box>
          <Button
            fontSize={"25px"}
            mt={"0.5em"}
            height={"2.0em"}
            bg={"orange.600"}
            w={"13em"}
            color={"white"}
            borderRadius={"10px"}
          >
            Proceed To CheckOut
          </Button>
          <Box
            display={"flex"}
            alignItems={"flex-start"}
            justifyContent={"center"}
            m={"auto"}
            gap={"10px"}
            w={"100%"}
            pt={"1.8em"}
          >
            <Img
              borderRadius={"15px"}
              height={"3em"}
              cursor={"pointer"}
              w={"8em"}
              src="https://www.pngitem.com/pimgs/m/152-1521099_paypal-icon-hd-png-download.png"
              alt="paypal"
            />
            <Img
              height={"3em"}
              w={"8em"}
              borderRadius={"15px"}
              cursor={"pointer"}
              src=" https://cdn.worldvectorlogo.com/logos/phonepe-1.svg"
              alt="phonepe"
            />
          </Box>

          <Img
            cursor={"pointer"}
            height={"2.5em"}
            borderRadius={"15px"}
            w={"9em"}
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Google_Pay_Logo_%282020%29.svg/2560px-Google_Pay_Logo_%282020%29.svg.png"
            alt="gpay"
          />
        </Box>
      </Box>
    </>
  );
};

export default Payment;

 