import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
// custom imports
import Gist from "./Gist";

const GistWrapper = styled.div`
  width: 60%;
  margin-left: auto;
  margin-right: auto;
  @media (max-width: 768px) {
    width: 100%;
    padding: 20px;
  }
`;
// gist list component
function GistList({ gists }) {
  return (
    <GistWrapper>
      {gists?.length > 0 &&
        gists.map((gist) => <Gist key={gist.id} gist={gist} />)}
    </GistWrapper>
  );
}
//Props Param Type Checking
GistList.propTypes = {
  gists: PropTypes.array,
};
export default GistList;
