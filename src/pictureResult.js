import './style.css';

import React, { Component } from 'react';

class PictureResult extends Component {
    constructor(props){
        super(props)
    }
    render() {
        return(
            <div className="picturePanel" >
                <div className="headerPicture">
                    {this.props.keyword} 
                    <div style = {{ fontSize: '24px', display: 'inline'}}> 
                        { this.props.result.length>1? ' ( ' + this.props.result.length + ` results )` : 
                            this.props.result.length == 1 ? ' ( ' + this.props.result.length + ` result )`: ''}
                    </div>
                </div> 
                {
                    this.props.result.map((item) => {
                        return (
                           <img className="pictureItem" src={item.webImage && item.webImage.url? item.webImage.url: 'https://d1nhio0ox7pgb.cloudfront.net/_img/o_collection_png/green_dark_grey/512x512/plain/sign_forbidden.png'} />
                        );
                    })
                }

            </div>
        );
    }
}
export default PictureResult