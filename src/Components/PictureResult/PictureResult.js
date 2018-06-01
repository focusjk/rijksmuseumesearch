import './style.css';

import React, { Component } from 'react';

import PictureItem from '../PictureItem';
import PropTypes from 'prop-types'

class PictureResult extends Component {
    static propTypes = {
        keyword : PropTypes.string,
        loading : PropTypes.bool,
        result : PropTypes.shape(),
    }
    constructor(props){
        super(props)
    }
    render() {
        const {keyword, loading, result} = this.props;
        return(
            <div className="picturePanel" >
                <div className="header">
                    <div className="keyword">{ keyword }</div>
                    <div className="smallKeyword">
                        {loading? ' ( loading )' : 
                            keyword? result.length>1? ' ( ' + result.length + ` results )` : 
                                ' ( ' + result.length + ` result )` :
                            ''
                        }
                    </div>
                </div>
                {
                    result.map((item) => {
                        return (
                            <PictureItem {...item} />
                        );
                    })
                }

            </div>
        );
    }
}
export default PictureResult;