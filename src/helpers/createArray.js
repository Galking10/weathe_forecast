import calvinCount from "./calvinCount";
import timeConverter from "./timeConverter";

export default function createArray(data){
    return(
        [
            { id: 1, title: 'Feels like', value: calvinCount(data.main.feels_like) + ' c' },
            { id: 2, title: 'Pressure', value: data.main.pressure + ' kPa'},
            { id: 3, title: 'Sun rise', value: timeConverter(data.sys.sunrise) },
            { id: 4, title: 'Sun set', value: timeConverter(data.sys.sunset) },
            { id: 5, title: 'Wind', value: `${data.wind.speed} m/s` },
            { id: 6, title: 'Humidity', value: data.main.humidity + '%' },
          ]
    )
   
}