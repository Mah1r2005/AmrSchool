import React from 'react';
import {BrowserRouter,Route,Switch,Link} from "react-router-dom";

var Style={
   color:'white',
}


var Homepage =  () =>{
    return(
   <BrowserRouter>
    <React.Fragment>
      <div className="jumbotron text-center" id="Homepage">
     <div className="row">
       <div className="col-sm-3"></div>
       <div className="col-sm-3"></div>
       <div className="col-sm-6">
        <h1>Welcome To AmrSchool</h1>
        <h2>Enroll 100+ Language courses</h2>
       </div>
      </div>
</div>
  <div id="services" className="container-fluid">
  <div className="text-center">
    <h2 style={Style}>Services</h2>
    <h4 style={Style}>Choose a service for you</h4>
  </div>
  <br></br>
  <div>
    <div className="col-sm-3 col-xs-12">
      <div className="panel panel-default text-center">
        <div className="panel-heading"  id="Services" style={Style} >
          <h1>Noob</h1>
        </div>
        <div className="panel-body">
          <p><strong>10</strong> Classes</p>
          <p><strong>25</strong> Milestones</p>
          <p><strong>50</strong> Modules</p>
          <p><strong>5</strong> Assignments</p>
        </div>
        <div className="panel-footer">
          <h3>$19</h3>
          <h4>per month</h4>
          <Link to="/services">
          <button className="btn btn-lg" id="Services" style={Style}>Learn More</button>
          </Link>
        </div>
      </div>      
    </div>     
    <div className="col-sm-3 col-xs-12">
      <div className="panel panel-default text-center">
        <div className="panel-heading" id="Services" style={Style} >
          <h1>Pro</h1>
        </div>
        <div className="panel-body">
          <p><strong>20</strong> Classes</p>
          <p><strong>35</strong> Milestones</p>
          <p><strong>70</strong> Modules</p>
          <p><strong>7</strong> Assignments</p>
        </div>
        <div className="panel-footer">
          <h3>$29</h3>
          <h4>per month</h4>
          <Link to="/services">
          <button className="btn btn-lg" id="Services" style={Style} >Learn More</button>
          </Link>
        </div>
      </div>      
    </div>       
    <div className="col-sm-3 col-xs-12">
      <div className="panel panel-default text-center">
        <div className="panel-heading" id="Services" style={Style} >
          <h1>Premium</h1>
        </div>
        <div className="panel-body">
          <p><strong>25</strong> Classes</p>
          <p><strong>40</strong> Milestones</p>
          <p><strong>80</strong> Modules</p>
          <p><strong>8</strong> Assignments</p>
        </div>
        <div className="panel-footer">
          <h3>$49</h3>
          <h4>per month</h4>
          <Link to="/services">
          <button className="btn btn-lg" id="Services" style={Style}  >Learn More</button>
          </Link>
        </div>
      </div>      
    </div>
        <div className="col-sm-3 col-xs-12">
      <div className="panel panel-default text-center">
        <div className="panel-heading" id="Services" style={Style} >
          <h1> Elite</h1>
        </div>
        <div className="panel-body">
          <p><strong>30</strong> Classes</p>
          <p><strong>50</strong> Milestones</p>
          <p><strong>100</strong> Modules</p>
          <p><strong>10</strong> Assignments</p>
        </div>
        <div className="panel-footer">
          <h3>$68</h3>
          <h4>per month</h4>
          <Link to="/services">
          <button className="btn btn-lg" id="Services" style={Style}  >Learn More</button>
          </Link>
        </div>
      </div>      
    </div>
  </div>
</div>
</React.Fragment>
</BrowserRouter>
    );
}

export default Homepage