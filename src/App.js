import logo from './logo.svg';
import './App.css';
import HelloWord from './components/HelloWorld.js';
import Componente_Numero_dois from './components/Componente_Numero_dois';
import SayMyName from './components/SayMyName';
import Pessoa from  './components/Pessoa';
import List from './components/List';



function soma(a, b) {
  return a + b;
}

function App() {
  const name = 'Mav'; // declarando variavel no JS
  const newname = name.toUpperCase();
  const url = 'https://f4.bcbits.com/img/a0627145604_16.jpg'

  //class e diferente de classname o ClassName é necessario pra usar o react
  return (
    <div className="App">
      <h1>Fogo na Babilonia</h1>
      <Pessoa nome = "Pericleiton Rasta" 
              idade = "30" 
              profissao = "DJ pra galera debochar legal" 
              foto = "https://f4.bcbits.com/img/a0627145604_16.jpg"/>
      <List/>
    </div>
  );
}

export default App;
