import { Link } from "react-router-dom";

import logo from "../src/assets/img/logo.png";

function Logo(){
    return (

        <Link to={"/"} title="Retour à la page d'accueil">
            <img src={logo} alt="Logo du site" />
        </Link>
    )
}

export default Logo;

