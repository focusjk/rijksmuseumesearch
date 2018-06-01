import './style.css';

import React, { Component } from 'react';

import { Card } from '../style';
import PropTypes from 'prop-types'
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
    static propsTypes = {
        onChange: PropTypes.func
    }
    constructor(props){
        super(props);
        this.onKeyDown = this.onKeyDown.bind(this);   
        this.sendKeyword = this.sendKeyword.bind(this);
    }
    
    sendKeyword() {
        this.props.onChange(this.input.value);
        this.input.value = '';
    }

    onKeyDown(e) {
        if(e.keyCode === 13){
            this.sendKeyword();
        }
    }
    

    render() {
        return(
            <Card backgroundColor="rgba(227,180,170,1)">
                <Input
                    type="text" 
                    innerRef={keyword => this.input = keyword}
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