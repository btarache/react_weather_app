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
        desc: 'Clear sky',
        feels: 1,
        image: 'Images/clouds.png'
    })

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
                                  country: res.data.sys.country, desc: res.data.weather.description,
                                  feels: res.data.main.feels_like,
                                  image: imagePath })
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
                <h1>{Math.round(data.celcius)}°c</h1>
                <h4>{data.desc}</h4>
                <h2>{data.name}, {data.country}</h2>
                
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