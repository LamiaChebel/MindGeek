import React from "react";
import { Link } from "react-router-dom";

function Nav(){

    return(
        <nav>
        <Link to={"./"}>Accueil</Link>
        <Link to={"./"}>Serveur Mutualisé</Link>
        <Link to={"./"}>Serveur Dédié</Link>
        <Link to={"./"}>Solution Cloud</Link>
        <Link to={"./"}>Contact</Link>
        <Link to={"./"}>Se connecter</Link>
        </nav>
    
    )
}
export default Nav;