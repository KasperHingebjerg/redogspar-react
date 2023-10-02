import React from 'react'

const About = () => {

    return (

        <section className="about">
        <div>
          <img className="profilPicture" src="kaspermarkus.jpeg" alt="Kasper Hingebjerg Markus" />
        </div>
        <div>
          <h2>Personen bag</h2>
          <p>
            Red & Spar er et hobby projekt der undersøger hvordan man kan
            bruge data til at gøre noget godt for klimaet. Og så er det jo en
            bonus at man også kan spare penge.
          </p>
          <p>Alt data kommer fra Salling Groups API.</p>
          <p className="bold">Kasper Hingebjerg Markus</p>
            <a href="mailto:Kasper.Hingebjerg.Nielsen@gmail.com">Mail </a>
            <a href="https://www.linkedin.com/in/kasperhingebjergnielsen/"> LinkedIn</a>
        </div>
      </section>

    )
}
export default About

