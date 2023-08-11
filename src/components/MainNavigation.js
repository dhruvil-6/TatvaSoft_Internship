import { RoutePaths } from "../utils/enum";

import Login from "../Pages/Login";
import Register from "../Pages/Register";
import Book from "../Pages/Book";
import Home from "../Pages/Home";
import BookListing from "../Pages/BookListing";
import EditBook from "../Pages/EditBook";
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
        element={authContext.user.id ? <BookListing /> : Redirect}
      />
      <Route exact path={RoutePaths.Login} element={<Login />} />
      <Route exact path={RoutePaths.Register} element={<Register />} />
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
        element={authContext.user.id ? <BookListing /> : Redirect}
      />
      <Route
        exact
        path={RoutePaths.EditBook}
        element={authContext.user.id ? <EditBook /> : Redirect}
      />
      <Route
        exact
        path={RoutePaths.AddBook}
        element={authContext.user.id ? <EditBook /> : Redirect}
      />
    </Routes>
  );
};

export default MainNavigation;