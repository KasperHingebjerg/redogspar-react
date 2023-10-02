import React from 'react'

const Stores = (product) => {

  const correntProduct = product.product

  // Formated date
  const LastUpdate = (date) => {
    // Tjek om strengen er tom, og undgå fejl, hvis det er tilfældet.
    if (!date) return null;
    const lastUpdateString = date;
    const lastUpdateDate = new Date(lastUpdateString);
    const day = lastUpdateDate.getDate().toString().padStart(2, '0');
    const month = (lastUpdateDate.getMonth() + 1).toString().padStart(2, '0');
    const year = lastUpdateDate.getFullYear();

    const formattedDate = `${day}-${month}-${year}`;

    return formattedDate
  };

  return (

    <div className="productCard">
      <div className="productDiscountBox">
        <h5>Spar {correntProduct.offer.percentDiscount.toFixed(0)}%</h5>
      </div>
      <div className="productInfo">
        <div className="productPicture">
          <img src={correntProduct.product.image ? correntProduct.product.image : "noimage.png"} alt={correntProduct.product.description} />
        </div>
        <p className="productTitle">{correntProduct.product.description}</p>
        <p className="productDate">Udløber {LastUpdate(correntProduct.offer.endTime)}</p>
        <div className="productPriceWrapper">
          <p className="productNormalPrice">før {correntProduct.offer.originalPrice} kr.</p>
          <p className="productPrice">{correntProduct.offer.newPrice}<span className='productPriceKR'> kr.</span></p>
        </div>
      </div>
    </div>

  )
}
export default Stores

