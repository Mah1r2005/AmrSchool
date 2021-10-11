import React from 'react';

var Contacts =  () =>{
    return(
       <React.Fragment>
        <div className="jumbotron text-center">
          <div className="row">
            <div className="col-sm-6">
              <h2>Phone Number and location</h2>
              <h3>Location:Flat no:30; House no:23; Road no:4; Dhaka Cantonment; Dhaka; Bangladesh<i className="bd flag"></i></h3>
              <h3>Phone Number:+880 171************9</h3>
            </div>
           <div className="col-sm-6">
             <h2>Social Media</h2>
             <button className="ui facebook button">
               <i className="facebook icon"></i>
               Facebook
             </button>
             <button className="ui twitter button">
               <i className="twitter icon"></i>
                Twitter
             </button>
            <button className="ui google plus button">
             <i className="google plus icon"></i>
             Google Plus
            </button>
            <button className="ui vk button">
             <i className="vk icon"></i>
              VK
            </button>
            <button className="ui linkedin button">
              <i className="linkedin icon"></i>
              LinkedIn
            </button>
            <button className="ui instagram button">
             <i className="instagram icon"></i>
             Instagram
             </button>
             <button className="ui youtube button">
              <i className="youtube icon"></i>
             YouTube
             </button>
        </div>
      </div>
   </div>
</React.Fragment> 
    );
}

export default Contacts