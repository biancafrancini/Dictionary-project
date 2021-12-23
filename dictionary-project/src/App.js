import logo from './logo.png';
import './App.css';
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
      <header className="App-header">
        <img src={logo} className="Dictionary-logo img-fluid" alt="logo" />
      </header>
      <main>
        <Dictionary />
        </main>
        <br />
        <br />
        <br />
        <footer className="footer">
          Coded by <a href="https://github.com/biancafrancini">Bianca Francini</a>
          </footer>
      </div>
    </div>
  );
}

export default App;
