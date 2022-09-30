import React from "react";
import pho1 from "../../Images/pho1.avif";

const AboutPage = () => {
  return (
    <div>
      <div className="about">
        <h1>About Whatcha Lookin Pho</h1>
        <section>
          <h2>History of Pho</h2>
          <p>
            Phở or pho is a Vietnamese soup dish consisting of broth, rice
            noodles, herbs, and meat. Pho is a popular food in Vietnam where it
            is served in households, street stalls and restaurants countrywide.
            Nam Định people were the first to create Vietnamese traditional pho.
            Pho is considered Vietnam's national dish.
          </p>
        </section>

        <section>
          <h2>Why Whatcha Lookin Pho ?</h2>
          <p>
            Whatcha Lookin Pho was created for the Pho Lovers. Our goal is to
            provide Pho Lovers with a one stop site which caters strictly to all
            those who just want to see Pho options. Either in their local area
            or in a different location.
          </p>
        </section>
        <img src={pho1} alt="pho" />
      </div>
    </div>
  );
};

export default AboutPage;
