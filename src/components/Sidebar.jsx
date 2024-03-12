import React from "react";
import { Stack } from "@mui/material";
import "../index.css"
import { categories } from "../utils/constants";


const selectedCategory = "New";


export default function Sidebar({selectedCategory,setSelectedCategory}) 
 {
  return (
    <Stack 
    direction='row'
    sx={{
        overflowY:'auto',
        height:{
            sx:'auto',md :'90%'
        },
        flexDirection:{md:'column'}
    }} >
      {categories.map((category)=>(
        <button className="category-btn"
        onClick={()=> setSelectedCategory(category.name)}
        style={{
            backgroundColor:category.name === selectedCategory && "#FC1503",
            color:'white'
          }
       }
        key={category.name}>
            <span style={{
                marginRight: '15px',
                color: category.name===selectedCategory ? 'white' : 'red'
            }}>
                {category.icon}
            </span>
            <span style={
                {opacity:category.name===selectedCategory ? '1':'0.8'}
            }>
                {category.name}
            </span>
        </button>
      ))}
    </Stack>
  )
}
