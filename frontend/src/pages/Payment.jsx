import {
  Heading,
  Text,
  Box,
  Img,
  Button,
  Flex,
  Input,
  Select,
  Checkbox,
  Radio,
  useToast,
} from "@chakra-ui/react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {   useNavigate } from "react-router-dom";
import { GET_CART } from "../Redux/cart/cart_actions";
import {useEffect} from "react"
import Footer from "../components/Footer";

const Payment = () => {

 
  const toast = useToast();
  const navigate = useNavigate()
  // console.log(cart_store)
  const cart_store=useSelector((store)=>store.cart)

  let sum=0
  cart_store.cart_data && cart_store.cart_data.map(el=>(sum+=(Number(el.quantity)*Number(el.productID.price))))
  const handleClick=()=>{
    toast({
      title: "Order Placed Successfully.",
      description: "Your Order Placed Successfully.",
      status: "success",
      duration: 9000,
      isClosable: true,
    });
    navigate("/")
  }
 
  return (
    <>
      <Box border={"1px solid black"} w={"100%"} height={"6em"} bg={"#004387"}>
        <Heading width={"60%"} pt={"0.5em"} color={"white"}>
          Adorama Secure Checkout
        </Heading>
      </Box>
      <Box w={"100%"} boxShadow={"base"} h={"3em"} m={"auto"}>
        <Flex
        pt={"1em"}
          w={"80%"}
          alignItems={"flex-start"}
          justifyContent={"space-between"}
          m={"auto"}
        >
          <Text>Need Help 800-811-4002 or Live Chat</Text>
          <Text>YOUR CART ID: 146-062-250</Text>
        </Flex>
      </Box>
      <Box h={"2em"} w={"100%"} mt={"1em"}>
        <Flex >
          <Text w={"45%"} fontSize={"20px"} fontWeight={"bold"}>
            Shipping Address
          </Text>
          <Text w={"100%"} fontSize={"20px"} fontWeight={"bold"}>
            Order Summary
          </Text>
        </Flex>
      </Box>
      <Box
      pt={"1em"}
        w={"80%"}
        h={"34em"}
        display={"flex"}
        flexDirection={"row"}
        alignItems={"flex-start"}
        justifyContent={"space-around"}
        gap={"20px"}
        m={"auto"}
      >
        <Box border={"0.5px solid black"} h={"34em"} w={"60%"}>
          <Text w={"30%"} fontWeight={"bold"}>
            Ship to
          </Text>
          <Box h={"2em"} w={"100%"} pt={"1em"}>
            <Flex
              gap={"15px"}
              m={"auto"}
              alignItems={"flex-start"}
              justifyContent={"space-around"}
              w={"80%"}
            >
              <Input required placeholder="First Name" />
              <Input required placeholder="Last Name" />
            </Flex>
          </Box>
          <Box h={"10em"} w={"100%"} pt={"2.5em"} m={"auto"}>
            <Flex
              gap={"15px"}
              flexDirection={"column"}
              m={"auto"}
              alignItems={"flex-start"}
              justifyContent={"space-around"}
              w={"80%"}
            >
              <Input  placeholder="Company name(Optional)" />
              <Input required placeholder="Type Your Address" />
              <Input required placeholder="Apt/Suit/Floor" />
            </Flex>
          </Box>
          <Box h={"2em"} w={"100%"} pt={"2.9em"}>
            <Flex
              gap={"15px"}
              m={"auto"}
              alignItems={"flex-start"}
              justifyContent={"space-around"}
              w={"80%"}
            >
              <Input required placeholder="City" />
              <Select required>
                <option>BIHAR</option>
                <option>AP</option>
                <option>VIJ</option>
                <option>DL</option>
                <option>MH</option>
                <option>KOL</option>
                <option>JK</option>
                <option>KER</option>
              </Select>
              <Input required placeholder="Zip" />
            </Flex>
          </Box>
          <Box w={"50%"} h={"2em"} pt={"3.5em"}>
            <Input required maxLength={10} w={"60%"} placeholder="Phone Number" />
          </Box>
          <Box pt={"3.5em"} w={"58%"}>
            <Checkbox>Save As Default Shipping Address</Checkbox>
          </Box>
        </Box>
        <Box h={"20em"} w={"40%"} bg={"gainsboro"}>
          {/* <Box boxShadow={"lg"} w={"100%"} h={"6em"} m={"auto"}>
            <Flex
              alignItems={"flex-start"}
              justifyContent={"space-around"}
              gap={"15px"}
              m={"auto"}
              p={"1em"}
            >
              <Img
                h={"3.5em"}
                mt={"0.8em"}
                w={"4em"}
                src="https://www.adorama.com/images/300x300/fpbs10.jpg"
                alt="img"
              />
              <Text>10' Background Support System - Cushioned</Text>
              <Text>$89.95</Text>
            </Flex>
          </Box> */}
          <Box>
            <Box
              display={"flex"}
              pt={"2em"}
              flexDirection={"row"}
              alignItems={"flex-start"}
              justifyContent={"space-around"}
              m={"auto"}
            >
              <Text>Sub-Total </Text>
              <Text>{sum}</Text>
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
                {sum}
              </Text>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box mt={"2em"} w={"27%"}>
        <Text fontWeight={"bold"} fontSize={"25px"}>
          Payment
        </Text>
      </Box>
      <Box
        h={"20em"}
        w={"80%"}
        m={"auto"}
        alignItems={"flex-start"}
        display={"flex"}
        flexDirection={"row"}
        justifyContent={"flex-start"}
        mt={"1em"}
      >
        <Box border={"1px solid black"} h={"20em"} w={"60%"}>
          <Text p={"1em"} fontWeight={"light"} fontSize={"20px"} w={"30%"}>
            Rewards and Offers:
          </Text>
          <Box p={"1em"} h={"11em"} w={"80%"} m={"auto"} bg={"gainsboro"}>
            <Box pt={"0.2em"}>
              <Text fontSize={"14px"} textAlign={"justify"}>
                Hi, shaik — It looks like you’re not a VIP Rewards member yet.
                Join for free and earn 25pts! Plus, earn 25pts just for sharing
                your birthdate:
              </Text>
            </Box>
            <Box pt={"0.8em"}>
              <Flex
                alignItems={"flex-start"}
                justifyContent={"space-around"}
                gap={"10px"}
                m={"auto"}
              >
                <Input w={"60%"} placeholder="mm/dd" />
                <Button w={"60%"} color={"white"} bg={"orange.500"}>
                  JOIN NOW
                </Button>
              </Flex>
            </Box>
            <Box pt={"0.5em"}>
              <Text fontSize={"12px"} textAlign={"justify"}>
                By joining VIP Rewards, you agree to the Program Terms and
                acknowledge acceptance of the Privacy Policy.
              </Text>
            </Box>
          </Box>
          <hr />
        </Box>
      </Box>
      <Box mt={"2em"} w={"30%"}>
        <Text fontWeight={"light"} fontSize={"16px"}>
          PAYMENT METHOD :
        </Text>
      </Box>
      <Box
        h={"15em"}
        w={"80%"}
        alignItems={"flex-start"}
        display={"flex"}
        flexDirection={"row"}
        justifyContent={"flex-start"}
        mt={"1em"}
        m={"auto"}
      >
        <Box h={"10em"} w={"60%"}>
          <Flex
            gap={"10px"}
            w={"40%"}
            alignItems={"flex-start"}
            justifyContent={"space-around"}
            pt={"-2em"}
          >
            <Box pt={"2.5em"}>
              <Flex
                flexDirection={"row"}
                alignItems={"flex-start"}
                justifyContent={"space-around"}
                gap={"10px"}
                m={"auto"}
              >
                <Radio></Radio>
                <Img
                  w={"2.5em"}
                  mt={"-0.6em"}
                  h={"2em"}
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMJOwWEzcsTe38LdrZTXPZ-U1ibZoKfm4E9M9mV7erBnUE7LzYj3fSfT9FGkWMpCNi9q4&usqp=CAU"
                />
              </Flex>
            </Box>
            <Box pt={"2.5em"}>
              <Flex
                flexDirection={"row"}
                alignItems={"flex-start"}
                justifyContent={"space-around"}
                gap={"10px"}
                m={"auto"}
              >
                <Radio></Radio>
                <Img
                  w={"2em"}
                  h={"2em"}
                  mt={"-0.6em"}
                  src="https://play-lh.googleusercontent.com/6iyA2zVz5PyyMjK5SIxdUhrb7oh9cYVXJ93q6DZkmx07Er1o90PXYeo6mzL4VC2Gj9s=w240-h480-rw"
                />
              </Flex>
            </Box>
            <Box pt={"2.5em"}>
              <Flex
                flexDirection={"row"}
                alignItems={"flex-start"}
                justifyContent={"space-around"}
                gap={"10px"}
                m={"auto"}
              >
                <Radio></Radio>
                <Img
                  w={"2em"}
                  h={"2em"}
                  mt={"-0.6em"}
                  src="https://play-lh.googleusercontent.com/bDCkDV64ZPT38q44KBEWgicFt2gDHdYPgCHbA3knlieeYpNqbliEqBI90Wr6Tu8YOw"
                />
              </Flex>
            </Box>
          </Flex>
          <Box w={"10%"} pt={"1.5em"}>
            <Text>CARD :</Text>
          </Box>
          <Box h={"8em"} mt={"2em"}>
            <Box>
              <Flex
                flexDirection={"row"}
                alignItems={"flex-start"}
                justifyContent={"space-around"}
                gap={"10px"}
                m={"auto"}
              >
                <Input required maxLength={16} placeholder="CARD NUMBER" />
                <Select required w={"10em"}>
                  <option>MM</option>
                  <option>01</option>
                  <option>02</option>
                  <option>03</option>
                  <option>04</option>
                  <option>05</option>
                  <option>06</option>
                  <option>07</option>
                  <option>08</option>
                  <option>09</option>
                  <option>10</option>
                  <option>11</option>
                  <option>12</option>
                </Select>
                <Select required w={"10em"}>
                  <option>YY</option>
                  <option>2001</option>
                  <option>2002</option>
                  <option>2003</option>
                  <option>2004</option>
                  <option>2005</option>
                  <option>2006</option>
                  <option>2007</option>
                  <option>2008</option>
                  <option>2009</option>
                  <option>2010</option>
                  <option>2011</option>
                  <option>2013</option>
                  <option>2014</option>
                  <option>2015</option>
                  <option>2016</option>
                  <option>2017</option>
                  <option>2018</option>
                </Select>
                <Input required maxLength={3} w={"8em"} placeholder="CVV" />
              </Flex>
              <Box w={"60%"} pt={"1em"}>
                <Checkbox w={"100%"}>Save Card</Checkbox>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>

      <Box h={"25em"} w={"80%"} m={"auto"}>
        <Box h={"15em"} border={"1px solid black"} w={"60%"}>
          <Box
            display={"flex"}
            pt={"2em"}
            flexDirection={"row"}
            alignItems={"flex-start"}
            justifyContent={"space-around"}
            m={"auto"}
          >
            <Text>Sub-Total </Text>
            <Text>{sum}</Text>
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
              {sum}
            </Text>
          </Box>
        </Box>
        <Box h={"3em"} w={"60%"}>
          <Button  onClick={handleClick}
            fontSize={"18px"}
            color={"white"}
            h={"3em"}
            bg={"orange.500"}
            m={"auto"}
            width={"100%"}
          >
            Place Order
          </Button>
        </Box>
        <Box h={"2em"} pt={"1em"} w={"60%"} m={"auto"}>
          <Text w={"50%"}>
            By clicking Place Order you agree to the Adorama Terms and
            Conditions.
          </Text>
        </Box>
      </Box>
<Footer/>

    </>
  );
};

export default Payment;
