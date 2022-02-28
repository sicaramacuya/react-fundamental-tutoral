import logo from './logo.svg';
import './App.css';
import Title from './Title'
import POPPOSList from './POPOSList';
import Footer from './Footer'

function App() {
  return (
    <div className='App'>
      <img src={logo} className="App-logo" alt="logo" />
      <Title />
      <POPPOSList />
      <Footer />
    </div>
  );
}

export default App;