//rfce
import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import './style.css'

function Home() {
    const [data, setData] = useState({
        celcius: 10,
        name: 'London',
        humidity: 10,
        speed: 2
    })
    useEffect(()=> {
        const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?q=London&appid=c4ea3c9df84d24e84b836078997dd14d&units=metric';
        axios.get(apiUrl)
        .then( res => console.log(res.data))
        .catch( err => console.log(err));
    }, [])

  return (
    <div className='container'>
        <div className="weather">
            <div className="search">
                <input type="text" placeholder='Enter City Name'/>
                <button><img src="/Images/search.png" alt="" /></button>
            </div>
            <div className="winfo">
                <img src="/Images/clouds.png" alt="" />
                <h1>4°c</h1>
                <h2>Chicago</h2>
                <div className="details">
                    <div className="col">
                        <img src="/Images/humidity.png" alt="" />
                        <div className='humidity'>
                            <p>20%</p>
                            <p><span>Humidity</span></p>
                        </div>
                    </div>
                    <div className="col">
                    <img src="/Images/wind.png" alt="" />
                        <div className='wind'>
                            <p>3 Km/h</p>
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