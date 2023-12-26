import React from 'react';

const ErrorExample = () => {

  let title = 'random title';

  const handleClick = () =>{
    title = 'hello people'
    alert(title)
  }


  return (
    <>
    <h2>{title}</h2>
    <button className='btn' onClick={handleClick}>Click</button>
    </>
  );
};

export default ErrorExample;
