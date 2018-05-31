import './App.css';

import React, { Component } from 'react';

import Result from './Containers/Result';
import SearchPanel from './Components/SearchPanel';
import logo from './logo.svg';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      keyword: '',
    }
    this.onChange = this.onChange.bind(this);
  }
  onChange(newKeyword) {
    this.setState({
      keyword: newKeyword,
    });
  }

  render() {
    return (
      <div className="App">
        <img 
          src="http://mw2013.museumsandtheweb.com/wp-content/uploads/2013/01/RIJKSMUSEUMLOGO_zwart_mw.jpg" 
          style={{width: '40%', marginBottom: '30px'}} 
        />
        <SearchPanel onChange={this.onChange} />
        <Result keyword={this.state.keyword} />
      </div>
    );
  }
}

export default App;