import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import FourOhFour from './components/FourOhFour';
import List from './components/List';
import CharacterInfo from './components/CharacterInfo';
import Navbar from './components/ui/Navbar';

function App() {
  return (
    <>
      <Navbar />
      <h1>My Star Wars App</h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/list" element={<List />} />
        <Route path="/about" element={<About />} />
        <Route path="/characters/:id" element={<CharacterInfo />} />
        <Route path="*" element={<FourOhFour />} />
      </Routes>
    </>
  );
}

export default App;

// http://localhost:5173/about
