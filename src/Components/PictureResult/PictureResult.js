import './style.css';

import React, { Component } from 'react';

import PictureItem from '../PictureItem';

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
                            <PictureItem item={item} />
                        );
                    })
                }

            </div>
        );
    }
}
export default PictureResult;