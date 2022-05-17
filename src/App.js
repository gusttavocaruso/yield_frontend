import logo from './julhana.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          meu nome é Juliana, mas pode me chamar de 
        </p>
        <a
          className="App-link"
          href="https://www.instagram.com/julianayamaguchi.tattoo/"
          target="_blank"
          rel="noopener noreferrer"
        >
          J U C A
        </a>
      </header>
    </div>
  );
}

export default App;
