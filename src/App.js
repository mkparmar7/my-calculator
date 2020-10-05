import React from "react";
import "./App.css";

class Buttons extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <button
        className={this.props.buttonClass}
        id={this.props.buttonId}
        onClick={this.props.handleClick}
      >
        {this.props.buttonText}
      </button>
    );
  }
}

const Display = (props) => {
  return (
    <div id="display">
      <p className="history">{props.historyDisplay}</p>
      <p className="mainDisplay">{props.mainDisplay}</p>
    </div>
  );
};

const numberList = [
  {
    decimalForm: 0,
    writtenForm: "zero",
  },
  {
    decimalForm: 1,
    writtenForm: "one",
  },
  {
    decimalForm: 2,
    writtenForm: "two",
  },
  {
    decimalForm: 3,
    writtenForm: "three",
  },
  {
    decimalForm: 4,
    writtenForm: "four",
  },
  {
    decimalForm: 5,
    writtenForm: "five",
  },
  {
    decimalForm: 6,
    writtenForm: "six",
  },
  {
    decimalForm: 7,
    writtenForm: "seven",
  },
  {
    decimalForm: 8,
    writtenForm: "eight",
  },
  {
    decimalForm: 9,
    writtenForm: "nine",
  },
];
const operatorsList = [
  {
    operator: "=",
    writtenOperator: "equals",
  },
  {
    operator: "+",
    writtenOperator: "add",
  },
  {
    operator: "-",
    writtenOperator: "subtract",
  },
  {
    operator: "*",
    writtenOperator: "multiply",
  },
  {
    operator: "/",
    writtenOperator: "divide",
  },
  {
    operator: ".",
    writtenOperator: "decimal",
  },
  {
    operator: "clear",
    writtenOperator: "clear",
  },
  
];

const signOperator = [{ operator: "\xB1", writtenOperator: "sign" }];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      history: [],
      mainDisplay: [0],
      waitingOperator: true,
    };
    this.handleNumberClick = this.handleNumberClick.bind(this);
    this.handleOperatorClick = this.handleOperatorClick.bind(this);
    this.signOperatorClick = this.signOperatorClick.bind(this);
  }

  signOperatorClick(){
    console.log([parseFloat(...this.state.mainDisplay)*-1]);
    return this.setState({
      history: [...this.state.history],
      mainDisplay: [parseFloat(...this.state.mainDisplay)*-1],
    })
  }

  handleNumberClick(val) {
    let numberObject = numberList.find(
      (key) => key.writtenForm === val.target.id
    );
    if (this.state.mainDisplay[0] === 0 && this.state.mainDisplay[1] !== ".") {
      if (val.target.id === "zero") {
        return this.setState({
          history: [...this.state.history],
          mainDisplay: [numberObject.decimalForm],
          waitingOperator: true,
        });
      } else {
        return this.setState({
          history: [...this.state.history],
          mainDisplay: [numberObject.decimalForm],
          waitingOperator: true,
        });
      }
    } else {
      return this.setState({
        history: [...this.state.history],
        mainDisplay: [...this.state.mainDisplay, numberObject.decimalForm],
        waitingOperator: true,
      });
    }
  }

  handleOperatorClick(val) {
    let operatorObject = operatorsList.find(
      (key) => key.writtenOperator === val.target.id
    );

    switch (val.target.id) {
      case "clear":
        return this.setState({
          history: [],
          mainDisplay: [0],
          waitingOperator: false,
        });
      case "equals":

        let finalCalc = [...this.state.history, ...this.state.mainDisplay];
        let result = eval(finalCalc.join(""));
        console.log(this.state.history);

        return this.setState({
          history: [],
          mainDisplay: [result],
          waitingOperator: true,
        });
      case "decimal":
        if (!this.state.mainDisplay.includes(".")) {
          return this.setState({
            history: [...this.state.history],
            mainDisplay: [...this.state.mainDisplay, operatorObject.operator],
            waitingOperator: true,
          });
        }
      break;
              
      default:
        if (this.state.waitingOperator) {
          return this.setState({
            history: [
              ...this.state.history,
              this.state.mainDisplay.join(""),
              operatorObject.operator,
            ],
            mainDisplay: [0],
            waitingOperator: false,
          });
        } else {
          return this.setState({
            history: this.state.history.map((val, index) => {
              if (index < this.state.history.length - 1) {
                return val;
              } else {
                return operatorObject.operator;
              }
            }),
            mainDisplay: [0],
            waitingOperator: false,
          });
        }
    }
  }

  render() {
    const BtNumbers = numberList.map((val) => (
      <Buttons
        key={val.writtenForm}
        buttonId={val.writtenForm}
        handleClick={this.handleNumberClick}
        buttonClass="number"
        buttonText={val.decimalForm}
      />
    ));

    const BtOperators = operatorsList.map((val) => (
      <Buttons
        key={val.writtenOperator}
        buttonId={val.writtenOperator}
        handleClick={this.handleOperatorClick}
        buttonClass="operator"
        buttonText={val.operator}
      />
    ));

    const BtSignOperator = signOperator.map((val) => (
      <Buttons
      key={val.writtenOperator}
      buttonId={val.writtenOperator}
      handleClick={this.signOperatorClick}
      buttonClass="operator"
      buttonText={val.operator}
      />
    ));


    return (
      <div className="App">
        <Display
          historyDisplay={this.state.history}
          mainDisplay={this.state.mainDisplay}
        />
        <div className="buttons">
          <div className="numbers">{BtNumbers}</div>
          <div className="operators">{BtOperators}</div>
          <div className="operators">{BtSignOperator}</div>
        </div>
      </div>
    );
  }
}

export default App;

// import Calculator from "./Calculator";

// function App() {

//   return (
//     <div className="App">
//       <header className="App-header">
//         <div className="calculator-grid">
//          {/* <Calculator /> */}

//         </div>

//       </header>
//     </div>
//   );
// }

// export default App;
