import { useDispatch } from "react-redux";
import { Delete_from__CART, PATCH_CART } from "../../../Redux/cart/cart_actions";
import { CART_PATCH } from "../../../Redux/cart/cart_action_type";
import Cart_card from "../cart_card/cart_card";

export default function Cart_list({cart_data}){
    const dispatch=useDispatch()
    function hendleDelete_cart_item_request(id){
        dispatch(Delete_from__CART(id))
    }

    function hendlereduce(id){
        console.log(id)
        dispatch(PATCH_CART({type:"dec",productID:id}))
    }
    function hendleincrease(id){
        console.log(id)
        dispatch(PATCH_CART({type:"inc",productID:id}))
    }

    return (
        <>
        {true && cart_data.map(el=>(<Cart_card hendle_reduce_button={()=>hendlereduce(el._id)} hendle_increase_button={()=>hendleincrease(el._id)}  hendleDelete_cart_item={()=>hendleDelete_cart_item_request(el._id)} item_image={el.productID.image} item_discription={el.productID.title} item_count={el.quantity} item_cost={el.productID.price} />))}
        </>
    )
}