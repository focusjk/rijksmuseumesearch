import './style.css';

import React, { Component } from 'react';

import PropTypes from 'prop-types'

class PictureItem extends Component {
    static propTypes = {
        title: PropTypes.string,
        productionPlaces: PropTypes.arrayOf(PropTypes.string),
        principalOrFirstMaker: PropTypes.string,
        links: PropTypes.shape({
            web: PropTypes.string
        }),
        webImage: PropTypes.shape({
            url: PropTypes.string
        }),
    }

    static defaultProps = {
        title: '-',
        productionPlaces: ['-'],
        principalOrFirstMaker: '-',
        links: {
            web: '#'
        },
        webImage: {
            url: 'https://d1nhio0ox7pgb.cloudfront.net/_img/o_collection_png/green_dark_grey/512x512/plain/sign_forbidden.png'
        },
    }

    constructor(props){
        super(props)
    }
    render() {
        const {title, productionPlaces, principalOrFirstMaker, links, webImage} = this.props;
        return(
            <div className="pictureItem">
                <div className="pictureDetail">
                    <div className="detailLine">title: {title}</div>
                    <div className="detailLine">production place: {productionPlaces.join(',')}</div>
                    <div className="detailLine">principal: {principalOrFirstMaker}</div>
                    <a href={links.web} className="detailLink">...More...</a>
                </div>
                <img className="picture" src={webImage && webImage.url ? webImage.url 
                    : 'https://d1nhio0ox7pgb.cloudfront.net/_img/o_collection_png/green_dark_grey/512x512/plain/sign_forbidden.png' } 
                />
            </div>
        );
    }
}
export default PictureItem;