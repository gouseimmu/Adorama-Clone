import { Button } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import "./empty.css"
export default function Empty_Cart(){
    return (
        <div className='Emptycart_box'>
              <Link to="/products"> <Button className="con_shopping" colorScheme='messenger' size='lg'>Continue Shopping</Button></Link>
        </div>
    )
}