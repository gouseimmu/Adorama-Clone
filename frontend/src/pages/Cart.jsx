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
import {useDispatch,useSelector} from "react-redux"
import { useEffect } from 'react'
import { GET_CART } from '../Redux/cart/cart_actions'

export default function Cart(){
  const dispatch=useDispatch()
  const cart_store=useSelector((store)=>store.cart)
  console.log(cart_store)
  useEffect(()=>{
    dispatch(GET_CART())
  },[])
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
      <div className='cart_item_head'>{cart_store.cart_data[0] != undefined?(<Text fontSize="3xl" >Ship({cart_store.cart_data.length}-Item)</Text>):(<Text fontSize="3xl" >Shopping cart is Empty</Text>)} </div>
      <div className='cart_items_box'>{cart_store.cart_data[0] != undefined?(<Cart_list cart_data={cart_store.cart_data}/>):(<Empty_Cart/>)}</div>
      <div className='cart_summery_head'>{cart_store.cart_data[0] != undefined?(<Text fontSize="3xl" >Order Summery</Text>):(<Text fontSize="3xl" ></Text>)}</div>
      <div className='cart_summery_box'>{cart_store.cart_data[0] != undefined?(<> <Cart_summery cart_subtotal={cart_store.cart_subtotal} /><Gc/></>):(<Gc/>)}</div>
    </div>
    </div>
  )
}

