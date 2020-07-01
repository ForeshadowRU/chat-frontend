import HomePage from "modules/HomePage";
import Profile from "modules/Profile";

export default [
  {
    path: "/",
    exact: true,
    component: HomePage,
  },
  {
    path: "/profiles/:id",
    exact: true,
    component: Profile,
  },
];
