import './App.css';

import React, { Component } from 'react';

import PictureResult from './Components/PictureResult';
import SearchPanel from './Components/SearchPanel';
import logo from './logo.svg';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      keyword: '',
      result: [],
      recommend: [],
      loading: false,
    }
    this.onChange = this.onChange.bind(this);


  }
  onChange(newKeyword) {
    this.setState({
      keyword: newKeyword,
      loading: true,
    });
    this.search(newKeyword);
  }

  search(newKeyword) {
    fetch('https://www.rijksmuseum.nl/api/nl/collection?q=' + newKeyword + '&key=fpGQTuED&format=json&ps=100').then( x => { 
        return x.json();
    }).then( y => {
        this.setState({
          result: y.artObjects,
          loading: false,
        });
        console.log(y.artObjects)
    });
  }


  render() {
    return (
      <div className="App">
        <img src="http://mw2013.museumsandtheweb.com/wp-content/uploads/2013/01/RIJKSMUSEUMLOGO_zwart_mw.jpg" style={{width: '40%', marginBottom: '30px'}} />
        <SearchPanel onChange={this.onChange} />
        <PictureResult keyword={this.state.keyword} result={this.state.result} loading={this.state.loading}/>
      </div>
    );
  }
}

export default App;
