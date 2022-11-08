import logo from './logo.svg';
import './App.css';
import ResultsList from './ResultsList'
import Nav from './Nav';

function App(props) {
  return (
    <div className="App">
      <Nav />
     <ResultsList data ={props.data}/>
    </div>
  );
}

export default App;
