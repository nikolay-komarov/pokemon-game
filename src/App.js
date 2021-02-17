import {Switch, Route, useLocation, Redirect} from "react-router-dom";

import HomePage from "./routes/Home";
import GamePage from "./routes/Game/";
import AboutPage from "./routes/About";
import ContactPage from "./routes/Contact";
import NotFoundPage from "./routes/NotFound";
import MenuHeader from "./components/MenuHeader";
import Footer from "./components/Footer";

import {FirebaseContext} from './context/firebaseContext';

import Firebase from './service/firebase';

import {createStore, bindActionCreators} from "redux";
import rootReducer, * as actions from "./store/counter";

import s from './style.module.css';
import cn from 'classnames';

const store = new createStore(rootReducer);
store.subscribe(() => console.log(store.getState()));
const {plusAction} = bindActionCreators(actions, store.dispatch);
plusAction(5);


const App = () => {
  const location = useLocation();
  const isPadding = location.pathname === '/' || location.pathname === '/game/board';

  return (
    <FirebaseContext.Provider value={new Firebase()}>
      <Switch>
        <Route path="/404" component={NotFoundPage} />
        <Route>
          <>
            <MenuHeader bgActive={!isPadding}/>
            <div className={cn(s.wrap, {[s.isHomePage]: isPadding})}>
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
