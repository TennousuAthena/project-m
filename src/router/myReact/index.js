import logo from './logo.svg';
import { Link } from "react-router-dom"
import './App.css';


function ReactComponent() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello, React! 
        </p>
        <p>
        <Link to="/" className="App-link">
          <span>Home</span>
        </Link>
        </p>
      </header>
    </div>
  );
}

export default ReactComponent;
