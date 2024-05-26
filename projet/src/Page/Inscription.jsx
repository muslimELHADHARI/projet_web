import React from "react";
//import "./Inscription.css"; // Import you
import { Link } from "react-router-dom";
import '../Style.scss';
function Inscription() {
  return (
    <div className="Inscription">
      <h1>Inscription</h1>
      <form name="f1">
        <p>Nom:</p>
        <input type="text"  />
        <p>Prénom:</p>
        <input type="text" />
        <p>Mail:</p>
        <input type="email"  />
        <p>Donnez votre mot de passe:</p>
        <input type="password" />
        <p>Confirmez votre mot de passe:</p>
        <input type="password" />
        <input type="button" value="S'inscrire"></input>
      </form>
      <span>Vous avez déja un Compte ?<Link to="/Login" >Identifiez-vous</Link></span>
    </div>
  );

}

export default Inscription;
