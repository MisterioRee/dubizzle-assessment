import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import GistList from "./components/GistList";
import Header from "./components/Header";
import GlobalStyles from "./GlobalStyle";
import { loadAllGist, filterGistByUsername } from "./store/GistActions";

const Alert = styled.div`
  margin: 5rem auto;
  width: 15rem;
  font-size: 2rem;
`;

function App({ loadAllGist, gistList, isLoading, filterGistByUsername }) {
  const [username, setUsername] = useState("");

  // on change input value
  function handleChange(e) {
    setUsername(e.target?.value);
  }

  // get list of gist when component is render
  useEffect(() => {
    loadAllGist();
  }, []);

  function filterGist() {
    filterGistByUsername(username);
  }

  return (
    <Wrapper className="App" data-testid="app">
      <Header
        filterGist={filterGist}
        onChange={handleChange}
        value={username}
      />
      {isLoading ? (
        <Alert>Loading...</Alert>
      ) : gistList?.length <= 0 ? (
        <Alert>No Gist found.</Alert>
      ) : (
        <GistList list={gistList} />
      )}
      <GlobalStyles />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  font-size: 14px;
  line-height: 1.5;
`;

const mapStateToProps = (state) => ({
  isLoading: state.Gist.isLoading,
  gistList: state.Gist.gistList,
});

export default connect(mapStateToProps, {
  loadAllGist,
  filterGistByUsername,
})(App);
