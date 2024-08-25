import './App.css';
import About from './component/About';
import Home from './component/Home';
import Navbar from './component/Navbar';
import{BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Notes from './component/Notes';
import AddNote from './component/AddNote';
import NoteState from './context/notes/NoteState';


function App() {
  return (
    <NoteState>
    <Router>
      <Navbar/>
      <Routes>
        <Route exact path='/about' element={<About/>}/>
        <Route exact path='/home' element={<Home/>}/>
        <Route exact path='/mynotes' element={<Notes/>}/>
      </Routes>
    </Router>
    </NoteState>
  );
}

export default App;
