import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { DefaultLayout } from "layouts/DefaultLayout";
import privateRoutes from "routes/private";
import { connect } from "react-redux";
import "antd/dist/antd.css";
import "./index.sass";
import _public from "routes/public";
import { initSocket } from "webscokets";

class App extends React.Component {
  render() {
    const { token } = this.props;
    if (!token)
      return (
        <Switch>
          {_public.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              exact={route.exact}
              component={(props) => <route.component {...props} />}
            />
          ))}
          <Redirect to="/"></Redirect>
        </Switch>
      );
    initSocket(token);
    return (
      <DefaultLayout>
        <Switch>
          {privateRoutes.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              exact={route.exact}
              component={(props) => <route.component {...props} />}
            />
          ))}
          <Redirect to="/"></Redirect>
        </Switch>
      </DefaultLayout>
    );
  }
}
export default connect(
  (state) => ({
    token: state.user.token,
  }),
  {}
)(App);
