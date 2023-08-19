import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'
import img from './assets/background.jpg'
function App() {
  const [data, setData] = useState({})
  const [location, setLocation] = useState('')
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=4e5a4c4fb6f62798e3d223c7b3b6a304`
  
  //Connect to API
    //Connect to API
    const searchLocation = (event) =>{
      if(event.key === 'Enter'){
        axios.get(url).then((response) => {
          setData(response.data)
          console.log(data)
        })
        .catch(error => {
          console.log('THERE WAS A PROBLEM', error.response.data.error)
          alert("Enter a valid location")
        })
      }
    }
  return (
    <div className="app">
      <div className="search">
        <input type="text"
        value={location}
        onChange={event => setLocation(event.target.value)}
        onKeyPress={searchLocation}
        placeholder='Enter Location'
        >
        </input>
      </div>
      <div className="container">
        <div className="top">
          <div className="location">
              {data.name}
          </div>
          <div className="temp">
            {data.main ? <h1>{data.main.temp}°C</h1> : null}
          </div>
          <div className="description">
            {data.weather ? <p>{data.weather[0].main}</p> : null}
          </div>
        </div>


      {data.name !=undefined &&
        <div className="bottom">
          <div className="feels">
            {data.main ? <p className='bold'>{data.main.feels_like}°C</p> : null}
            <p>Feels like</p>
          </div>
          <div className="humidity">
            {data.main ? <p className='bold'>{data.main.humidity}%</p> : null}
            <p>Humidity</p>
          </div>
          <div className="wind">
            {data.wind ? <p className='bold'>{data.wind.speed}MPH</p> : null}
            <p>Winds</p>
          </div>
        </div>
      }
      </div>
    </div>
  )
}

export default App
