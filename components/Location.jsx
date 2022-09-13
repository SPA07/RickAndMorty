import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ResidentsInfo from './ResidentsInfo';

const Location = () => {
    const [ location, setLocation ] = useState({})
    const [ locationName, setLocationName] = useState("")

    useEffect(() => {
        const randomId = Math.floor(Math.random() * 126) + 1;
        axios.get(`https://rickandmortyapi.com/api/location/${randomId}/`)
        .then(res => setLocation(res.data))
    }, [])

    // console.log(location)
    
    const searchLocation = () => {
        axios.get(`https://rickandmortyapi.com/api/location/${locationName}`)
        .then(res => setLocation(res.data))
    }

    return (
        <div>
            <header className='header-container'>
                <h1>Rick and Morty Wiki</h1>
                 <input
                    type="text"
                    value={locationName}
                    onChange={e => setLocationName(e.target.value)}
                    placeholder={'Select ID location'}
                 />
                 <div onClick={searchLocation} className="btn-container">
                     <i className="fa-solid fa-magnifying-glass"></i>
                 </div>
                
            </header>
            
            <div className="location-container">
                <div className="attributes">
                    <p><b>Name:</b> <br /><span>{location.name}</span></p>
                    <p><b>Type:</b> <br /><span>{location.type}</span></p>
                    <p><b>Dimension: </b><br /><span>{location.dimension}</span></p>
                    <p><b>Residents:</b> <br/> <span>{location.residents?.length}</span></p>
                </div>
            </div>

            <div className="characters-container">
                {
                    location.residents?.map((resident) => (
                        <ResidentsInfo resident={resident} key={resident}/>
                    ))
                }
            </div>
        </div>
    );
};

export default Location;