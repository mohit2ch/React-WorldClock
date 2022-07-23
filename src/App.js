// import logo from './logo.svg';
import './App.css';
import Clock from './components/Clock';
import Menu from './components/Menu';
import ClockContext from './store';
import MainNav from './components/MainNav';
import { useContext } from 'react';
// import Layout from './components/Layout';
function App() {
  const ctx = useContext(ClockContext);
  return (
    <div className="App">
      <MainNav/>
      
      <div className="layout">
        <Clock></Clock>
        <Menu></Menu>
      </div>
    </div>
  );
}

export default App;
