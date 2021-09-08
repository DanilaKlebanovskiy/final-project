import "./App.css";
import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import store from "./redux/reduxStore";
import Header from "./components/Header/Header";
import MainPageContainer from "./Pages/MainPage/MainPageContainer";
import CaughtPokContainer from "./Pages/CaughtPokemonsPage/CaughtPokContainer";
import PokemonPageContainer from "./Pages/PockemonPage/PokContainer";

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <div className="document_container">
          <Header />
          <div className="page">
            <Switch>
              <Route exact path="/" render={() => <Redirect to="/main" />} />
              <Route path="/main" render={() => <MainPageContainer />} />
              <Route exact path="/pokemon/:pokemonId">
                <PokemonPageContainer />
              </Route>
              <Route path="/caught" render={() => <CaughtPokContainer />} />
              <Route path="*" render={() => <div>404 NOT FOUND</div>} />
            </Switch>
          </div>
        </div>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
