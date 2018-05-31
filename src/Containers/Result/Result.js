import React, { Component } from 'react';

import PictureResult from '../../Components/PictureResult';

class Result extends Component {
    constructor(props) {
        super(props)
        this.state = {
            result: [],
            loading: null,
        
        };
        this.componentWillUpdate = this.componentWillUpdate.bind(this);
        this.componentDidUpdate = this.componentDidUpdate.bind(this);
    }
    componentWillUpdate(prevProps){
        if(prevProps.keyword !== this.props.keyword) {
            this.setState({
                loading: true,
            });
        }
    }
    componentDidUpdate(prevProps) {
        fetch('https://www.rijksmuseum.nl/api/nl/collection?q=' + this.props.keyword + '&key=fpGQTuED&format=json&ps=100').then( x => { 
            return x.json();
        }).then( y => {
            if(prevProps.keyword !== this.props.keyword) {
                this.setState({
                    result: y.artObjects,
                    loading: false,
                });
            } 
        });
    }
    render(){
        return(
            <PictureResult result={this.state.result} loading={this.state.loading} keyword={this.props.keyword}/>
        );
    }

}
export default Result;