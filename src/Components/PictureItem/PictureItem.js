import './style.css';

import React, { Component } from 'react';

class PictureItem extends Component {
    constructor(props){
        super(props)
    }
    render() {
        return(
            <div className="pictureItem">
                <div className="pictureDetail">
                    <div className="detailLine">title: {this.props.item.title? this.props.item.title: '-'}</div>
                    <div className="detailLine">production place: {this.props.item.productionPlaces.length>0? this.props.item.productionPlaces.join(','): '-'}</div>
                    <div className="detailLine">principal: {this.props.item.principalOrFirstMaker? this.props.item.principalOrFirstMaker: '-'}</div>
                    <a href={this.props.item.links.web} className="detailLink">...More...</a>
                </div>
                <img className="picture" src={this.props.item.webImage && this.props.item.webImage.url? this.props.item.webImage.url: 'https://d1nhio0ox7pgb.cloudfront.net/_img/o_collection_png/green_dark_grey/512x512/plain/sign_forbidden.png'} />
            </div>
        );
    }
}
export default PictureItem;