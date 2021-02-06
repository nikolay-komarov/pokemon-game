import {Switch, Route, useRouteMatch, Redirect} from "react-router-dom";
import firebase from 'firebase';

import HomePage from "./routes/Home";
import GamePage from "./routes/Game";
import AboutPage from "./routes/About";
import ContactPage from "./routes/Contact";
import NotFoundPage from "./routes/NotFound";
import MenuHeader from "./components/MenuHeader";
import Footer from "./components/Footer";

import s from './style.module.css';
import cn from 'classnames';

const firebaseConfig = {
  apiKey: "AIzaSyBXTTR5uk2qfCOOjNs96kT3xboVdJxxMKM",
  authDomain: "pokemon-game-f1cd5.firebaseapp.com",
  databaseURL: "https://pokemon-game-f1cd5-default-rtdb.firebaseio.com",
  projectId: "pokemon-game-f1cd5",
  storageBucket: "pokemon-game-f1cd5.appspot.com",
  messagingSenderId: "741711014630",
  appId: "1:741711014630:web:12004543300bfcd8e92927"
};

firebase.initializeApp(firebaseConfig);
const database = firebase.database();
database.ref('pokemons').once('value', (snapshot) => {
  console.log('pokemons from firebase ' ,snapshot.val());
});

const App = () => {
  const match = useRouteMatch('/');

  return (
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
  );
};

export default App;
