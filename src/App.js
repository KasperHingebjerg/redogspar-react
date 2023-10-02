import React, { useState } from 'react';
import dataService from './services/data';
import Header from './components/Header';
import Stores from './components/Stores';
import Spot from './components/Spot';
import About from './components/About';
import Terms from './components/Terms';
import LoadingBox from './components/LoadingBox';

function App() {
  // application state
  const [data, setData] = useState(null);
  const [showterms, setShowterms] = useState(false);
  const [kilometers, setKilometers] = useState(10);
  const [message, setMessage] = useState(null); // Til at gemme meddelelser
  const [showMessage, setShowMessage] = useState(false); // Til at spore hentningsstatus af data

  const getGeolocation = () => {
    setShowMessage(true);
    setMessage('Henter din lokalitet...');
    return new Promise(async (resolve, reject) => {
      if ('geolocation' in navigator) {
        try {
          const position = await new Promise((innerResolve, innerReject) => {
            navigator.geolocation.getCurrentPosition(
              innerResolve,
              innerReject,
              {
                enableHighAccuracy: false,
                timeout: 10000,
                maximumAge: 0,
              }
            );
          });
  
          const latitude = position.coords.latitude;
          const longitude = position.coords.longitude;
          console.log('Geolokation hentet:', latitude, longitude);
          setMessage("Søger efter datovare...");
          resolve({ latitude, longitude }); // Resolv Promise med geolokationsdataen
        } catch (error) {
          console.error('Fejl ved at hente geolokation:', error);
          reject(error); // Reject Promise ved fejl
        }
      } else {
        console.error('Geolokation er ikke understøttet i denne browser.');
        reject(new Error('Geolokation er ikke understøttet i denne browser.'));
      }
    });
  };
  

  

// handlers
const handleSearch = async () => {
  try {
    setShowMessage(true); // Vis "Henter din lokalitet..."
    setMessage('Henter din lokalitet...'); // Opdater meddelelsen
    const geolocationData = await getGeolocation(); // Hent geolokation kun hvis den ikke allerede er tilgængelig

    // Nu kan du sikkert bruge geolocationData til at hente data fra API'et
    const initialData = await dataService.getData(geolocationData.latitude, geolocationData.longitude, kilometers);
    setData(initialData);
  } catch (error) {
    console.error('Fejl ved at hente geolokation eller data:', error);
  } finally {
    setShowMessage(false); // Skjul meddelelsen uanset om det lykkedes eller mislykkedes
  }
};


  const handleShowterms = () => {
    setShowterms(!showterms);
  }

  return (
    <div>
      <Header handleSearch={handleSearch} kilometers={kilometers} setKilometers={setKilometers} handleShowterms={handleShowterms} />
      {data ? <Stores data={data} /> : null}
      <Spot />
      <About />
      {showterms ? <Terms handleShowterms={handleShowterms} /> : null}
      {showMessage ? <LoadingBox message={message} /> : null}
    </div>
  );
}

export default App;
