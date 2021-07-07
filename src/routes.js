import React from "react";
import { Route, Switch } from "react-router-dom";
import { Layout } from "antd";

import LandingPage from "./pages/LandingPage";
import HeaderComponent from "./components/HeaderComponent";
// import FooterComponent from "./components/FooterComponent";

const { Header, Content, Footer } = Layout;

const Routes = (props) => {
  return (
    <Layout className="container">
      <Header className="header">
        <h1>footer</h1>
        {/* <HeaderComponent /> */}
      </Header>
      <Content>
        <Switch>
          <Route exact path="/" component={LandingPage} />
        </Switch>
      </Content>
      <Footer className="footer">
        <h1>footer</h1>
        {/* <FooterComponent /> */}
      </Footer>
    </Layout>
  );
};

export default Routes;
