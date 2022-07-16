import { Component } from "react";
import { Link } from "react-router-dom";
import '../book.css';
class SoftBlog extends Component{
    constructor(props){
        super(props);
        this.state={
            books:[],
            searchedBooks: [],
            setBooks:[],
        }

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


      
      
    componentDidMount=()=>{
        fetch('https://shadowvj.pythonanywhere.com/api/resourceDatas/')
        .then((response)=>response.json())
        .then((data)=>{
            this.setState({books:data});
            var result=data.filter(obj=>obj.category=="software");
            this.setState({setBooks:result})
        })
        .catch((error)=>{
            console.log(error);
        })

    }



    render(){
        const {books,setBooks}=this.state;
        
        return(
            <div>
              
                
<div class="paddbox">
  
<div class="row">
  <div class="leftcolumn">
    <h1 style={{textAlign:'center',fontWeight:'bolder',textShadow:'2px 2px 0px'}}>Software Blogs</h1>
  {setBooks.map(
                    sbook=>
    <div class="card" style={{boxShadow:'0 2px 4px 0 rgba(0,0,0,.2)'}}>
      <h1 style={{fontWeight:'bolder',fontSize:'40x'}}>{sbook.title}</h1>
      <p style={{color:'blue',fontSize:'15px',fontStyle:'oblique'}}>Tags: #{sbook.title_tag}</p>
      <div class="fakeimg" style={{height:"200px"}}><div style={{padding:'5px'}}><div><img src={sbook.header_image} style={{height:"190px",width:"100%"}}/></div></div></div>
      <br/>
      <p style={{fontSize:'16px',fontStyle:'oblique'}}>{sbook.body.substr(0,200) + " "}<a><Link key={sbook.id} to={"/onebook/" + sbook.id}>{sbook.snippet}</Link></a></p>


    </div>
    
    )}
    
  </div>
  
  <div class="rightcolumn">
  <div class="card" style={{boxShadow:'0 2px 4px 0 rgba(0,0,0,.2)'}}>
      <h4>Search Blogs</h4>
                    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" onChange={(event) => {
                  this.searchBooks(event);
                }}/>
          
            <div><br/></div>
            <div className="col-md-12 search-results" >
          
              {this.state.searchedBooks.map((book, index) => (
                <Link key={book.id} to={"/onebook/" + book.id}>
                  <div className="result">
                    <ul> <li><strong>{book.title}</strong></li></ul>
                   
                    {/* style={{"backgroundRepeat":"no-repeat","fontSize":"16px",}} */}
                  </div>
                </Link>
              ))}
            </div>
            

      
    </div>
    <div class="card" style={{boxShadow:'0 2px 4px 0 rgba(0,0,0,.2)'}}>
      <h3>Categories</h3>
      <div style={{paddingLeft:'10px'}} >
      <Link to='/coding'>Coding</Link>
      <br></br>
      <a href='/software'>Software</a>
      <br></br>
      <a href='/travel'>Travel</a>
      <br></br>
      <a href='/metaverse'>Metaverse</a>
      </div>
    </div>
    <div class="card" style={{boxShadow:'0 2px 4px 0 rgba(0,0,0,.2)'}}>
    <h3>Recent Posts</h3>
    {books.slice(0,3).map(
  
  
                    book=>
      <><div class="fakeimg"><Link key={book.id} to={"/onebook/" + book.id}><img src={book.header_image} style={{height:"140px",width:"100%",boxShadow:'0 2px 4px 0 rgba(0,0,0,.2)',borderRadius:'10px'}}></img><p style={{fontSize:'12px',fontWeight:'bold',padding:'6px'}}>{book.title}</p></Link></div><br /></>
    )}
    </div>
    
  </div>
</div>

<div class="footer">
  <hr></hr>
  <h5 style={{color:'white'}}>THE BLOG</h5>
</div>
</div>

                
                
                
            </div>
        );
        }
    }

    

export default SoftBlog;
