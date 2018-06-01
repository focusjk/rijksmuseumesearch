import React, { Component } from 'react';

import PictureResult from '../../Components/PictureResult';
import PropTypes from 'prop-types';

class Result extends Component {
    static propsTypes = {
        keyword: PropTypes.string,
    }
    constructor(props) {
        super(props)
        this.state = {
            result: [],
            loading: null,
        
        };
        this.componentDidUpdate = this.componentDidUpdate.bind(this);
    }

    componentDidUpdate(prevProps) {
        if(prevProps.keyword !== this.props.keyword) {
            this.setState({
                loading: true,
            });
            fetch('https://www.rijksmuseum.nl/api/nl/collection?q=' + this.props.keyword + '&key=fpGQTuED&format=json&ps=100').then( x => { 
                return x.json();
            }).then( y => {
                this.setState({
                    result: y.artObjects,
                    loading: false,
                });
            });
        }
    }
    render(){
        return(
            <PictureResult result={this.state.result} loading={this.state.loading} keyword={this.props.keyword}/>
        );
    }

}
export default Result;