import { RoutePaths } from "../utils/enum";
import Login from "../Pages/Login";
import Registration from "../Pages/Register";
import Book from "../Pages/Book";
import Home from "../Pages/Home";
import { Navigate, Route, Routes } from "react-router-dom";
import { useAuthContext } from "../context/auth";

const MainNavigation = () => {
  const authContext = useAuthContext();

  const Redirect = <Navigate to={RoutePaths.Login} />;

  return (
    <Routes>
      <Route
        exact
        path={RoutePaths.Home}
        element={
          authContext.user.id ? <Navigate to={RoutePaths.Book} /> : Redirect
        }
      />
      <Route exact path={RoutePaths.Login} element={<Login />} />
      <Route exact path={RoutePaths.Registation} element={<Registration />} />
      <Route
        exact
        path={RoutePaths.Book}
        element={authContext.user.id ? <Book /> : Redirect}
      />
      <Route
        exact
        path={RoutePaths.EditCategory}
        element={authContext.user.id ? <Home /> : Redirect}
      />
      <Route
        exact
        path={RoutePaths.Other}
        element={authContext.user.id ? <Book /> : Redirect}
      />
    </Routes>
  );
};

export default MainNavigation;