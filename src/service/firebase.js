import firebase from 'firebase/app';
import 'firebase/database';

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

class Firebase {
  constructor() {
    this.fire = firebase;
    this.database = this.fire.database();
  }

  getPokemonsSoket = (cb) => {
    this.database.ref('pokemons/').on('value', (snapshot) => {
      cb(snapshot.val());
    })
  }

  getPokemonsOnce = async () => {
    return await this.database.ref('pokemons/').once('value').then(snapshot => snapshot.val());
  }

  postPokemon = (key, pokemon) => {
    this.database.ref(`pokemons/${key}`).set(pokemon);
  }

  addPokemon = (pokemon) => {
    const newKey = this.database.ref().child('pokemons').push().key;
    this.database.ref('pokemons/' + newKey).set(pokemon);
  }
};

export default Firebase;
