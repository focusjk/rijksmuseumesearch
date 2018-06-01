import "./style.css";

import React, { Component } from "react";

import { Card } from "../style";
import PictureItem from "../PictureItem";
import PropTypes from "prop-types";
import styled from "styled-components";

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
  font-family: Courier;
  width: 100%;
`;
const HeaderKeyword = styled.div`
  font-size: 4.5vw;
  font-weight: bold;
  display: inline;
`;
const HeaderKeywordSmall = HeaderKeyword.extend`
  font-size: 2.5vw;
  font-weight: normal;
`;

class PictureResult extends Component {
  static propTypes = {
    keyword: PropTypes.string,
    loading: PropTypes.bool,
    result: PropTypes.shape()
  };
  constructor(props) {
    super(props);
  }
  render() {
    const { keyword, loading, result } = this.props;
    return (
      <Card backgroundColor="rgb(255,212,159)">
        <PictureGrid>
          <HeaderGrid>
            <HeaderKeyword>{keyword}</HeaderKeyword>
            <HeaderKeywordSmall>
              {loading && " ( loading )"}
              {!loading &&
                keyword &&
                (result.length > 1
                  ? " ( " + result.length + ` results )`
                  : " ( " + result.length + ` result )`)}
            </HeaderKeywordSmall>
          </HeaderGrid>
          {result.map(item => {
            return <PictureItem {...item} />;
          })}
        </PictureGrid>
      </Card>
    );
  }
}
export default PictureResult;
