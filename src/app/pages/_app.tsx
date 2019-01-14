import App, { Container } from "next/app";
import Header from "../components/Header/index";
import styled from "styled-components";
export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <Container>
        <Header />
        <ContentsWrapper>
          <Component {...pageProps} />
        </ContentsWrapper>
      </Container>
    );
  }
}

const ContentsWrapper = styled.div`
  text-align: center;
`;
