
import './App.css';
// import logo from './logo.svg'

import  { BrowserRouter , Routes, Route, Link } from 'react-router-dom'
import Form from './components/Form';

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
      <NavBar />
      <Routes>
      < Route path="/About" element={<About />}></Route>
      < Route path="/Contact" element={<Contact />}></Route>
      < Route path="/Teams" element={<Teams />}></Route>
      <Route path="/add-student" element={<Form />}></Route>

      </Routes>
      </BrowserRouter>
      
    </div>
  )
}
function NavBar(){
  return(
  <div>
    <Link to="/About">About</Link>
    <Link to="/Contact">Contact</Link>
    <Link to="/Teams">Teams</Link>
    <Link to="/add-student">Add student</Link>
  </div>
       )
}

function About(){
  return (
  <div>
    this is about component
    </div>
    )
}


function Contact(){
  return (
    <div>
      this is contact
    </div>
  )
}
function Teams(){
  return (
    <div>
      this contains team  info
    </div>
  )
}

export default App;