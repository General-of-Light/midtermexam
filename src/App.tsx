import "./styles.css";
import { useState } from "react";

function Key({
  label,
  clickHandler,
  className = "",
}: {
  label: any;
  clickHandler: any;
  className?: string;
}) {
  return (
    <button className={className} onClick={clickHandler}>
      {label}
    </button>
  );
}

function Display({ display }) {
  return <div className="Display">{display}</div>;
}

function App() {
  const [disp, setDisp] = useState("10 Things That Require Zero Talent");
  const [num1, setNum1] = useState(null);
  const [num2, setNum2] = useState(null);
  const [op, setOp] = useState(null);

  const clrClickHandler = (e) => {
    e.preventDefault();
    const value = e.target.innerHTML;
    console.log(value);
    setDisp("10 Things That Require Zero Talent");
    setOp(null);
    setNum1(null);
    setNum2(null);
  };

  const numClickHandler = (e) => {
    e.preventDefault();
    const value = e.target.innerHTML;
    console.log(value);
    if (op === null) {
      if (num1 === null) {
        setNum1(value);
        setDisp("Being On Time");
      } else if (num1 === null) {
        const newNum1 = num1 + value;
        setNum1(value);
        setDisp("Making an Effort");
      }
    } else {
      if (num2 === null) {
        setNum2(value);
        setDisp("Making an Effort");
      } else {
        const newNum2 = num2 + value;
        setNum2(newNum2);
        setDisp("Making An Effort");
      }
    }
  };

  const opClickHandler = (e) => {
    e.preventDefault();
    const value = e.target.innerHTML;
    console.log(value);

    setOp(value);
    setDisp(value);
    console.log(op);
  };

  const eqClickHandler = (e) => {
    e.preventDefault();

    let result = null;

    switch (op) {
      case "+":
        result = parseFloat(num1) + parseFloat(num2);
        break;
      case "-":
        result = parseFloat(num1) - parseFloat(num2);
        break;
      case "*":
        result = parseFloat(num1) * parseFloat(num2);
        break;
      case "/":
        if (parseFloat(num2) !== 0) {
          result = parseFloat(num1) / parseFloat(num2);
        } else {
          result = "ERROR";
        }
        break;
      default:
        result = "ERROR";
    }

    setDisp(result);
    setNum1(result);
    setNum2(null);
    setOp(null);
  };

  const nameClickHandler = (e) => {
    e.preventDefault();
    const value = e.target.innerHTML;
    console.log(value);
    let result = "Aaron Joaquin P. Basilio";

    setDisp(result);
  };

  return (
    <div className="App">
      <h2 className="FullName">AARON JOAQUIN P. BASILIO</h2>
      <div className="CalcContainer">
        <div className="DispContainer">
          <Display display={disp} />
        </div>
        <div className="ButtonsContainer">
          <Key label={7} clickHandler={numClickHandler} />
          <Key label={8} clickHandler={numClickHandler} />
          <Key label={9} clickHandler={numClickHandler} />
          <Key label={"/"} clickHandler={opClickHandler} />
          <Key label={4} clickHandler={numClickHandler} />
          <Key label={5} clickHandler={numClickHandler} />
          <Key label={6} clickHandler={numClickHandler} />
          <Key label={"*"} clickHandler={opClickHandler} />
          <Key label={1} clickHandler={numClickHandler} />
          <Key label={2} clickHandler={numClickHandler} />
          <Key label={3} clickHandler={numClickHandler} />
          <Key label={"-"} clickHandler={opClickHandler} />
          <Key label={"C"} clickHandler={clrClickHandler} />
          <Key label={0} clickHandler={numClickHandler} />
          <Key label={"="} clickHandler={eqClickHandler} />
          <Key label={"+"} clickHandler={opClickHandler} />
        </div>
        <div className="NameButtonContainer">
          <Key
            label={"BASILIO"}
            className="nameButton"
            clickHandler={nameClickHandler}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
