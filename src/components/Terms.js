import React from 'react'

const Terms = ({handleShowterms}) => {

    return (

        <section className="terms-background">
        <div className="terms">
          <h4>Regler og vilkår</h4>
          <p>Opdateret 22. juni 2023</p>

          <p>
            RedogSpar.dk er et privat hobby projekt som har til formål at
            minimere madspild.
          </p>

          <p>Hjemmesiden er udviklet af Kasper Hingebjerg Markus.</p>
          <p>
            Ved at brugeRedogSpar.dk accepterer du at være bundet af og
            overholde disse regler og vilkår. Hvis du ikke accepterer disse
            regler og vilkår, beder jeg dig om ikke at bruge hjemmesiden.
          </p>
          <p>
            RedogSpar.dk forbeholder sig til enhver tid ret til at revidere
            eller på anden måde ændre disse regler og vilkår. Hvis intet andet
            angives, gælder sådanne ændringer med øjeblikkelig virkning. Du
            bør derfor regelmæssigt gennemgå de gældende regler og vilkår, du
            er bundet af.
          </p>
          <p>
            RedogSpar.dk oplyser, hvornår denne side sidst blev opdateret, som
            det fremgår af datoen i toppen af disse regler og vilkår.
          </p>
          <h4>Pris- og produktinformationer</h4>
          <p>
            Pris- og produktinformationer samt andre oplysninger blever
            stillet til rådighed af Salling Group developer program (
            <a href="https://developer.sallinggroup.com/">https://developer.sallinggroup.com/</a>
            ).
          </p>
          <p>
            RedogSpar.dk's hensigt er, at alle oplysninger på hjemmesiden skal
            være så korrekt og aktuelt som muligt. RedogSpar.dk kan dog ikke
            garantere pålideligheden eller nøjagtigheden af de oplysninger,
            der præsenteres på hjemmesiden. Derfor opfordre RedogSpar.dk
            brugerene af hjemmesiden til at undersøge pris- og
            produktinformationer, før de køber noget fra butikker, der vises
            på RedogSpar.dk. Alle handlinger, der foretages af brugere på
            hjemmesiden, sker på den enkeltes eget ansvar.
          </p>
          <p>
            RedogSpar.dk kan ikke garantere, at alle oplysninger er korrekte
            og kan ikke holdes ansvarlig for nogle handlinger, der sker på
            grundlag af de pris- og produktinformationer, der stilles til
            rådighed.
          </p>
          <p>
            Bemærk venligst, at lagerbeholdningen ikke er opdateret i
            realtid, og derfor kan den kun bruges som en indikator. Den
            bliver opdateret, når produkterne bliver solgt, men nogle produkter
            kan nå at blive solgt før du når frem til butikken.
          </p>
          <button onClick={handleShowterms}>Luk</button>
        </div>
      </section>

    )
}
export default Terms

