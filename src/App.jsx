import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import publicRoutes from "routes/public";
import { DefaultLayout } from "layouts/DefaultLayout";
import privateRoutes from "routes/private";
import { connect } from "react-redux";
import PageNotFound from "routes/services/404";
import "./index.sass";
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
    return (
      <DefaultLayout>
        <Switch>
          {privateRoutes.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              exact={route.exact}
              component={props => <route.component {...props} />}
            />
          ))}
          <Redirect to="/" />
        </Switch>
      </DefaultLayout>
    );
  };

  render() {
    const { user } = this.props;
    if (user.token) {
      return this.getPrivateRoutes();
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
