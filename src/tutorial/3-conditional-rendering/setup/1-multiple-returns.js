import React, { useState, useEffect } from 'react';
const url = 'https://api.github.com/users/QuincyLarson';
const MultipleReturns = () => {

  const [isLoading, setIsLoading] = useState(true)
  const [isError, setIsError] = useState(false)
  const [users, setUsers] = useState("default user")

  if(isLoading){
    return(
      <h1>Loading...</h1>
    )
  }

  return (
    <>
    <h1>{users}</h1>
    </>
  );
};

export default MultipleReturns;
