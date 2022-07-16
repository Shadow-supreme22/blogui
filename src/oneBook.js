import { Component } from "react";
import { Link } from "react-router-dom";
import './book.css';

class Bookone extends Component{
    constructor(props){
        super(props);
        this.state={
            books:[],
            searchedBooks: [],
        }

    }

    // searchBooks = (event) => {
    //     let searchedValue = event.target.value;
    
    //     if (searchedValue.length !== 0) {
    //       let searchedBooks = this.state.books.filter((book) => {
    //         return (
    //           book.bookname.toLowerCase().includes(searchedValue.toLowerCase()) 
    //         );
    //       });
    
    //       this.setState({ searchedBooks: searchedBooks });
    //     } else {
    //       this.setState({ searchedBooks: [] });
    //     }
    //   };
    componentDidMount=()=>{
        fetch('https://shadowvj.pythonanywhere.com/api/resourceDatas/'+this.props.match.params.id)
        .then((response)=>response.json())
        .then((data)=>{
            this.setState({books:data})
        })
        .catch((error)=>{
            console.log(error);
        })

    }

    render(){
        const {books}=this.state;

        return(
            <div>
                <div class="paddbox">
<div class="row">
  <div class="leftcolumn">
    <div class="card" style={{boxShadow:'0 2px 4px 0 rgba(0,0,0,.2)'}}>
    <h1 style={{fontWeight:'bold',fontSize:'50x'}}>{books.title}</h1>
    <p style={{fontSize:'15px',fontStyle:'oblique'}}>Category: {books.category}</p>
      <div class="fakeimg" style={{height:"340px"}}><img src={books.header_image} style={{height:"280px",width:"100%"}}/><p style={{color:'blue',fontSize:'15px',fontStyle:'oblique',paddingLeft:'5px'}}>#{books.title_tag}</p></div>
      
      <p>{books.body}</p>
    </div>
    
  </div>
  <div class="rightcolumn">
  
   <div class="card" style={{boxShadow:'0 2px 4px 0 rgba(0,0,0,.2)'}}>
      <h3>Blogs By Category</h3>
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
    
    
    
  </div>
</div>


</div>

</div>

            
        );
        }
    }

    

export default Bookone;
