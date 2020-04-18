import React from "react";
import { Route, Switch } from "react-router-dom";
import { DefaultLayout } from "layouts/DefaultLayout";
import privateRoutes from "routes/private";
import { connect } from "react-redux";
import "./index.sass";
class App extends React.Component {
  render() {
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
        </Switch>
      </DefaultLayout>
    );
  }
}
export default connect((state) => ({}), {})(App);
