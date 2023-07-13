import React from 'react'
import './listItem.css'

const ListItem = (props) => {
  const { name, image, category } = props;
  return (
    <div className='List-item-container'>
      <img width="300px" height="250px" src={image}/>
        <p className='ptagOne'>Drink name: {name}</p>
        <p  className='ptagTwo'>Drink Category: {category}</p>
    </div>
  )
}

export default ListItem