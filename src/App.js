import './App.css';
import { Header } from './components/header/Header';
import { Form } from './components/form/Form';
import { HeadTile } from './components/headTile/HeadTile';
import './styles.scss';
import { Tile } from './components/tile/Tile';
import { useEffect, useState } from 'react';
import calvinCount from './helpers/calvinCount';
import { getWeatherByCity } from './api/api';
import createArray from './helpers/createArray';

function App() {
   const [weather, setWeather] = useState({});

  const [dataTiles, setDataTiles] = useState([]);
  const [value, setValue] = useState('');

  useEffect(() => {
    getWeatherByCity('london').then(({data}) => {
      setWeather(data);
      setDataTiles(createArray(data));
    });



  }, []);

  const onSubmit = e => {
    e.preventDefault();
    const valueTolowerCase = value.toLowerCase();
    getWeatherByCity(valueTolowerCase).then(({data}) => {
      setWeather(data);
      setDataTiles(createArray(data));
    });
  };

  return (
    <>
      <Header />
      <Form value={value} onChange={setValue} onSubmit={onSubmit} />
      <HeadTile
        mainT={calvinCount(weather?.main?.temp)}
        maxT={calvinCount(weather?.main?.temp_max)}
        minT={calvinCount(weather?.main?.temp_min)}
        city={weather?.name}
        // img={weather?.weather}
      />
      <div>
        {
          <div className="container">
            <ul className="list_tile">
              {dataTiles.map(item => {
                return Tile(item);
              })}
            </ul>
          </div>
        }
      </div>
    </>
  );
}

export default App;
