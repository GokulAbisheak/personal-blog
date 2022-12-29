import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from './components/header';
import Homepage from './components/homepage';
import About from './components/about';
import '../src/ux/script.js'
import Contact from './components/contact';

function App() {
  return (
    <Router>
      <Header/>
      <Homepage/>
      <About/>
      <Contact/>
    </Router>
  );
}

export default App;
