import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Octicon from "react-octicon";
import Search from "./Search";

function Header({ onChange, value, filterGist }) {
  return (
    <Wrapper>
      <Octicon name="mark-github" mega />
      <Search filterGist={filterGist} onChange={onChange} value={value} />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background-color: #24292e;
  color: #ffffff;
  z-index: 32;
  padding: 16px;
  font-size: 14px;
  line-height: 1.5;
  display: flex;
  align-items: center;
`;
// param type checking
Header.propTypes = {
  onChange: PropTypes.func.isRequired,
  filterGist: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};
export default Header;
