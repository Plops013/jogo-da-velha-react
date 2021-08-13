import './App.css';
import { GameProvider } from './providers/game.provider';
import Routes from './router/Routes';


function App() {
  return (
    <GameProvider>
      <div className="App">
        <Routes />
      </div>
    </GameProvider>
  );
}

export default App;
