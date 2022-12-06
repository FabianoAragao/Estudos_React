//estilos
import './App.css';
import City from './assets/city.jpg'
//componentes
import CarDetails from './components/CarDetails';
import ConditionalRender from './components/ConditionalRender';
import Conteiner from './components/Conteiner';
import ExecuteFUnction from './components/ExecuteFunction';
import ListRender from './components/ListRender';
import ManageData from './components/ManageData';
import ShowUserName from './components/ShowUserName';
import Message from './components/Message';
import ChangeMessageState from './components/ChangeMessageState';
//hooks
import { useState } from 'react';

function App() 
{
  const cars = [
    { id: 1, brand:"VW", km:18300, color:"green", newCar:false},
    { id: 2, brand:"fiat", km:12233, color:"blue", newCar:false},
    { id: 3, brand:"ford", km:0, color:"grey", newCar:true},
    { id: 4, brand:"chevrolet", km:23789, color:"pink", newCar:false},
  ];

  function showMessage()
  {
    console.log("Evento do componente pai");
  }

  const [message, setMessage]= useState("");

  const handleMessage = (msg) =>
  {
    setMessage(msg);
  }

  return (
    <div className="App">
      <h1>Avançamdo em react</h1>
      {/* ------------PROPS------------ */}
      <ShowUserName nomeDoUsuario="Gerimundo"/>      
      {/* ------------PROPS------------ */}
      <CarDetails brand="VW" km={18300} color="green" newCar={false}/>
      {/* --Reaproveitando componentes-- */}
      <CarDetails brand="fiat" km={0} color="blue" newCar={true}/>
      <CarDetails brand="chevrolet" km={468465400} color="yelow" newCar={false}/>
      {/* ------loop de objetos--------- */}
      {cars.map((car) => (
        <CarDetails 
          key={car.id}
          brand={car.brand} 
          km={car.km} 
          color={car.color}  
          newCar={car.newCar}
        />
      ))}
      {/* ----------Children------------ */}
      <Conteiner myValue="Testando">
        <p>Testando conteudo do conteiner</p>
      </Conteiner>
      {/* ------executar função--------- */}
      <ExecuteFUnction myFunction={showMessage}/>
      {/* ----------state lift --------- */}
      <Message msg={message} />
      <ChangeMessageState handleMessage={handleMessage} />
      {/* ------------------------------ */}
      
      <ConditionalRender/>
      <ListRender/>

      {/* Imagem em public */}
      <div>
        <img src="/img1.jpg" alt="Paisagem" />
      </div>
      
      {/* Imagem em assets */}
      <div>
        <img src={City} alt="Cidade" />
      </div>
  
      <ManageData/>
    </div>
  );
}

export default App;
