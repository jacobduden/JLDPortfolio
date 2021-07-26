import 'bootstrap/dist/css/bootstrap.css'
import './App.css';
import Portfolio from './pages/portfolio';
import AboutMe from './pages/about';
import Contact from './pages/contact';
import Nav from './comps/Nav/index';
import Footer from './comps/Footer/index';
import Resume from './pages/resume';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
function App() {
  return (
  <Router>
      <Nav/>
<Switch>
  <Route exact path='/' component={AboutMe}/>
  <Route exact path='/about' component={AboutMe}/>
  <Route exact path='/portfolio' component={Portfolio}/>
  <Route exact path='/resume' component={Resume}/>
  <Route exact path='/contact' component={Contact}/>
</Switch>
    <Footer/>
    </Router>
  );
} 

export default App;

