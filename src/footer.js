import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';


export default class Foot extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      
      <div style={{ backgroundColor: "black", color: "white" }}>
        
        <footer className="footer">
          <hr style={{color:'grey',boxShadow:'initial'}}></hr>
          <div>
            <div className="container-fluid text-center text-md-left">
              <div className="row">
                <div className="col-md-6 mt-md-0 mt-3">
                  <h5 className="text-uppercase" style={{textAlign:'center',fontFamily:'fantasy'}}>Contact Details</h5>
                  
                  <ul className="list-unstyled" style={{textAlign:'center'}}>
                    <li>
                     <p>Mobile Number: 00000000</p>
                    </li>
                    <li>
                    <p>Email: example@gmail.com</p>
                    </li>
                   
                  </ul>
                </div>

                <hr className="clearfix w-100 d-md-none pb-3" />

                <div className="col-md-3 mb-md-0 mb-3">
                <h5 className="text-uppercase" style={{textAlign:'center',fontFamily:'fantasy'}}>University Website</h5>

                  <ul className="list-unstyled">
                    <li style={{textAlign:'center'}}>
                      <a href="http://sbbsuniversity.ac.in/">Sbbsuniversity</a>
                    </li>
                   
  
                  </ul>
                </div>

                
              </div>
            </div>
          </div>
        </footer>
      </div>
      
    );
  }
}