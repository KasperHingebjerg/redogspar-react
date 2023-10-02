import React from 'react'
import Productcard from './Productcard'

const Stores = (store) => {

  const correntStore = store.store.store
  const products = store.store.clearances

  const FirstLetterUpperCase = (text) => {
    // Tjek om strengen er tom, og undgå fejl, hvis det er tilfældet.
    if (!text) return null;
  
    const firstLetter = text.charAt(0); // Første bogstav
    const restOfString = text.slice(1); // Resten af strengen
  
    // Saml den formaterede tekst med det første bogstav i stort
    const formattedText = firstLetter.toUpperCase() + restOfString;
    
    return formattedText
  };


  return (


    <div className="store">
      <div className="storeInfo">
        <h5 className="storeName">{FirstLetterUpperCase(correntStore.name)} </h5>
        <p className="storeDistance">- {correntStore.distance_km} km</p>
        <p className="storeAdress">{correntStore.address.street}, {correntStore.address.zip} {correntStore.address.city}</p>
      </div>
      <div className="products">
      {products.map(product =>
    <Productcard key={product.product.ean} product={product} />
  )}
      </div>
    </div>

  )
}
export default Stores

