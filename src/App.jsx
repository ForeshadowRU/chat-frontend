import React from "react";
import { Route, Switch } from "react-router-dom";
import publicRoutes from "routes/public";
import { DefaultLayout } from "layouts/DefaultLayout";
import privateRoutes from "routes/private";
import { connect } from "react-redux";
import PageNotFound from "routes/services/404";

class App extends React.Component {
  getPublicRoutes = () => {
    return publicRoutes.map((route, index) => (
      <Route
        key={index}
        path={route.path}
        exact={route.exact}
        component={props => <route.component {...props} />}
      />
    ));
  };
  getPrivateRoutes = () => {
    return privateRoutes.map((route, index) => (
      <Route
        key={index}
        path={route.path}
        exact={route.exact}
        component={props => <route.component {...props} />}
      />
    ));
  };

  render() {
    const { user } = this.props;
    if (user.token) {
      alert(this.getPrivateRoutes());
      return <Switch>{this.getPrivateRoutes()}</Switch>;
    }
    return <Switch>{this.getPublicRoutes()}</Switch>;
  }
}
export default connect(
  state => ({
    user: state.user
  }),
  {}
)(App);
