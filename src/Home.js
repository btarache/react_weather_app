//rfce
import axios from 'axios'
import React from 'react'
//import { useEffect } from 'react'
import { useState } from 'react'
import './style.css'

function Home() {
    const [data, setData] = useState({
        celcius: 10,
        name: 'Chicago',
        humidity: 10,
        speed: 2,
        country: 'Tin',
        description: 'Clear sky',
        feels: 1,
        temp_min: 0,
        temp_max: 1,
        sunrise: 0,
        sunset: 1,
        id: 0,
        image: 'Images/clouds.png'
    });

    const [name, setName] = useState('');
    const [error, setError] = useState('');
    
    

    //useEffect(()=> {
      //  const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?q=Chicago&appid=c4ea3c9df84d24e84b836078997dd14d&units=metric';
        //axios.get(apiUrl)
        //.then( res => {
          //  setData({...data, celcius: res.data.main.temp, name: res.data.name, 
            //                  humidity: res.data.main.humidity, speed: res.data.wind.speed })
        //})
        //.catch( err => console.log(err));
    //}, [])

    const handleClick = () => {
        if(name !== "") {
            const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=c4ea3c9df84d24e84b836078997dd14d&units=metric`;
            axios.get(apiUrl)

            .then( res => {

                let imagePath = '';
                if(res.data.weather[0].main === "Clouds") {
                    imagePath = "/Images/clouds.png"
                } else if(res.data.weather[0].main === "Clear") {
                    imagePath = "/Images/clear.png"
                } else if(res.data.weather[0].main === "Sunny") {
                    imagePath = "/Images/sunny.png"
                } else if(res.data.weather[0].main === "Snow") {
                    imagePath = "/Images/snow.png"
                } else if(res.data.weather[0].main === "Rain") {
                    imagePath = "/Images/rain.png"
                } else if(res.data.weather[0].main === "Drizzle") {
                    imagePath = "/Images/drizzle.png"
                } else if(res.data.weather[0].main === "Mist") {
                    imagePath = "/Images/mist.png"
                } else {
                    imagePath = '/Images/clouds.png'    
                }
                console.log(res.data);
                setData({...data, celcius: res.data.main.temp, name: res.data.name, 
                                  humidity: res.data.main.humidity, speed: res.data.wind.speed,
                                  country: res.data.sys.country, description: res.data.weather.description,
                                  feels: res.data.main.feels_like, temp_min: res.data.main.temp_min,
                                  temp_max: res.data.main.temp_max, sunrise: res.data.sys.sunrise, sunset: res.data.sys.sunset,
                                  id: res.data.weather.id, image: imagePath })
                            setError('');
            })
            .catch( err => {
                if(err.response.status === 404) {
                    setError("Invalid City Name")
                } else {
                    setError('');
                }
                console.log(err)
            });    
        }
    }

  return (
    <div className='container'>
        <div className="weather">
            <div className="search">
                <input type="text" placeholder='Enter City Name' onChange={e => setName(e.target.value)}/>
                <button><img src="/Images/search.png" onClick={handleClick} alt="" /></button>
            </div>

            <div className="error">
                <p>{error}</p>
            </div>

            <div className="winfo">
                <img src={data.image} alt=""  />
                <h4>Desc: {data.description}</h4>
                <h4>ID: {data.id}</h4>
                <h1>{Math.round(data.celcius)}°c</h1>
                
                <h2>{data.name}, <span class="factor">{data.country}</span></h2>
                <div className="minmax">
                    <h3>Low: {Math.round(data.temp_min)}</h3>
                    <h3>Hi: {Math.round(data.temp_max)}</h3>
                </div>

                <div className="minmax">
                    <h3>Sunrise: {Math.round(data.sunrise)}</h3>
                    <h3>Sunset: {Math.round(data.sunset)}</h3>
                </div>

                
                <h3>Feels Like: {Math.round(data.feels)}</h3>
                
                <div className="details">
                    <div className="col">
                        <img src="/Images/humidity.png" alt="" />
                        <div className='humidity'>
                            <p>{Math.round(data.humidity)}%</p>
                            <p><span>Humidity</span></p>
                        </div>
                    </div>
                    <div className="col">
                    <img src="/Images/wind.png" alt="" />
                        <div className='wind'>
                            <p>{Math.round(data.speed)} Km/h</p>
                            <p><span>Wind</span></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Home;