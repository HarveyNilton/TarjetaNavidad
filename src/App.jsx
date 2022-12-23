import { useEffect, useState } from 'react'
import './App.css'

import mensaje from '/src/data/bd.json'


console.log(mensaje);

function App() {
  
  const arrayImag = ['/src/assets/fondolila.jpg','/src/assets/nav.jpg','/src/assets/navi.jpg','/src/assets/arbol.jpg','/src/assets/arbol2.jpg','/src/assets/arbolrojo.jpg','/src/assets/bolona.jpg','/src/assets/fondo.jpg','/src/assets/fondoazull.jpg','/src/assets/fondodorado.jpg']
  const [index, setIndex]=useState(0)
  const randomIndex = Math.floor(Math.random()*mensaje.length)
  const randomImag = Math.floor(Math.random()*arrayImag.length)

  const [indexImag, setIndexImag] =useState(0)

  useEffect(()=>{
    setIndex(randomIndex)
    setIndexImag(randomImag)
  },[])

  return (
    <div className="App">
      <h1 className="feliz">
      ¡Feliz Navidad!!
      </h1>
    
      <img className='imag' src={arrayImag[indexImag]} alt="" />
     <h2 className="phrase">
      {mensaje[index].mensaje}
     </h2>
     <h4 className="name">
     Atte. Harvey N. Lopez Quiñones
      </h4>
    </div>
  )
}

export default App
