import './App.css';
import { Input } from './Input';

function App() {
  const h1 = <h1>React Form</h1>
  return (
    <div className="App">
      <header className="App-header">
        {h1} 
        <Input />
      </header>
    </div>
  );
}

export default App;
