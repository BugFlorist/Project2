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
        <Route path='/Services' element = {<Services />} />
        <Route path='/Aboutus' element = {<Aboutus />} />
        <Route path='/StudyGroups' element = {<StudyGroups />} />

      </Routes>


      </div>
      

    </Router>



    
  );
}

export default App;
