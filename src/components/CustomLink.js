/**
 * Creating a custom component in order to reuse in multiple location
 */

import React from "react";
import styled from "styled-components";

//Styled Component 
const StyledList = styled.a`
  text-decoration: none;
  margin-right: 1rem;
  color: #00f;
`;
// link component
function CustomLink({ label, href }) {
  return (
    <StyledList target="_blank" href={href}>
      {label}
    </StyledList>
  );
}
export default CustomLink;
