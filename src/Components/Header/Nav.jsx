import { Link } from "react-router-dom";

import FaUser from "./FaUser";

function Nav() {
    return (
        <nav>
            <Link to={"Serveur_Mutualise"}>
                <FaUser />
                Serveur Mutualisé
            </Link>

            <Link to={"Serveur_Dedie"}>
                <FaUser />
                Serveur Dédié
            </Link>

            <Link to={"Serveur_Cloud"}>
                <FaUser />
                Serveur Cloud
            </Link>

            <Link to={"Contact"}>
                <FaUser />
                Contact
            </Link>

        </nav>

    )
}
export default Nav;