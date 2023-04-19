import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import Navbar from './components/layout/NavBar'
import Footer from './components/layout/Footer'

import Home from './components/pages/Home'
import Company from './components/pages/Company'
import Contact from './components/pages/Contact'
import NewProject from './components/pages/NewProject'

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>

        <Route exact path='/' element={<Home/>}></Route>
        <Route exact path='/company' element={<Company/>}></Route>
        <Route exact path='/contact' element={<Contact/>}></Route>
        <Route exact path='/newproject' element={<NewProject/>}></Route>
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
