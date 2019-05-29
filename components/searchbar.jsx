import React from 'react';
import ReactDOM from 'react-dom';


export default class Search extends React.Component {

    constructor(props){
      super(props);
      this.state ={
          categories: ['desktop', 'laptop'],
          value: ''
      }
      this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount(){
        

    }
    handleChange(){

        this.setState({value: event.target.value});

    }
  
    render(){
      return (
        <>
        <div id="search-col1">
        
        </div>
    
        <form class="nav-search">
        <select>
           {this.state.categories.map(el => (<option value={el}>{el}</option>))}
        </select>
        <input type="text" value={this.state.value} onChange={this.handleChange} />
        <input type="submit" value="Submit" />
      </form>
       </>
      )
    }
  
  }

  

//   ReactDOM.render(<Search />, document.getElementById('searchbar'));