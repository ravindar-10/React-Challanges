import axios from 'axios';
import React from 'react';
const url='https://covid19.mathdro.id/api/';


export const fetchData =  async ()=> {
    try{ 
        const { data: {confirmed, recovered, deaths, lastUpdates}} =await axios.get(url);
        //const { data } =await axios.get(url);
        //console.log(response);
        const modifiedData = {confirmed,recovered,deaths,lastUpdates};
        //console.log(modifiedData);
        return modifiedData;
        
    }
    catch(error){

    }
}
export const frtchDailyData = async () => {

    try {
        const {data} =await axios.get(`${url}/daily`);
        console.log(data);
    }
    catch(error) {

    }
}