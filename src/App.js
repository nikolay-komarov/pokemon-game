import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Switch, Route, useLocation, Redirect} from "react-router-dom";
import {NotificationContainer} from 'react-notifications';

import HomePage from "./routes/Home";
import GamePage from "./routes/Game/";
import AboutPage from "./routes/About";
import ContactPage from "./routes/Contact";
import NotFoundPage from "./routes/NotFound";
import MenuHeader from "./components/MenuHeader";
import Footer from "./components/Footer";
import UserPage from "./routes/User";

import PrivateRoute from "./components/PrivateRoute";

import s from './style.module.css';
import 'react-notifications/lib/notifications.css';
import cn from 'classnames';

import {getUserAsync, selectUserLoading} from "./store/user";

const App = () => {
  const isUserLoading = useSelector(selectUserLoading);
  const location = useLocation();
  const isPadding = location.pathname === '/' || location.pathname === '/game/board';
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserAsync());
  }, []);

  if (isUserLoading) {
    return 'Loading...';
  }

  return (
    <>
      <Switch>
        <Route path="/404" component={NotFoundPage} />
        <Route>
          <>
            <MenuHeader bgActive={!isPadding}/>
            <div className={cn(s.wrap, {[s.isHomePage]: isPadding})}>
              <Switch>
                <Route path="/" exact component={HomePage} />
                <Route path="/home" render={() => <Redirect to="/" />} />
                <PrivateRoute path="/game" component={GamePage} />
                <PrivateRoute path="/about" component={AboutPage} />
                <PrivateRoute path="/contact" component={ContactPage} />
                <PrivateRoute path="/user" component={UserPage} />
                <Route render={() => <Redirect to="/404" />} />
              </Switch>
            </div>
            <Footer />
          </>
        </Route>
      </Switch>
      <NotificationContainer />
    </>
  );
};

export default App;
