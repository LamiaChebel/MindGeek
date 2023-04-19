import { Link } from "react-router-dom";

function Logo(){
    return (
        <Link to={"/"} title="Retour à la page d'accueil"></Link>
    )
}

export default Logo;

<a href="./" title="Retour à la page d'accueil">
<img src="../assets/img/logo.png" alt="Logo du site" />
</a>
