import React from "react";
import Gist from "./Gist";
import styled from "styled-components";

const StyledList = styled.div`
  margin-top: 1rem;
`;
// gist list component
function GistList({ list }) {
  return (
    <StyledList>
      {list?.length > 0 &&
        list.map((item) => <Gist key={item.id} gistItem={item} />)}
    </StyledList>
  );
}
export default GistList;
