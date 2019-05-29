import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Search from './searchbar.jsx'



// class Main extends React.Component {

//   constructor(props){
//     super(props);
    
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }

//   componentDidMount(){
//     axios.get('https://shrouded-ravine-99591.herokuapp.com/bundle.js')
//     .then((response)=> { console.log(response.data)})
//     .catch((err) => {console.log('oooooopppsss')})
//   }
  
//   handleSubmit(e){
//    e.preventDefault();
//    this.setState({uuid: parseInt(this.state.text)});
//   }
  
//   render(){ 
    // return (
    // <>
    // <form onSubmit={this.handleSubmit}>
    //   <input type="text" onChange={(e)=>{e.preventDefault(); this.setState({text:e.target.value})}}/>
    //   <input type="submit"/>
    // </form>
    // <div class="header"><Search/></div>
    // <div class="body">
    // <div class="graph" id="image"><Images uuid={this.state.uuid}/></div> 
    // <div class="description" id="description"></div>
    // <div class="action">Action</div>
    // </div>
    // <div class="carousel">Carousel</div>
    // <div class="footer">Review and Ratings</div>
    
    // </>)
//   }

// }


const Main = ()=> {
  const [uuid, setUuid] = useState(1050);
  const [text, setText] = useState('');

  function handleSubmit(e){
       e.preventDefault();
       setUuid(parseInt(text));
      }
      
  return (
    <>
    
    <form onSubmit={handleSubmit}>
      <input type="text" onChange={(e)=>{e.preventDefault(); setText(e.target.value)}}/>
      <input type="submit"/>
    </form>
    <div class="header"><Search/></div>
    <div class="body">
    <div class="graph" id="image"><Images uuid={uuid}/></div> 
    <div class="description" id="description"><Description id={uuid}/></div>
    <div class="action">Action</div>
    </div>
    <div class="carousel">Carousel</div>
    <div class="footer">Review and Ratings</div>
    
    </>
  );

}
// ReactDOM.render(<Images/>, document.getElementById('image'));
ReactDOM.render(<Main/>, document.getElementById('main'));


