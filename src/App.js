import logo from './logo.svg';
import './App.css';
import Counter from './components/counter';

function App() {
  return (
    <div className='App'>
      <Counter title="counter A"/>
      <Counter title="counter B"/>
      <Counter title="counter C"/>
    </div>
  );
}

export default App;
