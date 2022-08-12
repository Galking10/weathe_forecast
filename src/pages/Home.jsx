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
  
    useEffect(() => {

        if(city){
            setIsLoading(true)
            getWeatherByCity(city).then(({ data }) => {
                setWeather(data);
                setDataTiles(createArray(data));
              }).finally(()=> setIsLoading(false));
              return
        }
      
      if ('geolocation' in navigator) {
        navigator.geolocation.getCurrentPosition(function (position) {
          getByCoordinate(
            position.coords.latitude,
            position.coords.longitude,
          ).then(({ data }) => {
            setWeather(data);
            setDataTiles(createArray(data));
          });
        });
      } else {
        getWeatherByCity('london').then(({ data }) => {
          setWeather(data);
          setDataTiles(createArray(data));
        });
      }
    }, [city]);
  
    const onSubmit = e => {
      e.preventDefault();
      const valueTolowerCase = value.toLowerCase();
    navigate(`../${valueTolowerCase}`, { replace: true });
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
