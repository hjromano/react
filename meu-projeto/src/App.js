import './App.css';
import Pessoa from './components/Pessoa';

function App() {
  return (
    <div className="App">
      <h1>Olá React!</h1>
      <p>Meu primeiro codigo em React</p>
      <Pessoa nome= "Higor" idade= "29" profissao= "Programador" foto= "https://via.placeholder.com/150" />
     
    </div>
  );
}

export default App;
