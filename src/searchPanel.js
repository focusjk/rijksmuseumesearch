import './style.css';

import React, { Component } from 'react';

import { Card } from './style';
import styled from 'styled-components';

const Input = styled.input`
    font-size: 16px;
    border-radius: 5px;
    border: 0px;
    padding-left: 16px; 
    margin: 8px;
    width: 40%;
    font-family: Courier;
`;
const Button = styled.button`
    font-size: 16px;
    border-radius: 5px;
    border: 0px;
    padding: 8px 16px 8px 16px;
    margin: 8px 0 8px 18px;
    background-color: rgb(150,97,95);
    color: white;
    font-family: Courier;
`;
    
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
            <Card backgroundColor="rgba(227,180,170,1)" >
                <input 
                    type="text" 
                    ref="keyword" 
                    placeholder="ex. puppy" 
                    onKeyDown={(e) => this.onKeyDown(e)} 
                />
                <Button onClick={() => this.sendKeyword()}>
                    Search!
                </Button>
            </Card>
        );
    }
}

export default SearchPanel;