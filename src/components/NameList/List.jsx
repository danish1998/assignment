import axios from 'axios';
import React, { useEffect, useState } from 'react'
import ListItem from '../ListItem/ListItem'
import './list.css';


const List = (props) => {
  const {ByName}=props;
  const [name,setName]=useState([])


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=');
        const data= await response.json()
        setName(data.drinks)
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  },[]);

  useEffect(()=>{
    setName(ByName)
  },[ByName])

  return (
    <div className='List-main-container'>
      <div className='List-container'>
        {name.map((item,index) => (
          <ListItem key={index} name={item.strDrink} image={item.strDrinkThumb} category={item.strCategory}/>
        ))}
      </div>
      <div className='pagination-btn'>
        <div className='buttons'>
          <button className='btn1'>Next</button>
          <button className='btn2'>Prev</button>
        </div>
      </div>
    </div>
  )
}

export default List