import { background, Checkbox, Text } from "@chakra-ui/react";
import { useEffect } from "react";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";

export default function Sidebar(){
    const [getserchparams,setsearchParams]=useSearchParams()
    const product_category=getserchparams.getAll("category")
    const [cat_querry,set_cat_querry]=useState(product_category)
    function hendleChange(e){
        let {value,checked}=e.target
        if(checked==true){
            set_cat_querry([...cat_querry,value])
        }
        else if(checked==false){
            let cat_new=cat_querry.filter((e)=>e!=value)
            set_cat_querry(cat_new)
        }

    }
useEffect(()=>{
let q={category:([...cat_querry])}
setsearchParams(q)
},[cat_querry])
    console.log(cat_querry)
    return (
        <div >
        <Text fontSize="2xl">Catogary</Text>
        <div Style={"display:flex;flex-direction:column;align-items:start"}>
            
            <div>
            <Checkbox isChecked={(cat_querry.includes("COMPUTER"))?true:false} value="COMPUTER" onChange={(e)=>hendleChange(e)} >COMPUTER</Checkbox>

            </div>
            <div>
            <Checkbox  isChecked={(cat_querry.includes("AUDIO"))?true:false} value="AUDIO" onChange={(e)=>hendleChange(e)}  >AUDIO</Checkbox>

            </div>
            <div>
            <Checkbox isChecked={(cat_querry.includes("VIDEO"))?true:false}  value="VIDEO" onChange={(e)=>hendleChange(e)}  >VIDEO</Checkbox>

            </div>
            <div>
            <Checkbox isChecked={(cat_querry.includes("PHOTOGRAPHY"))?true:false} value="PHOTOGRAPHY" onChange={(e)=>hendleChange(e)}  >PHOTOGRAPHY</Checkbox> 

            </div>
            <div>
            <Checkbox isChecked={(cat_querry.includes("HOME_ELECTRONICS"))?true:false}  value="HOME_ELECTRONICS" onChange={(e)=>hendleChange(e)}  >HOME ELECTRONICS</Checkbox>

            </div>
            <div>
            <Checkbox isChecked={(cat_querry.includes("MUSICAL_INSTRUMENTS"))?true:false}  value="MUSICAL_INSTRUMENTS" onChange={(e)=>hendleChange(e)}  >MUSICAL INSTRUMENTS</Checkbox>

            </div>
        </div>
        <hr/>
        <br/>
        <br/>
        <div Style={"display:flex;flex-direction:column;align-items:start"} >
    
        <div>
            <Checkbox isChecked={(cat_querry.includes("HOME_ELECTRONICS"))?true:false}  value="HOME_ELECTRONICS" onChange={(e)=>hendleChange(e)}  >Price:low to high</Checkbox>

            </div>
            <div>
            <Checkbox isChecked={(cat_querry.includes("MUSICAL_INSTRUMENTS"))?true:false}  value="MUSICAL_INSTRUMENTS" onChange={(e)=>hendleChange(e)}  >Price:high to low</Checkbox>

            </div>
        </div>
        </div>
    )
}