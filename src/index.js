import React from 'react';
import ReactDom from 'react-dom';
import './index.css';
import {BrowserRouter,Route,Switch,Link} from "react-router-dom";
import Homepage from './pages/Homepage';
import About from './pages/About';
import Contacts from './pages/Contact';
import Services from './pages/Services';
import NotFound from './pages/NotFound';


//Css
var NavStyle = {
  color: 'white',
};

//Body
function Navbar()
{return(
	<BrowserRouter>
<nav class="navbar navbar-default navbar-fixed-top" id="Navbar">
  <div class="container">
    <div class="navbar-header">
      <a class="navbar-brand" style={NavStyle}>AmrSchool</a>
    </div>
    <div class="collapse navbar-collapse" >
      <ul class="nav navbar-nav navbar-right">
        <li>
          <Link to="/" style={NavStyle}>Homepage</Link>
        </li>
        <li>
          <Link to="/services"  style={NavStyle}>Services</Link>
        </li>
        <li>
           <Link to="/about" style={NavStyle}>About</Link>
        </li>
       <li>
         <Link to="/contact" style={NavStyle}>Contacts</Link>
       </li>
      </ul>
    </div>
  </div>
</nav>
<br></br><br></br><br></br>
  <div>
  <Switch>
     <Route path="/" exact component={Homepage} />
      <Route path="/about" component={About}/>
      <Route path="/services" component={Services}/>
      <Route path="/contact" component={Contacts}/>
      <Route component={NotFound}/>
    </Switch>
   </div>
</BrowserRouter>

	);
}
ReactDom.render(<Navbar/>,document.getElementById('Navbar'));

//Footer
function Footer(){
	return(
       <footer className="container-fluid text-center" id="footer">
          Made with Love<span class="glyphicon glyphicon-heart"></span>By Bayezid :)
       </footer>
   );
}

ReactDom.render(<Footer/>,document.getElementById('Footer'));