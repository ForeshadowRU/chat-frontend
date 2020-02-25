import React from "react";
import { Provider } from "react-redux";
import { Router, Route, Switch } from "react-router-dom";
import { store } from "./redux";
import routes from "./routes";

import { history } from "./helpers/history";

function App() {
  return (
    <Router history={history}>
      <Provider store={store}>
        <Switch>
          {routes.map((route, index) => {
            return (
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                component={props => {
                  return <route.component {...props} />;
                }}
              />
            );
          })}
        </Switch>
      </Provider>
    </Router>
  );
}

export default App;
