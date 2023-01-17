//css
import './App.css';

//React
import { useCallback, useEffect, useState } from 'react';

//data
import {wordList} from './data/words.js'

// components
import StartScreem from './components/StartScreem';
import GameOver from './components/GameOver';
import Game from './components/Game';

const stages = [
  {id:1, name:'start'},
  {id:2, name:'game'},
  {id:3, name:'end'},
];

function App() {
  const [gameState, setGameState] = useState(stages[0].name);
  const [words] = useState(wordList);

  //inicia o jogo
  const startGame = () =>
  {
    setGameState(stages[1].name);
  }

  //processa a entrada de letras 
  const verifyLetter = () =>
  {
    setGameState(stages[2].name);
  }

  //reinicia o jogo
  const retry = () =>
  {
    setGameState(stages[0].name);
  }

  return (
    <div className="App">
      {gameState === 'start' && <StartScreem startGame={startGame} />}
      {gameState === 'game' && <Game verifyLetter={verifyLetter} />  }
      {gameState === 'end' && <GameOver retry={retry}/>}
    </div>
  );
}

export default App;
