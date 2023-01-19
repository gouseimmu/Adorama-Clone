import {
  Heading,
  HStack,
  Text,
  Box,
  Divider,
  Img,
  Button,
  VStack,
} from "@chakra-ui/react";
import React from "react";

const Payment = () => {
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
          <Box w={"30%"} h={"27em"}>
            <Img
              src="https://www.adorama.com/images/300x300/fpbs10.jpg"
              alt="image"
            />
          </Box>
          <Box w={"80%"} h={"8em"} mt={"1.5em"}>
            <Box
              display={"flex"}
              flexDirection={"row"}
              pt={"3.4em"}
              alignItems={"flex-start"}
              justifyContent={"space-between"}
              m={"auto"}
              w={"100%"}
              h={"8em"}
            >
              <Text fontWeight={"bold"} fontSize={"18px"}>
                FlashPoint 10 Background Suppourt System-Air
              </Text>
              <Button>^</Button>
              <Text fontWeight={"bold"} fontSize={"18px"}>
                $890.00
              </Text>
            </Box>

            <Box
              m={"auto"}
              display={"flex"}
              pt={"1.5"}
              flexDirection={"row"}
              justifyContent={"space-evenly"}
              alignItems={"flex-start"}
              w={"100%"}
              h={"6em"}
            >
              <Img
                h={"3em"}
                w={"3.9em"}
                src="https://adorama.com/col/UIimages/VIp360/VIPPRO-Logo.png"
                alt="vip"
              />
              <Text>Free 2-Day Shipping, 1 Year Drops & Spills and more!</Text>
              <Text fontWeight={"bold"}>$49.90</Text>
              <Button color={"white"} bg={"orange"}>
                ADD
              </Button>
            </Box>
            <Box
              pt={"1.5"}
              display={"flex"}
              flexDirection={"row"}
              justifyContent={"space-evenly"}
              alignItems={"flex-start"}
              m={"auto"}
              w={"100%"}
              h={"6em"}
            >
              <Img
                h={"3em"}
                w={"4.5em"}
                src="https://www.adorama.com/col/_ado-protect-extend/ado-protect-extend-logo.svg"
                alt="vip"
              />
              <Text>Free 2-Day Shipping, 1 Year Drops & Spills and more!</Text>
              <Text fontWeight={"bold"}>$49.90</Text>
              <Button color={"white"} bg={"blue"}>
                ADD
              </Button>
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
            pt={"2em"}
          >
            <Img
            borderRadius={"15px"}
              height={"3em"}
              cursor={"pointer"}
              w={"8em"}
              boxShadow={"lg"}
              src="https://www.pngitem.com/pimgs/m/152-1521099_paypal-icon-hd-png-download.png"
              alt="paypal"
            />
            <Img
              height={"3em"}
              w={"8em"}
              boxShadow={"lg"}
              borderRadius={"15px"}
              cursor={"pointer"}
              src=" https://cdn.worldvectorlogo.com/logos/phonepe-1.svg"
              alt="phonepe"
            />
          </Box>
          <Button w={"70%"} mt={"1.5em"} height={"3em"}>
            <Img   height={"2.5em"}
             boxShadow={"lg"}
             borderRadius={"15px"}
              w={"8em"} src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Google_Pay_Logo_%282020%29.svg/2560px-Google_Pay_Logo_%282020%29.svg.png" alt="gpay"/>
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default Payment;
