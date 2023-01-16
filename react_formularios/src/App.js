import './App.css';
import MyForm from './componentes/MyForm';

function App() {
  return (
    <div className="App">
      <h2>Forms</h2>
      <MyForm user={{name: "teste", email: "teste@teste.com.br", bio: "Sou advogado", role: "admin"}}/>
    </div>
  );
}

export default App;
