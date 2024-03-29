// https://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}

import { useEffect, useState } from "react"

const API_KEY = '207a52923e0d2e1ca4acea1ce48628fc';
const Weather = () => {

    const [postion, setPosition] = useState({});
    const [cityName, setCityName] = useState("");
    const [weather, setWeather] = useState({});
    const [wind, setWind] = useState({});

    useEffect(() => {
        new Promise((resolve, reject) => {
            navigator.geolocation.getCurrentPosition((currentPosition) => {
                // console.log(currentPosition);
                // console.log(currentPosition.coords.longitude);
                // console.log(currentPosition.coords.latitude);

                setPosition({
                    longitude: currentPosition.coords.longitude,
                    latitude: currentPosition.coords.latitude
                })
                resolve(currentPosition.coords);
            });
        })
        .then(coords => {
            fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${coords.latitude}&lon=${coords.longitude}&appid=${API_KEY}&lang=en`)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setCityName(data.name);
                setWeather(data.weather[0]);
                setWind(data.wind);
            })
        })
    }, [])

    return (
        <>
        <h3>오늘의 날씨</h3>
        <h4>{`경도 : ${postion.longitude} 위도 : ${postion.latitude}`}</h4>
        <h4>{`조회 도시 : ${cityName}`}</h4>
        <h4>{`날씨 : ${weather.main} 날씨 설명 : ${weather.description}`}</h4>
        <h4>{`풍향 : ${wind.deg}도 풍속 : ${wind.speed}m/s`}</h4>
        </>
    )
}

export default Weather;