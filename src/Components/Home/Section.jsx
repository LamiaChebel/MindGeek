import React from "react";

import Article from "./Article";

function Section() {

    const heading = ["Notre solution en 3 points",
        "Choisissez votre style d'hébergement"];

    return (
        <section>
            <h2>{heading.map((h, i) => { h[i] })}</h2>
            <Article />
            <Article />
            <Article />
        </section>
    )
}
export default Section;
//cela change avec h2 et 3*articles