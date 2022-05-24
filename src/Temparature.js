import React, {  useState } from "react";
import "./style.css"


const Temperature = () => {

    const[city,setCity] = useState(null);
    const[search,setSearch] = useState("");

    const fetchApi = async () => {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=d7fab6892e9b7c39beff68fc16c945cf`
        const response = await fetch(url);
        const resJson = await response.json();
    
        setCity(resJson.main);
        setSearch(search);
    };

     const inEventClick = event => {
         fetchApi();       
    }

    const inChange = eve => {
        setSearch(eve.target.value);
        setCity(null);
    }

    return(
        <>
            <div className="box">
            <p className="Msg">Check Today's Weather.</p>
                <div className="inputData">
                    <input type='search' name="search" value={search} placeholder="✍ Enter City"
                    className="inputFeild"
                    onChange={inChange} />
                </div>
                <button className="btn" onClick={inEventClick}>👉 Click Here</button>
           {!city ? (
               <p className="errorMsg">Data Not Available.</p>
           ) : (
                <div className="info">
                    <h2 className="location">{search}</h2>
                    <h1 className="temp">
                      {city.temp} °C
                    </h1>
                </div>
           )}
                
            </div>
        </>
    )
}

export default Temperature;