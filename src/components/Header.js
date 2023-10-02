import React from 'react'

const Header = ({ handleSearch, kilometers, setKilometers, handleShowterms }) => {

    return (

        <header>
        <div className="title">
          <h1>
            Red<span className="titleOg"> & </span>
            <span className="secondary">Spar</span>
          </h1>
          <h4 className="tagline">🌳 for klimaet og pengepungen 💰</h4>
        </div>
        <div className="searchbox">
          <div className="splat">
            <h3 className="splattext">Skynd dig </h3>
            <p className="splattextsmall">Inden andre køber de gode tilbud før dig.</p>
          </div>
          <div>
            <h5 className="searchboxtextHeader">
              Søg efter datovarer i butikker nær dig
            </h5>
            <h6>
              Inden for<span className="kilometerSliderText"> {kilometers} km </span>fra
              din placering
            </h6>
            <input
              type="range"
              min="1"
              max="50"
              value={kilometers}
              onChange={(e) => 
                setKilometers(e.target.value)}
              id="kilometerSlider"
              className="slider"
            />
            <button onClick={handleSearch}>Søg</button>
            <button onClick={handleShowterms} className="buttonLink">Se regler og vilkår for brug af Red & Spar</button>
          </div>
        </div>
      </header>

    )
}
export default Header

