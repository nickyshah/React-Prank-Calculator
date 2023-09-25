
import { useState } from 'react';
import './App.css';
import { Button } from './Comnponents/Button';
import sound from './assets/sound.wav'

function App() {

  const [strToDisplay, setStrToDisplay] = useState("")
  const [lastOperator, setLastOperator] = useState("")
  
  const operators = ["+", "-", "*","/", "%"]
  const [isPrank, setIsPrank] = useState(false)

  const handleOnChange = (val) => {

    setIsPrank(false)
    // console.log(val)
   
    if (val === "AC"){
      
      // display(strToDisplay)
      return setStrToDisplay("")
  }
  if (val === "C"){
    return setStrToDisplay(strToDisplay.slice(0, -1))
   
}
if (val === "="){
  const lastChar = strToDisplay[strToDisplay.length-1]

  if (operators.includes(lastChar)){
      // removes the last character from the
      setStrToDisplay(strToDisplay.slice(0, -1))
  }

return total()
}

if (operators.includes(val)){
  setLastOperator(val)
  const lastChar = strToDisplay[strToDisplay.length-1]

  if (operators.includes(lastChar)){
    // remore the last cahr from strToDisplay
    return setLastOperator(strToDisplay.slice(0, -1))
  }
}

if(val === "."){
  // if(strToDisplay.includes("."))
  // return    //won't work cuz after operator this wont work cuz its already been used once.
  const indexOfLastOperator = strToDisplay.lastIndexOf(lastOperator)

  const lastNumberSet = strToDisplay.slice(indexOfLastOperator)

  // alert(indexOfLastOperator)

  if(lastNumberSet.includes(".")){
      return
  }

  if(!lastOperator  && strToDisplay.includes(".")){
      return
  }
}

setStrToDisplay(strToDisplay + val)
  
}


const total = () => {

  const extraVal = randomNumber()
  if(extraVal){
    playAudio();
    setIsPrank(true)
  }
  const ttl = eval(strToDisplay) + extraVal
  setStrToDisplay(ttl.toString())
}

const randomNumber = () => {
  const num = Math.round(Math.random() * 10)
  return num < 3 ? num : 0
}

const playAudio = () => {
  const audio = new Audio(sound);
  audio.play()
}

  const btns = [
    {
      cls : "display",
      label:strToDisplay || "0.00",
    },
    {
    cls : "btn btn-ac",
    label:"AC"
    },
    {
    cls : "btn btn-c",
    label:"C"
    },
    {
    cls : "btn btn-per",
    label:"%"
    },
    {
    cls : "btn btn-divide",
    label:"/"
    },
    {
    cls : "btn btn-7",
    label:"7"
    },
    {
    cls : "btn btn-8",
    label:"8"
    },
    {
    cls : "btn btn-9",
    label:"9"
    },
    {
    cls : "btn btn-x",
    label:"*"
    },
    {
    cls : "btn btn-4",
    label:"4"
    },
    {
    cls : "btn btn-5",
    label:"5"
    },
    {
    cls : "btn btn-6",
    label:"6"
    },
    {
    cls : "btn btn-minus",
    label:"-"
    },
    {
    cls : "btn btn-1",
    label:"1"
    },
    {
    cls : "btn btn-2",
    label:"2"
    },
    {
    cls : "btn btn-3",
    label:"3"
    },
    {
    cls : "btn btn-plus",
    label:"+"
    },
    {
    cls : "btn btn-0",
    label:"0"
    },
    {
    cls : "btn btn-dot",
    label:"."
    },
    {
    cls : "btn btn-equal",
    label:"="
    }
  ]
  return (
    <div className="wrapper">
        <div className="calculator">
            <div className= {isPrank ? "display prank" : "display"}>
               {strToDisplay || "0.00"}
            </div>
            {
            btns.map((item, i) => <Button 
            key={i}  
            cls = {item.cls} 
            label={item.label} 
            handleOnChange ={ handleOnChange} />)
              
            }
              {/* <div class="display">0.00</div> */}
              
              {/* <div class="btn btn-ac">AC</div>
              <div class="btn btn-c">C</div>
              <div class="btn btn-per">%</div>
              <div class="btn btn-divide">/</div>
              <div class="btn btn-7">7</div>
              <div class="btn btn-8">8</div>
              <div class="btn btn-9">9</div>
              <div class="btn btn-x">*</div>
              <div class="btn btn-4">4</div>
              <div class="btn btn-5">5</div>
              <div class="btn btn-6">6</div>
              <div class="btn btn-minus">-</div>
              <div class="btn btn-1">1</div>
              <div class="btn btn-2">2</div>
              <div class="btn btn-3">3</div>
              <div class="btn btn-plus">+</div>
              <div class="btn btn-0">0</div>
              <div class="btn btn-dot">.</div>
              <div class="btn btn-equal">=</div> */}
            
        </div>

    </div>

  );
}

export default App;
