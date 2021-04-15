import React, { useState } from 'react'

import './App.css';

function App() {

  const [input, setInput ] = useState({
    camion: '',
    paquete: []
  })


  function start(e){    
    //console.log(input)
    const newInput = {
      camion: input.camion,
      paquete1: input.paquete1,
      paquete2: input.paquete2
    }

    const sum = newInput.paquete1 + newInput.paquete2
    const result = (newInput.camion - 30) / sum

    if(result < 30 ){      
        alert('Camión lleno ' + result)
      }else{
        return alert('Aún con capacidad por: ' + result )
      }

    //console.log(sum)
  }

function handleChange(e){
  //e.preventDefault()
  const {name, value} = e.target
  setInput(prevInput => {
    return{
      ...prevInput,[name]: value
    }
  })
}

/* function Result(props) {
  let result = camion / paquete
} */

  return (
    <div className="App"><br />
      <form>
            <input 
            name="camion"
            type="number"
            value={input.value}
            onChange={handleChange}
            placeholder="Camion size" /> <br />

            <input 
            name="paquete1"
            type="number"
            value={input.value}
            onChange={handleChange}
            placeholder="paquete"
            />
            <br />
            <input 
            name="paquete2"
            type="number"
            value={input.value}
            onChange={handleChange}
            placeholder="paquete"
            />
            <br />

            <button onClick={start}>Submit</button>
        </form>

        <div>
          <p id="result">Result: {}</p>
        </div>
    </div>
  );
}

export default App;
