import axios from 'axios';
import React, {useEffect, useState} from 'react';

const ResidentsInfo = ({ resident }) => {
    const [ charInfo, setCharInfo ] = useState([]);

    useEffect(() => {
        axios.get(resident)
        .then((res) => setCharInfo(res.data));
    }, [])

    console.log(charInfo)
	return (
		<div className="characters-cards">
            <img src={charInfo.image} alt="" />
            <p><b>Name: </b><span>{charInfo.name}</span></p>
            <p><b>Species: </b><span>{charInfo.species}</span></p>
            <p><b>Gender: </b> <span>{charInfo.gender}</span></p>
            <p><b>Status:</b> <span>{charInfo.status}</span></p>
            <p><b>Episode: </b> <span>{charInfo.episode?.length}</span></p>
		</div>
	);
};

export default ResidentsInfo;