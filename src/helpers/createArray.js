import timeConverter from "./timeConverter";

export default function createArray(data){
    return(
        [
            { id: 1, title: 'Pressure', value: data.main.pressure },
            { id: 2, title: 'Wind', value: data.wind.speed },
            { id: 3, title: 'Sun set', value: timeConverter(data.sys.sunset) },
            { id: 4, title: 'Sun rise', value: timeConverter(data.sys.sunrise) },
          ]
    )
   
}