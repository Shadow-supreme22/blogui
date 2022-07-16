import React, { Component } from "react";
import { Link } from "react-router-dom";


class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      logConf: false,
    };
    this.user = {};
  }

  hideLogMessage() {
    this.setState({ logConf: false });
  }

  readValue(event, keyName) {
    this.user[keyName] = event.target.value;
  }

  loginUser() {
    fetch("https://shadowvj.pythonanywhere.com/login/", {
      method: "POST",
      body: JSON.stringify(this.user),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((message) => {
        if (message.code === 0) {
          this.setState({ logConf: true });
        } else {
          localStorage.setItem("authToken", message.token);
          localStorage.setItem("authStatus", "true");
          localStorage.setItem("userID", message.user.id);
          localStorage.setItem("userName", message.user.username);

          this.props.history.replace("/");
        }
      })
      .catch((err) => {
        console.log(err);
      });
      
  }
  
  render() {
    return (
      <div>
      <div class="container">
	<div class="row text-center mb-4">
		<div class="col-md-12">
		    <h2>Ebook Archive</h2>
		</div>
	</div>
	<div class="row text-center">
	    <div class="col-md-6 offset-md-3">
	        <div class="card">
	            <div class="card-body">
	                <div class="login-img">
	                    <img src="https://previews.123rf.com/images/annaleni/annaleni1507/annaleni150700126/42666184-flat-open-book-circle-icon-with-long-shadow-back-to-school-and-education-vector-illustration-flat-st.jpg" style={{height:'160px'}}/>
	                </div>
	                <div class="login-title">
	                    <h4>Log In</h4>
	                </div>
	                <div class="login-form mt-4">
	                    <form>
                        <div class="form-row">
                            <div class="form-group col-md-12">
                            <input
              type="name"
              onKeyUp={(event) => {
                this.readValue(event, "username");
              }}
              className="form-control"
              placeholder="Username"
            />
                            </div>
                            <div class="form-group col-md-12">
                            <input
              type="password"
              onKeyUp={(event) => {
                this.readValue(event, "password");
              }}
              className="form-control"
              placeholder="Password"
            />                            </div>
                          </div>
                         <div class="form-row">
                        <div class="form-group">
                                <div class="form-check">
                                  
                                </div>
                              </div>
                    </div>                        
                        
                        <div class="form-row">
                            <button type="button" class="btn btn-danger btn-block" onClick={() => {
                this.loginUser();
              }}>Login</button>
                        </div>
                    </form>
	                </div>
	                
	            </div>
	        </div>
	    </div>
	</div>
</div>
</div>

      
    );
  }
}

export default Login;
