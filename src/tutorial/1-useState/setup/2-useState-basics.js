import React, { useState } from 'react';

const UseStateBasics = () => {

  const [title, setTitle ] =  useState('random title')

  const handleClick= () => {
   setTitle('hello people')
  }
  return <h2>
    <>
    <h1>{title}</h1>
    <button type="button" className="btn" onClick={handleClick}>click me</button>
    </>
  </h2>;
};

export default UseStateBasics;
