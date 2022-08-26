import React, { Component } from "react";
import Card from "./Components/Card";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body{
    background-color: brown;
  }
  h1{
    color: pink;
  }
  h2{
    color: pink
  }

`;

export default class App extends Component {
  render() {
    return (
      <>
        <GlobalStyle />
        <Header
          comida="Lasanha."
          nome="Matheus"
          idade={30}
          profissao="Programação."
        />

        <Footer></Footer>
      </>
    );
  }
}
