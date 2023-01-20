//

import { Button, Text } from '@chakra-ui/react'
import call from "../components/cart_components/cart_icons/call.svg"
import m from "../components/cart_components/cart_icons/m.svg"

import React from 'react'
import Empty_Cart from '../components/cart_components/emptycart/empty_cart'

import "./cart.css"
import { useState } from 'react'
import Gc from '../components/cart_components/g_c/G&C'
import Cart_summery from '../components/cart_components/cart_summery/cart_summery'
import Cart_card from '../components/cart_components/cart_card/cart_card'
import Cart_list from '../components/cart_components/cart_item_list/cart_list'
const cart_data=[
  {
    "_id": "63c69ab6e36ebdecf18a7efb",
    "id": 1,
    "title": "Canon EOS R7 Mirrorless Camera with 18-45mm Lens w/Content Creator Kit, Acc Kit",
    "image": "https://www.adorama.com/images/Large/car7ckak.jpg",
    "category": "PHOTOGRAPHY",
    "price": 2099,
    "brand": "Canon",
    "available": true,
    "review": [],
    "description": [
      "Newly developed High Image Quality 32.5 megapixels APS-C sized CMOS sensor",
      "DIGIC X Image Processor with a native ISO range of 100-32000, expandable to 51200",
      
     
    ]
  },
  {
    "_id": "63c69c60e36ebdecf18a7efd",
    "id": 2,
    "title": "Panasonic LUMIX DC-ZS80D Digital Camera, Black",
    "image": "https://www.adorama.com/images/Large/ipczs80b.jpg",
    "category": "PHOTOGRAPHY",
    "price": 379.97,
    "brand": "Panasonic",
    "available": true,
    "review": [],
    "description": [
      "1/2.3-inch 20.3MP MOS high-resolution sensor provides improved low- light performance",
      "24mm ultra-wide angle 30x telephoto LEICA DC VARIO-ELMAR lens 35mm camera equivalent: 24-720mm",
      
    ]
  },
  {
    "_id": "63c69df6e36ebdecf18a7eff",
    "id": 3,
    "title": "New Arrival - Sony ZV-1F Vlogging Camera, Blackwith PC Software & Accessories",
    "image": "https://www.adorama.com/images/Large/isozv1fbpc.jpg",
    "category": "PHOTOGRAPHY",
    "price": 169.97,
    "brand": "Sony",
    "available": true,
    "review": [],
    "description": [
      "1/2.3-inch 20.3MP MOS high-resolution sensor provides improved low- light performance",
      "24mm ultra-wide angle 30x telephoto LEICA DC VARIO-ELMAR lens 35mm camera equivalent: 24-720mm"
     
    ]
  },
]
export default function Cart(){
  const [cart_empty,setempty]=useState(false)
  return (
    <div className='cart_main'>
      <div className='cart_top'>
        <Text fontSize="4xl" >Shopping Cart</Text>
        <div className='cart_contact'>
          <div className='mail_cart' ><img src={m}/>
          <Text>Mail my Cart</Text>
          </div>
          <div className='call_cart'>
            <img src={call} />
            <Text>Need Help? Call 800-811-4002</Text>
          </div>
        </div>
      </div>
      <div Style={"border-bottom:1px solid black"} ></div>
      <br/>
      <br/>
    
    <div className=  'cart_conten_main' >
      <div className='cart_item_head'>{cart_data?(<Text fontSize="3xl" >Ship(2-Item)</Text>):(<Text fontSize="3xl" >Shopping cart is Empty</Text>)} </div>
      <div className='cart_items_box'>{cart_data?(<Cart_list cart_data={cart_data}/>):(<Empty_Cart/>)}</div>
      <div className='cart_summery_head'>{cart_data?(<Text fontSize="3xl" >Order Summery</Text>):(<Text fontSize="3xl" ></Text>)}</div>
      <div className='cart_summery_box'>{cart_data?(<> <Cart_summery cart_subtotal={400} /><Gc/></>):(<Gc/>)}</div>
    </div>
    </div>
  )
}

