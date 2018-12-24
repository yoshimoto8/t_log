import App, { Container } from "next/app";
import SideBar from "../components/SideBar";

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <Container>
        <ContainerWrapper>
          <SideBar />
          <Component {...pageProps} />
        </ContainerWrapper>
      </Container>
    );
  }
}
