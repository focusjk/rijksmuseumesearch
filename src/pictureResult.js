import './style.css';

import React, { Component } from 'react';

import { Card } from './style';
import styled from 'styled-components';

const PictureGrid = styled.div`
    width: 100%;
    grid-template-columns: 30% 30% 30%;
    grid-gap: 10px 5%;
    display: grid;
`;

const HeaderGrid = styled.div`
    grid-column-start: 1;
    grid-column-end: 4;
    height: 64px;
    border-bottom: 3px solid white;
    font-size: 48px; 
    text-align: left;
`;

const ItemGrid = styled.div`
    position: relative;
    overflow: hidden;
    &:hover {
        .picture {
            opacity: 0.3;
        }
        .pictureDetail {
            z-index: 1;
        }
    }
`;



class PictureResult extends Component {
    constructor(props){
        super(props)
    }
    render() {
        return(
            <Card  backgroundColor="rgb(255,212,159)">
                <PictureGrid>
                    <HeaderGrid>
                        { this.props.keyword } 
                        { this.props.loading && <div style = {{ fontSize: '24px', display: 'inline'}}> ( loading )</div> }
                        { !this.props.loading && this.props.keyword &&
                            <div style = {{ fontSize: '24px', display: 'inline'}}> 
                                { this.props.result.length>1? ' ( ' + this.props.result.length + ` results )` 
                                : ' ( ' + this.props.result.length + ` result )`}
                            </div> 
                        }
                    </HeaderGrid> 
                    {
                        this.props.result.map((item) => {
                            return (
                                
                                <ItemGrid>
                                    <div className="pictureDetail">
                                        <div className="detailLine">title: {item.title? item.title: '-'}</div>
                                        <div className="detailLine">
                                            production place: {item.productionPlaces.length>0? item.productionPlaces.join(','): '-'}
                                        </div>
                                        <div className="detailLine">
                                            principal: {item.principalOrFirstMaker? item.principalOrFirstMaker: '-'}
                                        </div>
                                        <a href={item.links.web} className="detailLink">...More...</a>
                                    </div>
                                    <img 
                                        className="picture" 
                                        src={item.webImage && item.webImage.url? item.webImage.url
                                            : 'https://d1nhio0ox7pgb.cloudfront.net/_img/o_collection_png/green_dark_grey/512x512/plain/sign_forbidden.png'} 
                                        />
                                </ItemGrid>
                            );
                        })
                    }
                </PictureGrid>
            </Card>
        );
    }
}
export default PictureResult;