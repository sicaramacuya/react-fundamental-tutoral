import logo from './logo.svg';
import './App.css';
import Title from './Title'
import POPPOSList from './POPOSList';

function App() {
  return (
    <div className='App'>
      <img src={logo} className="App-logo" alt="logo" />
      <Title />
      <POPPOSList />
    </div>
  );
}

export default App;
