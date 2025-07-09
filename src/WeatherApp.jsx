import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useState } from "react";

export default function WeatherApp() {
    const [weatherInfo,setWeatherInfo] = useState({
        city: "Delhi",
        feelsLike: 32.12,
        temp: 31.02,
        tempMin: 31.02,
        tempMax: 31.02,
        humidity: 60,
        weather: "overcast clouds",
    });

    let updateInfo = (newInfo) => {
        setWeatherInfo(newInfo);
    }

    return (
        <div style={{textAlign: "center"}}>
            <h3>Weather App by Suryansh Bhati</h3>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={weatherInfo}/>
        </div>
    );
}