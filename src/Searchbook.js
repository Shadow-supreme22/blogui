import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      searchedBooks: [],
    };
  }

  searchBooks = (event) => {
    let searchedValue = event.target.value;

    if (searchedValue.length !== 0) {
      let searchedBooks = this.state.books.filter((book) => {
        return (
          book.bookname.toLowerCase().includes(searchedValue.toLowerCase()) 
        );
      });

      this.setState({ searchedBooks: searchedBooks });
    } else {
      this.setState({ searchedBooks: [] });
    }
  };



  componentDidMount = () => {
    // fethching all the users

    fetch("http://shadowvj.pythonanywhere.com/api/bookdatas/")
      .then((response) => response.json())
      .then((data) => {
        this.setState({ books: data });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    return (
      <div>
        {this.state.modal == true && (
          <div className="modal">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-body">
                  <div className="row">
                    <div
                      className="card col-5"
                      style={{
                        marginLeft: "50px",
                      }}
                    >
                      <div className="card-body username-body">
                        <h5
                          className="card-title"
                          style={{ marginBottom: "0px !important" }}
                        >
                          
                        </h5>
                      </div>
                      <img
                        src={this.state.singleFeed.picture}
                        className="card-img-top"
                        alt="..."
                      />
                      <div className="card-body">
                        <div className="row">
                          

                            
                        </div>
                        <div className="row">
                          <p className="card-text">
                            {this.state.singleFeed.caption}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="insert-comment col-12">
                        <div className="form-group">
                          <input
                            className="form-control"
                            placeholder="Write Comment..."
                            onKeyUp={(event) => {
                              this.createComment(
                                event,
                                this.state.singleFeed._id
                              );
                            }}
                          />
                        </div>
                      </div>
                      <div
                        className="col-12"
                        style={{
                          overflow: "scroll",
                          overflowX: "visible",
                          height: "400px",
                        }}
                      >
                        {this.state.comments.map((comment, index) => (
                          <div key={index}>
                            <strong>{comment.user.username}</strong>
                            <p>{comment.comment}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-bs-dismiss="modal"
                    onClick={() => {
                      this.toggleModal(false);
                    }}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* end of modal  */}

        <div className="container">
          <div className="searchUser">
            <div
              style={{
                border: "1px solid lightgray",
                borderRadius: "5px",
                overflow: "hidden",
              }}
            >
              <button
                style={{
                  width: "10%",
                  float: "left",
                  paddingTop: "7px",
                  paddingBottom: "7px",
                }}
                className="searchButton"
              >
               
              </button>
              <input
                className="form-control"
                placeholder="Search by Name"
                style={{ width: "90%", border: "none", borderRadius: "0px" }}
                onChange={(event) => {
                  this.searchBooks(event);
                }}
              />
            </div>
            <div className="col-md-12 search-results">
              {this.state.searchedBooks.map((book, index) => (
                <Link key={book.id} to={"/onebook/" + book.id}>
                  <div className="result">
                    <strong>{book.bookname}</strong>
                   
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
