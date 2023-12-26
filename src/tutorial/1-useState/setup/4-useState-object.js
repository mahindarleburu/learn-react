import React, { useState } from 'react';

const UseStateObject = () => {
  const [people, setPeople] = useState({
    name : 'peter',
    age: '34',
    message: 'Good Morning'
  })


  const changeMessage = () => {
    return setPeople({...people, message: 'change message'})
  }

  return (
    <>
    <h3>{people.name}</h3>
    <h3>{people.age}</h3>
    <h3>{people.message}</h3>
    <button className='btn' onClick={changeMessage}>change message</button>
    </>
  )
};

export default UseStateObject;
