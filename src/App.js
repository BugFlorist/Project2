import logo from './logo.svg';
import './App.css';
import PageNavbar from './components/PageNavbar';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './components/pages/Home';
import Services from './components/pages/Services';
import Aboutus from './components/pages/Aboutus';
import StudyGroups from './components/pages/StudyGroups';

function App() {
  return (

    <Router>

      <div>
      <PageNavbar />

      <Routes>
        <Route path='/' element = {<Home />} />
        <Route path='/Project2/Services' element = {<Services />} />
        <Route path='/Project2/Aboutus' element = {<Aboutus />} />
        <Route path='/Project2/StudyGroups' element = {<StudyGroups />} />

      </Routes>


      </div>
      

    </Router>



    
  );
}

export default App;
