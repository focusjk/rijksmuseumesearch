import './App.css';

import React, { Component } from 'react';

import PictureResult from './pictureResult';
import Recommandation from './recommandation';
import SearchPanel from './searchPanel';
import logo from './logo.svg';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      keyword: '',
      result: [],
      recommend: [],
    }
    this.onChange = this.onChange.bind(this);


  }
  onChange(newKeyword) {
    this.setState({
      keyword: newKeyword
    });
    this.search();
  }

  search() {
    fetch('https://www.rijksmuseum.nl/api/nl/collection?q=' + this.state.keyword + '&key=fpGQTuED&format=json').then( x => { 
        return x.json();
    }).then( y => {
        this.setState({
          result: y.artObjects,
        });
        console.log(y.artObjects)
    });
  }


  render() {
    return (
      <div className="App" style={{padding: '5%'}}>
        <SearchPanel onChange={this.onChange} />
        <PictureResult keyword={this.state.keyword} result={this.state.result} />
        <Recommandation />
      </div>
    );
  }
}

export default App;
