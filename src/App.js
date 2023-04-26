import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Navbar from './components/layout/NavBar'
import Footer from './components/layout/Footer'
import Container from './components/layout/Container'

import Home from './components/pages/Home'
import Project from './components/pages/Project'
import Projects from './components/pages/Projects'
import Company from './components/pages/Company'
import Contact from './components/pages/Contact'
import NewProject from './components/pages/NewProject'

function App() {
  return (
    <Router>
      <Navbar />
      <Container customClass = "min-height">
        <Routes>
          <Route exact path='/' element={<Home />}></Route>
          <Route exact path='/project' element={<Project />}></Route>
          <Route exact path='/contact' element={<Contact />}></Route>
          <Route exact path='/newproject' element={<NewProject />}></Route>
          <Route exact path='/project/:id' element={<Projects />}></Route>
        </Routes>
      </Container>
      <Footer />
    </Router>
  );
}

export default App;
