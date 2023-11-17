import {useState} from "react"
import './App.css'

const App = () =>{
  const api = {
    key:"bfe8cfa55a615627ff4204a61dfa1a71",
    base:"https://api.openweathermap.org/data/2.5/"
  }
  const[search,setSearch]=useState("")
  const[weather,setWeather]=useState({})
  function searchPress(){
    fetch(`${api.base}/weather?q=${search}&APPID=${api.key}`)
    .then(res=>res.json())
    .then(data=>setWeather(data))

  }
  return(
    
    <div className="App">
      <section className="sec1">
      <input type="text" onChange={(e)=>setSearch(e.target.value)}></input> 
      {/* <p>Pune</p> */}
      <hr></hr> 
       <button onClick={searchPress}>Search</button>
       {(typeof weather.main !=="undefined")?(
        <div>
          <p id="p4">Name:{weather.name}</p>
          <p id="p1">Temp:{weather.main.temp}🌞</p>
          <p id="p2">Rain:{weather.weather[0].main} Clouds</p>
          <p id="p3">Description:{weather.weather[0].description}</p>
          </div>
       ):("Not found")}
      </section>
      
    </div>
  )
}
export default App