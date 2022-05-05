/*
 * Connect component
 * Login / Register
 * Objectif : Gérer un affichage conditionnel
 *
 * Documentation
 * https://fr.reactjs.org/docs/conditional-rendering.html
 *
 * Le composant Connect
 * - permet de sélectionner soit le login, soit le register (de simples boutons)
 * - Affiche un message "Login" ou "Register"
 * - Au click sur le bouton "Login" ou "Register",
 *   tout le contenu doit être remplacer :
 *   - un message : "Vous êtes loggué !" ou "Vous êtes inscrit !"
 *   - un bouton "Retour" qui permet de revenir à la connection
 */
import React from "react";
import Login from "./Login";

const CONNECTION_MODE = {
  LOGIN: "LOGIN",
  REGISTER: "REGISTER"
};

class Connection extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      mode: CONNECTION_MODE.LOGIN,
      connected: false,
      credentials: null
    };

    this.handleClickSwitch = this.handleClickSwitch.bind(this);
    this.handleValidateLogin = this.handleValidateLogin.bind(this);
  }

  handleClickToggleConnected(toggle) {
    this.setState({
      connected: toggle
    });
  }

  handleClickSwitch() {
    this.setState({
      credentials: null,
      mode:
        this.state.mode === CONNECTION_MODE.LOGIN
          ? CONNECTION_MODE.REGISTER
          : CONNECTION_MODE.LOGIN
    });
  }

  handleValidateLogin(credentials) {
    this.setState({
      connected: true,
      credentials
    });
  }

  render() {
    const { mode, connected, credentials } = this.state;

    return (
      <div className="main">
        <h1>Connection</h1>

        {connected ? "Connected" : "Not connected"}

        {!connected && (
          <>
            <div className="connectionSelection">
              <p>Sélectionnez votre mode de connexion</p>
              <button onClick={this.handleClickSwitch}>Switch mode</button>
            </div>

            <div className="connectionMain">
              {mode === CONNECTION_MODE.LOGIN ? (
                <Login onClick={this.handleValidateLogin} />
              ) : (
                <button onClick={() => this.handleClickToggleConnected(true)}>
                  Register
                </button>
              )}
            </div>
          </>
        )}

        {connected && (
          <div className="connectionMessage">
            <p>
              Vous êtes{" "}
              {mode === CONNECTION_MODE.LOGIN ? "loggué !" : "inscrit !"}
            </p>
            {credentials && <p>{credentials.email}</p>}
            <button onClick={() => this.handleClickToggleConnected(false)}>
              Back
            </button>
          </div>
        )}
      </div>
    );
  }
}

export default Connection;
