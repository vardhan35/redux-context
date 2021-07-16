import React, { useState } from "react";
import Button from "./Components/Button";
import Count from "./Components/Count";
import Title from "./Components/Title";

const UseCallBackApp = () => {
  const [age, setAge] = useState(25);
  const [salary, setSalary] = useState(50000);

  const incrementSalary = () => {
    setSalary(salary + 1000);
  };

  const incrementAge = () => {
    setAge(age + 1);
  };

  return (
    <div>
      <Title />
      <Count text="age" count={age} />
      <Button handleClick={incrementAge}>Increment Age </Button>
      <Count text="Salary" count={salary} />
      <Button handleClick={incrementSalary}>Increment Salary </Button>
    </div>
  );
};

export default UseCallBackApp;
