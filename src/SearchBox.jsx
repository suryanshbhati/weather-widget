import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css";
import { useState } from 'react';

export default function SearchBox({updateInfo}) {
    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const [city,setCity] = useState("");
    const [error,setError] = useState(false);

    let getWeatherInfo = async () => {
        try{
        let response = await fetch(`${API_URL}?q=${city}&appid=${import.meta.env.VITE_WEATHER_API_KEY}&units=metric`);
        let jsonResponse = await response.json();
        let res = {
            city: city,
            temp: jsonResponse.main.temp,
            tempMin: jsonResponse.main.temp_min,
            tempMax: jsonResponse.main.temp_max,
            humidity: jsonResponse.main.humidity,
            feelsLike: jsonResponse.main.feels_like,
            weather: jsonResponse.weather[0].description,
        };
        console.log(res);
        return res;
        }catch(err){
            throw err;
        }
    };

    let handleChange = (e) => {
        setCity(e.target.value);
    }

    let handleSubmit = async (e) => {
        try{
        e.preventDefault();
        console.log(city);
        setCity("");
        let newInfo = await getWeatherInfo();
        updateInfo(newInfo);
        }catch(err){
            setError(true);
        }
    }

    return (
        <div className='SearchBox'>
            <form onSubmit={handleSubmit}>
            <TextField id="city" label="City Name" variant="outlined" required value={city} onChange={handleChange}/>
            <br /><br />
            <Button variant="contained" type='submit'>Search</Button>
            {error && <p style={{ color: "red" }}>No such place exists!</p>}
            </form>
        </div>
    );
}