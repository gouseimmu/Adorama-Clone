import React from 'react'
import Aadver_card from '../components/Home_component/addvertise_card'
import Brands from '../components/Home_component/brands/brand'
import Category from '../components/Home_component/Category_cero/category'
import Heroslider from '../components/Home_component/heroslider'
import More_add from '../components/Home_component/more_cat/more_cat'
import Top_deal from '../components/Home_component/top_deles/top_deles'
import add1 from "../Homepage_Images/add1.webp"



const Homepage = () => {
  return (
    <div Style={"background:#F3F3F3"}>
      <Heroslider/>
      <br/>
      <br/>
      <div  className='top_deals'>
        <Top_deal/>
      </div>
      <br/>
      <br/>

      <div>
        <Category/>
      </div>
      <div>
        <img src={add1} />
      </div>
      <br/>
      <br/>

      <div>
        <Aadver_card/>
      </div>
      <More_add/>
      <div>
        <Brands/>
      </div>
    </div>
  )
}

export default Homepage