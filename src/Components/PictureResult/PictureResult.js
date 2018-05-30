import './style.css';

import React, { Component } from 'react';

class PictureResult extends Component {
    constructor(props){
        super(props)
    }
    render() {
        return(
            <div className="picturePanel" >
                <div className="header">
                    <div className="keyword">{ this.props.keyword }</div>
                    <div className="smallKeyword">
                        { this.props.loading? ' ( loading )' : 
                            this.props.keyword? this.props.result.length>1? ' ( ' + this.props.result.length + ` results )` : 
                                ' ( ' + this.props.result.length + ` result )` :
                            ''
                        }
                    </div>
                </div>
                {
                    this.props.result.map((item) => {
                        return (
                            <div className="pictureItem">
                                <div className="pictureDetail">
                                    <div className="detailLine">title: {item.title? item.title: '-'}</div>
                                    <div className="detailLine">production place: {item.productionPlaces.length>0? item.productionPlaces.join(','): '-'}</div>
                                    <div className="detailLine">principal: {item.principalOrFirstMaker? item.principalOrFirstMaker: '-'}</div>
                                    <a href={item.links.web} className="detailLink">...More...</a>
                                </div>
                                <img className="picture" src={item.webImage && item.webImage.url? item.webImage.url: 'https://d1nhio0ox7pgb.cloudfront.net/_img/o_collection_png/green_dark_grey/512x512/plain/sign_forbidden.png'} />
                            </div>
                        );
                    })
                }

            </div>
        );
    }
}
export default PictureResult;