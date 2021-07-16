import React, { useState } from "react";
import { useMemo } from "react";

const MemoApp = () => {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  const increment1 = () => {
    setCount1(count1 + 1);
  };

  const increment2 = () => {
    setCount2(count2 + 1);
  };

  const isEven = useMemo(() => {
    let i = 0;
    while (i < 200000000) i++;
    return count1 % 2 === 0;
  }, [count1]);

  return (
    <div>
      <div>
        <button onClick={increment1}>Increment1 - {count1} </button>
        {isEven ? "Even" : "Odd"}
      </div>
      <div>
        <button onClick={increment2}>Increment2 - {count2} </button>
      </div>
    </div>
  );
};

export default MemoApp;
