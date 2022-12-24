import { useEffect, useState } from 'react'
import './App.css'

import mensaje from '/src/data/bd.json'


function App() {
  
  const arrayImag = ['/fondolila.jpg','/nav.jpg','/navi.jpg','/catorce.jpg','/arbol2.jpg','/arbolrojo.jpg','/bolona.jpg','/cinco.jpg','/veintytres.jpg','/veintycuatro.jpg','/veinteyuno.jpg','/veinteydos.jpg','/veinte.jpg','/uno.jpg','/tres.jpg','/trece.jpg','/siete.jpg','/seis.jpg','/quince.jpg','/once.jpg','/ocho.jpg','/nueve.jpg','/dos.jpg','/doce.jpg','/diezyocho.jpg','/diez.jpg','/diesiete.jpg','/fondoazull.jpg','/fondodorado.jpg']
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
      <div className='container'>
        <h1 className="feliz">¡Feliz <br /> Navidad!</h1>
        <h2 className="feliz-name">Harvey N. Lopez Quiñones</h2>
        <h2 className="feliz-initial">** HNLQ **</h2>
        <h2 className="phrase">{mensaje[index].mensaje}</h2>
      </div>
      
      <img className='imag' src={arrayImag[indexImag]} alt="" />
     
    
    </div>
  )
}

export default App
