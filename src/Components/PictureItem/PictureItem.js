import './style.css';

import React, { Component } from 'react';

import PropTypes from 'prop-types'
import styled from 'styled-components';

const Item = styled.div`
    position: relative;
    overflow: hidden;
    &:hover {
        img { 
            opacity: 0.3;
        }
        div {
            z-index: 1;
        }
    }
`;
const ItemDetail = styled.div`
    margin: 1.5vw;
    position: absolute;
    z-index: -1;
    text-align: left;
    top: 1;
`;
const DetailLine = styled.div`
    font-size: 2vw;
    margin-bottom: 1vw;
    width: 100%;
    color: black;
    border-radius: 2px; 
    font-family: Courier;
`;
const DetailLink = DetailLine.withComponent('a').extend`
    color: white;
    background-color: black;
`;

const DetailPicture = styled.img`
    height: 40vw;
    width: 100%;
    object-fit: cover;
`;


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
            <Item>
                <ItemDetail>
                    <DetailLine>title: {title}</DetailLine>
                    <DetailLine>production place: {productionPlaces.join(',')}</DetailLine>
                    <DetailLine>principal: {principalOrFirstMaker}</DetailLine>
                    <DetailLink href={links.web} >...More...</DetailLink>
                </ItemDetail>
                <DetailPicture src={webImage && webImage.url ? webImage.url 
                    : 'https://d1nhio0ox7pgb.cloudfront.net/_img/o_collection_png/green_dark_grey/512x512/plain/sign_forbidden.png' } 
                />
            </Item>
        );
    }
}
export default PictureItem;