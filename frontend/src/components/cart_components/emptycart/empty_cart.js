import { Button } from '@chakra-ui/react'
import "./empty.css"
export default function Empty_Cart(){
    return (
        <div className='Emptycart_box'>
              <Button className="con_shopping" colorScheme='messenger' size='lg'>Continue Shopping</Button>
        </div>
    )
}