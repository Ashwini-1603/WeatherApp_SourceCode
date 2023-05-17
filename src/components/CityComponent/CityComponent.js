import React,{useState} from 'react'
import { MDBIcon } from "mdb-react-ui-kit";
import WearherComponent from '../WeatherComponent/WearherComponent';
import "./CityComponent.css";

function CityComponent() {
    const [checkCity,setCheckCity]=useState(true)
    const [city,setCity]=useState("");
    const[dataa,setDataa]=useState([])
    function HandleSubmit(e){
        e.preventDefault();
        console.log("welcome",city)
        fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=70c8087025ffeec0e395628cfaa9b941`
        )
          .then((res) => res.json())
          .then((data) => {
            console.log("inside the fetch dtaa" ,data);
            setDataa(data)
            setCheckCity(false)
          });
          setCity("")
       
         
      }
  return (
    <div>
    <div className="card text-center city-container">
      <div className="card-body">
        <span className='app-title'>React Weather App</span >
        <span className='city-search-content'>Find Weather of your city</span>
        <form onSubmit={HandleSubmit}>
          <div className="input-group w-75 search-container">
            <input
              type="text"
              className="form-control  input-container "
              placeholder="Search"
              aria-label="Search"
                name="city"
                value={city}
              onChange={(e)=>{setCity(e.target.value)}}
            />
            <button
              type="submit"
              className="btn btn-sm btn-dark"
            >
              submit
            </button>
          </div>
        </form>
        <p style={{visibility:checkCity||dataa.name?" hidden":" visible"}} className='error'>incorrect city</p >
        <WearherComponent data={dataa}/>
      </div>
    </div>
  </div>
  )
}

export default CityComponent