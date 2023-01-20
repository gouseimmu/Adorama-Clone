import Cart_card from "../cart_card/cart_card";

export default function Cart_list({cart_data}){
    return (
        <>
        {cart_data && cart_data.map(el=>(<Cart_card item_image={el.image} item_discription={el.title} item_count={el.quantity} item_cost={el.price} />))}
        </>
    )
}