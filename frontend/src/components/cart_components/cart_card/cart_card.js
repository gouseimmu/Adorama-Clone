import { Button, Text } from "@chakra-ui/react"
import "./cart_card.css"
import cross from "./cart_card/cross.svg"
export default function Cart_card({item_image,item_discription,item_count,item_cost}){
    return(
        <div className="cart_card_main" >
<div><img Style={"width: 3%;position: relative;left: 46.7%;"} src={cross}/></div>
<div className="cart_card_details" >
        <div className="cart_cart_image" ><img  src={item_image} /></div>
        <div className="cart_cart_dic" ><Text>{item_discription}</Text></div>
        <div className="cart_cart_qty" ><Button>-</Button><span>{item_count}</span><Button>+</Button></div>
        <div className="cart_cart_cost" ><Text>{item_cost}</Text></div>
        <div className="cart_cart_extras" >
            <Text>Save for later</Text>
            <Text>Accessories</Text>
            <Text>Move To Wishlist</Text>
            </div>
</div>
        </div>
    )
}