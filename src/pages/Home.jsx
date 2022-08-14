import React, { useEffect, useState } from 'react'
import { getByCoordinate, getWeatherByCity } from '../api/api';
import { Form } from '../components/form/Form';
import { Header } from '../components/header/Header';
import { HeadTile } from '../components/headTile/HeadTile';
import { Spinner } from '../components/spiner/Spiner';
import { Tile } from '../components/tile/Tile';
import createArray from '../helpers/createArray'
import calvinCount from '../helpers/calvinCount'
import '../styles.scss'
import { useNavigate, useParams } from "react-router-dom";

export const Home = () => {
    const [weather, setWeather] = useState({});
    const [dataTiles, setDataTiles] = useState([]);
    const [value, setValue] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    let navigate = useNavigate();
    const { city } = useParams();
    const geolocationAPI = navigator.geolocation;
    
  
    useEffect(() => {
      setIsLoading(true)
        if(city){
            getWeatherByCity(city).then(({ data }) => {
                setWeather(data);
                setDataTiles(createArray(data));
              }).catch(() => alert(`City don't found, try again`))
              .finally(()=> setIsLoading(false));
              return
        }
      
      if ( !geolocationAPI) {
        alert("Geolocation API is not available in your browser!");
      } else {
        geolocationAPI.getCurrentPosition(
          (position) => {
            const { coords } = position;
  
            getByCoordinate(coords.latitude, coords.longitude)
              .then(({ data }) => {
                setWeather(data);
                setDataTiles(createArray(data));
              })
              .finally(() => setIsLoading(false));
          },
          (error) => {
            getWeatherByCity("london")
              .then(({ data }) => {
                setWeather(data);
                setDataTiles(createArray(data));
              })
              .finally(() => setIsLoading(false));
          }
        );
      }
    }, [city, geolocationAPI]);
  
    const onSubmit = e => {
      e.preventDefault();
      const valueTolowerCase = value.toLowerCase();
    navigate(`../${valueTolowerCase}`, { replace: true });
    setValue('')
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
          img={weather?.weather}
        />
        <div>
          {
            <div className="container">
              <ul className="list_tile">
                {dataTiles.map(item => {
                  return <Tile key={item.id} item={item} />;
                })}
              </ul>
            </div>
          }
        </div>
        {isLoading && <Spinner />}
      </>
    );
}
