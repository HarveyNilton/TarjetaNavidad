import { useEffect, useState } from 'react'
import './App.css'

import mensaje from '/src/data/bd.json'


console.log(mensaje);

function App() {
  
  const arrayImag = ['/fondolila.jpg','/nav.jpg','/navi.jpg','/arbol.jpg','/arbol2.jpg','/arbolrojo.jpg','/bolona.jpg','/fondo.jpg','/fondoazull.jpg','/fondodorado.jpg']
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
      <div className="nieve"></div>
      <h1 className="feliz">
      ¡Feliz Navidad!!
      </h1>
    
      <img className='imag' src={arrayImag[indexImag]} alt="" />
     <h2 className="phrase">
      {mensaje[1].mensaje}
     </h2>
     <h3 className="name">
     Atte. Harvey N. Lopez Quiñones
      </h3>
    </div>
  )
}

export default App
