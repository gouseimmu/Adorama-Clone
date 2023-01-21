import { Button, Text } from "@chakra-ui/react"
import "./cart_card.css"
import cross from "./cart_card/cross.svg"
export default function Cart_card({item_image,item_discription,item_count,item_cost,hendleDelete_cart_item,hendle_reduce_button,hendle_increase_button}){
    return(
        <div className="cart_card_main" >
<div><img Style={"width: 3%;position: relative;left: 95%;"} src={cross} onClick={hendleDelete_cart_item} /></div>
<div className="cart_card_details" >
        <div className="cart_cart_image" ><img  src={item_image} /></div>
        <div className="cart_cart_dic" ><Text>{item_discription}</Text></div>
        <div className="cart_cart_qty" ><Button color="white" background="#003F7F" disabled={item_count==1} onClick={hendle_reduce_button} >-</Button><span Style={"padding: 7px;"} >{item_count}</span><Button color="white" background="#003F7F" onClick={hendle_increase_button} >+</Button></div>
        <div className="cart_cart_cost" ><Text>{item_cost} &#8377;</Text></div>
        <div className="cart_cart_extras" >
            <Text>Save for later</Text>
            <Text>Accessories</Text>
            <Text>Move To Wishlist</Text>
            </div>
</div>
        </div>
    )
}