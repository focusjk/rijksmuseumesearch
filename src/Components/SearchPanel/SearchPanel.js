import './style.css';

import React, { Component } from 'react';

class SearchPanel extends Component {
    constructor(props){
        super(props);
        this.onKeyDown = this.onKeyDown.bind(this);   
        this.sendKeyword = this.sendKeyword.bind(this);
    }
    
    sendKeyword() {
        this.props.onChange(this.refs.keyword.value);
        this.refs.keyword.value = '';
    }

    onKeyDown(e) {
        if(e.keyCode === 13){
            this.sendKeyword();
        }
    }
    

    render() {
        return(
            <div className="searchPanel">
                <input  
                    className="searchInput" 
                    type="text" 
                    ref="keyword" 
                    placeholder="ex. puppy" 
                    onKeyDown={(e) => this.onKeyDown(e)}
                >
                </input>

                <button className="searchButton" onClick={() => this.sendKeyword()}>
                    Search!
                </button>
            </div>
        );
    }
}

export default SearchPanel;