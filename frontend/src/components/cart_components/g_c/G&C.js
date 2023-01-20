import { Text } from "@chakra-ui/react";
import a from "./gc_images/a.svg"
import b from "./gc_images/b.gif"
import c from "./gc_images/c.gif"
import "./g&c.css"
export default function Gc(){
    return (
        <div>
            <div className="cirtificates_awards">
                <img  className="a_images"  src={a} />
                <img  className="b_images"  src={b} />
                <img  className="c_images" src={c} />
            </div>
            <br/>
            <hr/>

            <div className="secutity">
                <Text fontSize="2xl">We're Here For You</Text>
                <Text>We want to remove the stress of buying online.</Text>
                <Text><a href="#">Common qutions about shipping</a></Text>
                <Text><a>View your return policy</a></Text>
            </div>
            <br/>
            <hr/>

            <div className="guarenty">
                <Text fontSize="2xl" >Security 100% Guaranteed </Text>
                <Text>Your order is safe & secure guarded by state-of-the-art technology.</Text>
            </div>

        </div>
    )
}