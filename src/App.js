import {Switch, Route, useRouteMatch, Redirect} from "react-router-dom";

import HomePage from "./routes/Home";
import GamePage from "./routes/Game/";
import AboutPage from "./routes/About";
import ContactPage from "./routes/Contact";
import NotFoundPage from "./routes/NotFound";
import MenuHeader from "./components/MenuHeader";
import Footer from "./components/Footer";

import {FirebaseContext} from './context/firebaseContext';

import Firebase from './service/firebase';

import s from './style.module.css';
import cn from 'classnames';

const App = () => {
  const match = useRouteMatch('/');

  return (
    <FirebaseContext.Provider value={new Firebase()}>
      <Switch>
        <Route path="/404" component={NotFoundPage} />
        <Route>
          <>
            <MenuHeader bgActive={!match.isExact}/>
            <div className={cn(s.wrap, {[s.isHomePage]: match.isExact})}>
              <Switch>
                <Route path="/" exact component={HomePage} />
                <Route path="/home" render={() => <Redirect to="/" />} />
                <Route path="/game" component={GamePage} />
                <Route path="/about" component={AboutPage} />
                <Route path="/contact" component={ContactPage} />
                <Route render={() => <Redirect to="/404" />} />
              </Switch>
            </div>
            <Footer />
          </>
        </Route>
      </Switch>
    </FirebaseContext.Provider>
  );
};

export default App;
