import React, { useEffect, useState } from 'react'
import Filter from '../../components/Filter/Filter';
import List from '../../components/NameList/List'
import './home.css';

const Home = () => {
  const [getByName, setGetByName]=useState([])
  const handleClick = (e) => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${e}`);
        const data= await response.json()
        setGetByName(data.drinks)
        console.log(getByName)
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  };

  useEffect(() => {
    console.log(getByName);
  }, [getByName])
  

  return (
    <div className='main-container'>
        <Filter handleClick={handleClick}/>
        <List ByName={getByName}/>
    </div>
  )
}

export default Home