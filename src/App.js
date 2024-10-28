import './App.css';
import Hello from './Components/elements/Hello'

function App() {
  return (
    <div>
      <Hello />
      <h1>Hello World</h1>
      <p>Paragraph from main file</p>
      <button>Button From app file</button>
      <Hello />
    </div>
  );
}

export default App;
