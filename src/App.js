import React, { useMemo, useState } from 'react'
// import ReactDom from 'react-dom';

const App = () => {
  const [height,setHeight]= useState(180);
  const [weight,setWeight] = useState(70);
  const onWeightChange =(e)=> {
    setWeight(e.target.value)
  }
  const onHeightChane = (e) =>{
    setHeight(e.target.value)
  }
  const output = useMemo(() =>{
    const calculateHeight = height / 100;
    return (weight/(calculateHeight*calculateHeight)).toFixed(1)
  },[weight,height]);
  return (
    <main>
      <h1>BMI CALCULATOR</h1>
      <div className='input-selection'>
        <p className='slider-output'>Weight : {weight}kg</p>
        <input className='input-slider' type='range' step={1} min={40} max={200} onChange={onWeightChange}></input>
        <p className='slider-output' >Height : {height}cm</p>
        <input className='input-slider' type='range' onChange={onHeightChane} min={140} max={220}></input>
      </div>
      <div>
        <p className='output-section'>Your BMI is</p>
        <p className='output'>{output}</p>
      </div>
    </main>
  )
}

export default App