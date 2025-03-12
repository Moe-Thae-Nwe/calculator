import React from "https://esm.sh/react"
import ReactDOM from "https://esm.sh/react-dom/client"
const root = ReactDOM.createRoot(document.getElementById("root"))

function App() {
  const [display, setDisplay] = React.useState("0")
  
  const button = {
    padding: 10,
    fontSize: 30,
    width: 50
  }
  
  const buttons = {
    display: 'flex',
    flexDirection: 'column'
  }
  
  const row = {
    display: 'flex'
  }
  
  let problem = display;
  let last = "";
  let argument = [];
  let currentNumber = "";
  let solution = 0;
  let editedArgument = []

  function clear() {
    setDisplay("0")
  }
  
  function zero() {
    if (display != "0") {
    setDisplay(prevDisplay => prevDisplay + "0")
    }
  }
  
  function one() {
    if (display == "0") {
      setDisplay("1")
    } else {
    setDisplay(prevDisplay => prevDisplay + "1")
    }
  }
  
  function two() {
    if (display == "0") {
      setDisplay("2")
    } else {
      setDisplay(prevDisplay => prevDisplay + "2")
    }
  }
  
  function three() {
    if (display == "0") {
      setDisplay("3")
    } else {
      setDisplay(prevDisplay => prevDisplay + "3")
    }
  }
  
  function four() {
    if (display == "0") {
      setDisplay("4")
    } else {
      setDisplay(prevDisplay => prevDisplay + "4")
    }
  }
  
  function five() {
    if (display == "0") {
      setDisplay("5")
    } else {
      setDisplay(prevDisplay => prevDisplay + "5")
    }
  }
  
  function six() {
    if (display == "0") {
      setDisplay("6")
    } else {
      setDisplay(prevDisplay => prevDisplay + "6")
    }
  }
  
  function seven() {
    if (display == "0") {
      setDisplay("7")
    } else {
      setDisplay(prevDisplay => prevDisplay + "7")
    }
  }
  
  function eight() {
    if (display == "0") {
      setDisplay("8")
    } else {
      setDisplay(prevDisplay => prevDisplay + "8")
    }
  }
  
  function nine() {
    if (display == "0") {
      setDisplay("9")
    } else {
      setDisplay(prevDisplay => prevDisplay + "9")
    }
  }
  
  function equals() {
    for (let i = 0; i < problem.length; i++) {
      if ((Number(problem[i]) >= 0 && Number(problem[i]) <= 9) || problem[i] == ".") {
        currentNumber += problem[i]
      } else if((problem[i] == "+") || (problem[i] == "-") || (problem[i] == "x") || (problem[i] == "÷")) {
       if (currentNumber != "") {
         argument.push(Number(currentNumber))
          currentNumber = ""
       }
        argument.push(problem[i])
      }
    }
    for (let i = 0; i < problem.length; i++) {
      if((problem[problem.length - i - 1] == "+") || (problem[problem.length - i - 1] == "-") || (problem[problem.length - i - 1] == "x") || (problem[problem.length - i - 1] == "÷")) {
        break;
      } else {
         last = problem[problem.length - i - 1] + last
      }
    }
    argument.push(Number(last))
    for (let i = 0; i < argument.length; i++) {
      if (argument[i] == "-" && typeof argument[i - 1] == typeof "") {
        if(typeof argument[i + 1] != typeof "") {
        argument[i + 1] = argument[i + 1] * -1
        }
        continue
      } else if (argument[i] == "+" && typeof argument[i + 1] == typeof "") {
        continue
      } else if (argument[i] == "x" && typeof argument[i + 1] == typeof "") { 
                                        if (argument[i + 1] == "-" && typeof argument[i + 2] == typeof "") {
        continue
      }} else if (argument[i] == "÷" && typeof argument[i + 1] == typeof "") {
                 if (argument[i + 1] == "-" && typeof argument[i + 2] == typeof "") {
        continue
      }
      }
      editedArgument.push(argument[i])
      console.log(editedArgument)
    }
    for (let i = 0; i < argument.length; i++) {
      if (i == 0) {
        solution = editedArgument[i]
      } else if (editedArgument[i] == "+") {
        solution += editedArgument[i + 1] 
      } else if (editedArgument[i] == "x" && (editedArgument[i - 1] == "+" || editedArgument[i - 1] == "-" || editedArgument[i - 1] == "÷")) {
        solution = solution * editedArgument[i + 1]
      } else if (editedArgument[i] == "÷" && (editedArgument[i - 1] == "+" || editedArgument[i - 1] == "-" || editedArgument[i - 1] == "x")) {
        solution = solution / editedArgument[i + 1]
      } else if (editedArgument[i] == "+") {
        solution += editedArgument[i + 1]
      } else if (editedArgument[i] == "-") {
        solution -= editedArgument[i + 1]
      } else if (editedArgument[i] == "x") {
        solution = solution * editedArgument[i + 1]
      } else if (editedArgument[i] == "÷") {
        solution = solution / editedArgument[i + 1]
      } 
    }
    setDisplay(solution)
    console.log(editedArgument)
  }
  
  function add() {
    setDisplay(prevDisplay => prevDisplay + "+")
  }
  
  function subtract() {
    if (display == "0") {
      setDisplay("-")
    } else {
    setDisplay(prevDisplay => prevDisplay + "-")
    }
  }
  
  function multiply() {
    setDisplay(prevDisplay => prevDisplay + "x")
  }
  
  function divide() {
    setDisplay(prevDisplay => prevDisplay + "÷")
  }
  
  function decimal() {
    for (let i = 0; i < problem.length; i++) {
      if ((Number(problem[i]) >= 0 && Number(problem[i]) <= 9) || problem[i] == ".") {
        currentNumber += problem[i]
      } else {
        currentNumber = ""
        break;
      }
    }
    if (currentNumber.includes(".") == false) {
      setDisplay(prevDisplay => prevDisplay + ".")
    }
  }
  
  return(
    <>
      <p id = "display">{display}</p>
      <div style = {buttons}>
        <div style = {row}>
          <button id = "clear" onClick = {clear} style = {button}>C</button>
        </div>
        <div style = {row}>
          <button id = "seven" onClick = {seven} style = {button}>7</button>
          <button id = "eight" onClick = {eight} style = {button}>8</button>
          <button id = "nine" onClick = {nine} style = {button}>9</button>
          <button id = "divide" onClick = {divide} style = {button}>÷</button>
        </div>
        <div style = {row}>
        <button id = "four" onClick = {four} style = {button}>4</button>
        <button id = "five" onClick = {five} style = {button}>5</button>
        <button id = "six" onClick = {six} style = {button}>6</button>
        <button id = "multiply" onClick = {multiply} style = {button}>x</button>
        </div>
        <div style = {row}>
          <button id = "one" onClick = {one} style = {button}>1</button>
          <button id = "two" onClick = {two} style = {button}>2</button>
          <button id = "three" onClick = {three} style = {button}>3</button>
          <button id = "subtract" onClick = {subtract} style = {button}>-</button>
        </div>
        <div style = {row}>
          <button id = "zero" onClick = {zero} style = {button}>0</button>
          <button id = "decimal" onClick = {decimal} style = {button}>.</button>
          <button id = "equals" onClick = {equals} style = {button}>=</button>
          <button id = "add" onClick = {add} style = {button}>+</button> 
        </div>
      </div>
    </>
  )
}

root.render(<App />)
