import './App.css';
import Carros from './components/carros.js'

function App() 
{
  const cars = [
    { id: 1, brand:"VW", km:18300, color:"green", newCar:false},
    { id: 2, brand:"fiat", km:12233, color:"blue", newCar:false},
    { id: 3, brand:"ford", km:0, color:"grey", newCar:true},
    { id: 4, brand:"chevrolet", km:23789, color:"pink", newCar:false},
  ];

  return (
    <div className="App">
      <h1 className="titulo_local">Titulo do app.js</h1>


      {/* ------loop de objetos--------- */}
      {cars.map((car) => (
        <Carros 
          key={car.id}
          brand={car.brand} 
          km={car.km} 
          color={car.color}  
          newCar={car.newCar}
        />
      ))}
    </div>
  );
}

export default App;
