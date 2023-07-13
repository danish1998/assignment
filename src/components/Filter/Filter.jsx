import React, { useState } from 'react'
import './filter.css';
const Filter = (props) => {
  const [inputValue, setInputValue] = useState('');
  const {handleClick}=props;
  return (
    <div className='filter-main-container'>
        <div className='filter-input-field'>
            <input onChange={event => setInputValue(event.target.value)} className='searchBar' placeholder='search for name' type='input'/>
            <button onClick={()=>handleClick(inputValue)} className='filter-searchBtn'>search</button>
        </div>
    </div>
  )
}

export default Filter