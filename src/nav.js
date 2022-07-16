import React, { Component } from "react";
import { Route, Switch, Link } from "react-router-dom";
import Book from "./book.js";
import Bookone from "./oneBook";
import './sidebar.css';
import Search from "./Searchbook";
import CodeBlog from "./category/codingblog";
import MetaBlog from "./category/metaverse.js";
import TravelBlog from "./category/travelblog.js";
import SoftBlog from "./category/softwareblogs.js";







export default class Nav extends Component {
  constructor(props) {
    super(props);
    // this.username = localStorage.getItem("userName");
    this.state = {
      books: [],
      searchedBooks: [],
    };
  }
  

  componentDidMount = () => {
    // fethching all the users

    fetch("https://shadowvj.pythonanywhere.com/api/bookdatas/")
      .then((response) => response.json())
      .then((data) => {
        this.setState({ books: data });
      })
      .catch((err) => {
        console.log(err);
      });
  };


  // logout = () => {
  //   localStorage.removeItem("authToken");
  //   localStorage.removeItem("authStatus");
  //   localStorage.removeItem("userID");
  //   this.props.history.replace("/login");
  // };


  render() {
    return (
      <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light" style={{boxShadow:'0 2px 4px 0 rgba(0,0,0,.2)',width:'screen.width',height:'60px',padding: '10px',margin:'10px',top:'0'}}>
        <Link to="/" className="navbar-brand" style={{fontFamily:"fantasy",fontSize:"28px",color:'blue',textShadow:'1px 1px black'}}>
              THE Blog
            </Link>
  
</nav>
        <Switch>
          <Route path="/" exact component={Book} />
          <Route path="/search" exact component={Search} />
          <Route path="/metaverse" exact component={MetaBlog} />
          <Route path="/travel" exact component={TravelBlog} />
          <Route path="/software" exact component={SoftBlog} />
          <Route path="/coding" exact component={CodeBlog} />
          
          <Route path="/onebook/:id" exact component={Bookone} />
        </Switch>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"></link>

      </div>
    );
  }
}
