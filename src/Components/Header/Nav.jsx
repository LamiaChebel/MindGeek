import { Link } from "react-router-dom";

import {faUser} from "../../assets/FontAwesome/fontawesome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Nav() {
    return (
        <nav>
            <Link to={"Serveur_Mutualise"}>
                <FontAwesomeIcon icon={faUser} />
                Serveur Mutualisé
            </Link>

            <Link to={"Serveur_Dedie"}>
            <FontAwesomeIcon icon={faUser} />
                Serveur Dédié
            </Link>

            <Link to={"Serveur_Cloud"}>
            <FontAwesomeIcon icon={faUser} />
                Serveur Cloud
            </Link>

            <Link to={"Contact"}>
            <FontAwesomeIcon icon={faUser} />
                Contact
            </Link>

        </nav>

    )
}
export default Nav;