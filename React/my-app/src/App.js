import './App.css';
import Welcome from './components/Welcome';
import Greet from './components/Greet';

function App() {
  return (
    <div className="App">
      <Greet name="Amirtha" aka="Jinnukutty"></Greet>
      <Welcome name="Amy" aka="superwoman">
        <p>This is children props</p>
      </Welcome>
      <Welcome name="Sat" aka="Loverboy">
        <button>No!</button>
      </Welcome>
    
    </div>
  );
}

export default App;
