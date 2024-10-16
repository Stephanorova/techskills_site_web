
import { BrowserRouter , Route, Switch } from 'react-router-dom';
import './App.css';
import NaveCenter from './NaveBareCenter/NaveCenter';
import Home from './Accueil/Home';
import Footer from './footer/Footer';
import { ChevronUp } from 'lucide-react';
import NaveBareTop from './NaveBareTop/NaveBareTop';
import Contact from './Contact/Contact';
import Cours from './Cours/Cours';
import CoursId from './Cours/CoursID/CoursId';
import Verifications from './Verification/Verifications';







function App() {
  return (
    <div className="App">
      <BrowserRouter>
           <NaveCenter/>
           <NaveBareTop/>
           <Switch>
             <Route path = "/" exact component = {Home}/>
             <Route path = "/cours"  component = {Cours}/>
             <Route path = "/contact"  component = {Contact}/>
             <Route path = "/verification"  component = {Verifications}/>
             <Route path = "/:id"  component = {CoursId}/>
           </Switch>
           <Footer/>
      </BrowserRouter>
      <span
        className="fixed bottom-4 right-4 bg-gray-900 text-white p-2 "
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        <ChevronUp size={24} />
      </span>
    </div>
  );
}

export default App;
