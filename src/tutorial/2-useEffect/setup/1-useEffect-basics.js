import React, { useState, useEffect } from "react";
// by default runs after every re-render
// cleanup function
// second parameter

const UseEffectBasics = () => {
  const [value, setValue] = useState(0);
  const [text, setText] = useState(0);

  const ClickHandler = () => {
    setValue(value + 1);
  };

  useEffect(() => {
      document.title = `New Message (${value} ${text})`;
  }, [value, text]);

  return (
    <>
      <h1>{value}</h1>
      <button className="btn" onClick={ClickHandler}>
        Click Me
      </button>
      <h1>{text}</h1>
      <button className="btn" onClick={() => setText(text + 1)}>
        Click Me
      </button>
    </>
  );
};

export default UseEffectBasics;
