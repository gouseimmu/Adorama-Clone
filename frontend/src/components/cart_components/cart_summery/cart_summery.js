import { Button, Text } from "@chakra-ui/react"
import { useSelector } from "react-redux"
import "./cart_summery.css"

export default function Cart_summery({cart_subtotal}){
  const cart_store=useSelector((store)=>store.cart)
  let sum=0
  cart_store.cart_data && cart_store.cart_data.map(el=>(sum+=(Number(el.quantity)*Number(el.productID.price))))
    return (
        <div className="odder_summery_main" >
            <div className="summer_sub_info">
                <span>subtotal</span>
                <span>{sum}</span>
            </div>
            <div className="summer_sub_info">
                <span>shipping</span>
                <span>45.15</span>
            </div>
            <div className="summer_sub_info">
                <span>Taxes</span>
                <span>0.00</span>
            </div>
            <hr/>
            <br/>
            <div className="final_total" >
                <Text fontSize="2xl" >Oreder Total</Text>
                <Text fontSize="2xl">{sum+45.15}</Text>
            </div>
            <br/>
            <br/>

            <div> <Button Style={"display:block;margin:auto"}  size="lg" colorScheme='orange'>Proceed to Checkout</Button></div>
        </div>
    )
}