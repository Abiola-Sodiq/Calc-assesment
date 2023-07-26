import React, { useState } from "react";

const Calculator = () => {
  const [displayValue, setDisplayValue] = useState("");

  const appendToDisplay = (value) => {
    setDisplayValue((prevValue) => prevValue + value);
  };

  const clearDisplay = () => {
    setDisplayValue("");
  };

  const calculate = () => {
    try {
      setDisplayValue(eval(displayValue).toString());
    } catch (error) {
      setDisplayValue("Error");
    }
  };

  return (
<div className=" flex justify-center items-center h-[100svh] w-screen">
<div className=" w-[40%] h-[50%] bg-slate-500">
      <input type="text" value={displayValue} readOnly className=" w-[70%] h-9 flex items-center " />
      <div className=" ">
        <button onClick={() => clearDisplay()}>C</button>
        <button onClick={() => appendToDisplay("/")}>/</button>
        <button onClick={() => appendToDisplay("*")}>*</button>
        <button onClick={() => appendToDisplay("7")}>7</button>
        <button onClick={() => appendToDisplay("8")}>8</button>
        <button onClick={() => appendToDisplay("9")}>9</button>
        <button onClick={() => appendToDisplay("-")}>-</button>
        <button onClick={() => appendToDisplay("4")}>4</button>
        <button onClick={() => appendToDisplay("5")}>5</button>
        <button onClick={() => appendToDisplay("6")}>6</button>
        <button onClick={() => appendToDisplay("+")}>+</button>
        <button onClick={() => appendToDisplay("1")}>1</button>
        <button onClick={() => appendToDisplay("2")}>2</button>
        <button onClick={() => appendToDisplay("3")}>3</button>
        <button onClick={() => calculate()}>=</button>
        <button onClick={() => appendToDisplay("0")}>0</button>
        <button onClick={() => appendToDisplay(".")}>.</button>
      </div>
    </div>
</div>
  );
};


  

export default Calculator