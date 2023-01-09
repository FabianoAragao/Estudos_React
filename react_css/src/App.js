import logo from './logo.svg';
import './App.css';
import MyComponent from './components/MyComponent';
import { useState } from 'react';
import Title from './components/Title';

function App() {
  const n = 15;
  const [name] =  useState("Fabiano")
  const redTitle = true;

  return (
    <div className="App">
      {/* CSS Global */}
      <h1>React com CSS</h1>

      
      {/* CSS de Componentes */}
      <MyComponent/>

      {/* CSS Global */}
      <p>teste vazamento css de componente</p>

      
      {/* Inline CSS */}
      <p style={{color:"blue", padding:"25px", borderTop:"2px solid red"}}>
        este elemento foi estilizado de forma inline
      </p>

      {/* Inline CSS dinamico */}
      <h2 style={n < 10 ? {color:"purple"} : {color:"pink"}}>
        css dinamico
      </h2>

      <h2
        style={name === "Fabiano" ? {color: "green", backgroundColor:"#000"}: null}>
        {name}
      </h2>

      {/* classe dinamica */}
      <h2 className={redTitle ? "red-title": "title"}>
        esse titulo vai ter classe dinamica
      </h2>

      {/* CSS modules*/}
      <Title/>
    </div>
  );
}

export default App;
