// import React, { useEffect, useState } from "react";
// import "./App.css";
// import KeyPad from "./KeyPad";

// function Calculator() {
//   const [prevValue, setPrevValue] = useState(null);
//   const [nextValue, setNextValue] = useState("0");
//   const [op, setOp] = useState(null);

//   useEffect(() => {}, [op, nextValue, prevValue]);

//   const CalculatorOperations = {
//     "/": (firstValue, secondValue) => firstValue / secondValue,
//     "*": (firstValue, secondValue) => firstValue * secondValue,
//     "+": (firstValue, secondValue) => firstValue + secondValue,
//     "-": (firstValue, secondValue) => firstValue - secondValue,
//     "=": (firstValue, secondValue) => secondValue,
//   };

//   const performOperation = () => {
//     let temp = CalculatorOperations[op](
//       parseFloat(prevValue),
//       parseFloat(nextValue)
//     );
//     setOp(null);
//     setNextValue(String(temp));
//     setPrevValue(null);
//   };

//   const handleNum = (number) => {
//     setNextValue(nextValue === "0" ? String(number) : nextValue + number);
//   };

//   const insertDot = () => {
//     if (!/\./.test(nextValue)) {
//       setNextValue(nextValue + ".");
//     }
//   };

//   const percentage = () => {
//     setNextValue(parseFloat(nextValue) / 100);
//     if (prevValue && nextValue === "") {
//       setPrevValue(parseFloat(prevValue) / 100);
//     }
//   };

//   const changeSign = () => {
//     setNextValue(parseFloat(nextValue) * -1);
//   };

//   const clearData = () => {
//     setNextValue("0");
//     setPrevValue("0");
//   };

//   const handleOperation = (value) => {
//     if (Number.isInteger(value)) {
//       handleNum(parseInt(value, 10));
//     } else if (value in CalculatorOperations) {
//       if (op === null) {
//         setOp(value);
//         setPrevValue(nextValue);
//         setNextValue("");
//       }
//       if (op) {
//         setOp(value);
//       }
//       if (prevValue && op && nextValue) {
//         performOperation();
//       }
//     } else if (value === "DEL" || "AC") {
//       clearData();
//     } else if (value === "\xB1") {
//       changeSign();
//     } else if (value === ".") {
//       insertDot();
//     } else if (value === "%") {
//       percentage();
//     }
//   };

//   return (
//     <div id="display" className="output">
//       <div id="display" className="calculator-grid">
//         <div className="result">{nextValue}</div>
//       </div>
//       <div className="calculator-grid">
//         <div className="keys-function">
//           <button id="del" name="DEL" value={"DEL"} onClick={handleOperation}>
//             DEL
//           </button>
//           <button
//             id="\xB1"
//             name="\xB1"
//             value={"\xB1"}
//             onClick={handleOperation}
//           >
//             "\xB1"
//           </button>
//           <button id="%" name="%" value={"%"} onClick={handleOperation}>
//             {" "}
//             %{" "}
//           </button>
//           <button
//             id="clear"
//             name="AC"
//             value={"AC"}
//             onClick={handleOperation}
//             className="span-two"
//           >
//             AC
//           </button>

//           {/* <KeyPad keyValue={"DEL"} onClick={handleOperation} />
//     <KeyPad keyValue={"\xB1"} onClick={handleOperation} />
//     <KeyPad keyValue={"%"} onClick={handleOperation} /> */}
//         </div>
//         <div className="key-operators">
//           <button id="add" name="+" value={"+"} onClick={handleOperation}>
//             +
//           </button>
//           <button id="subtract" name="-" value={"-"} onClick={handleOperation}>
//             -
//           </button>
//           <button id="multiply" name="*" value={"*"} onClick={handleOperation}>
//             *
//           </button>
//           <button id="divide" name="/" value={"/"} onClick={handleOperation}>
//             /
//           </button>
//           <button id="equals" name="=" value={"="} onClick={handleOperation}>
//             =
//           </button>
//           {/* <KeyPad keyValue={"+"} onClick={handleOperation} />
//     <KeyPad keyValue={"-"} onClick={handleOperation} />
//     <KeyPad keyValue={"*"} onClick={handleOperation} />
//     <KeyPad keyValue={"/"} onClick={handleOperation} />
//     <KeyPad keyValue={"="} onClick={handleOperation} /> */}
//         </div>
//         <div className="key-numbers">
//           <button id="nine" name="9" value={9} onClick={handleOperation}>
//             9
//           </button>
//           <button id="eight" name="8" value={8} onClick={handleOperation}>
//             8
//           </button>
//           <button id="seven" name="7" value={7} onClick={handleOperation}>
//             7
//           </button>
//           <button id="six" name="6" value={6} onClick={handleOperation}>
//             6
//           </button>
//           <button id="five" name="5" value={5} onClick={handleOperation}>
//             5
//           </button>
//           <button id="four" name="4" value={4} onClick={handleOperation}>
//             4
//           </button>
//           <button id="three" name="3" value={3} onClick={handleOperation}>
//             3
//           </button>
//           <button id="two" name="2" value={2} onClick={handleOperation}>
//             2
//           </button>
//           <button id="one" name="1" value={1} onClick={handleOperation}>
//             1
//           </button>
//           <button
//             id="decimal"
//             className="key-dot"
//             name="."
//             value={"."}
//             onClick={handleOperation}
//           >
//             .
//           </button>
//           <button
//             id="zero"
//             name="0"
//             className="key-zero"
//             value={0}
//             onClick={handleOperation}
//           >
//             0
//           </button>
//           {/* <KeyPad keyValue={9} onClick={handleOperation} />
//     <KeyPad keyValue={8} onClick={handleOperation} />
//     <KeyPad keyValue={7} onClick={handleOperation} />
//     <KeyPad keyValue={6} onClick={handleOperation} />
//     <KeyPad keyValue={5} onClick={handleOperation} />
//     <KeyPad keyValue={4} onClick={handleOperation} />
//     <KeyPad keyValue={3} onClick={handleOperation} />
//     <KeyPad keyValue={2} onClick={handleOperation} />
//     <KeyPad keyValue={1} onClick={handleOperation} />
//     <KeyPad className="key-dot" keyValue={"."} onClick={handleOperation} />
//     <KeyPad className="key-zero" keyValue={0} onClick={handleOperation} /> */}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Calculator;
