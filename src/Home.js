//rfce
import React from 'react'
import './style.css'

function Home() {
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

export default Home