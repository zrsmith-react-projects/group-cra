import React, { useState } from "react";
import "./App.css";
import Header from "./component/Header.js";
import Photo from "./component/Photo.js";
import styled from "styled-components";

const App = () => {
  const [profileName, setProfileName] = useState("Dr Z");
  const [title, setTitle] = useState("NASA Photo of the Day");

  const AppStyle = styled.div`
    background-image: url("https://images.unsplash.com/photo-1548475390-f6908921aaf8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80");
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    max-width: 1200px;
    width: 100%;
    margin: 0 auto;
    height: 800px;
  `;

  return (
    <AppStyle className="App">
      <Header name={profileName} title={title} />
      <Photo title={title} />
    </AppStyle>
  );
};

export default App;
