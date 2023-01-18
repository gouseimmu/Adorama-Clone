export default function Cat_card({cat_image,cat_name}){
    return(
        <div>
            <div Style={"background:#003774;width:70%;margin: auto;border-radius: 1rem;"}>
                <img src={cat_image} Style={"width:100%;margin:auto;display:block"} />
            </div>
            <p>{cat_name}</p>
        </div>
    )
}