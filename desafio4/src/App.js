import './App.css';
import UserDetails from './components/UserDetails';

function App() {
  const pessoas = [
    { id:1, nome:"Jão",       idade:15, profissao:"estudante" },
    { id:2, nome:"Zé",        idade:18, profissao:"mototaxi" },
    { id:3, nome:"Jaquim",    idade:20, profissao:"uber" },
    { id:4, nome:"Maria",     idade:50, profissao:"ceo da apple" },
    { id:5, nome:"Valentina", idade:17, profissao:"desempregada" },
  ];

  return (
    <div className="App">
      {pessoas.map((pessoa) => (
          <UserDetails 
            key={pessoa.id} 
            name={pessoa.nome}
            age={pessoa.idade}
            job={pessoa.profissao}
          />                
        ))}
      
    </div>
  );
}

export default App;
