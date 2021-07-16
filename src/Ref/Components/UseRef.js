import React, { useRef, useEffect } from "react";

const UseRef = () => {
  const inputRef = useRef(null);

  useEffect(() => {
    // FOCUS ON INPUT ELEMENT
    inputRef.current.focus();
  }, []);

  return (
    <div>
      <input type="text" ref={inputRef} />
    </div>
  );
};

export default UseRef;
