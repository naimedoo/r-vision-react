import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Button from './Components/Button';



export default function App() {
 const [name, setName] = useState("")
 const [capital, setCapital] = useState("")
 const [flag, setFlag] = useState("")
 const [population, setPopulation] = useState("")
 const [region, setRegion] = useState("")

 useEffect(()=> {
   const URL = 'https://restcountries.com/v3.1/name/France';
   axios(URL).then((res)=> {
     console.log(res.data[0])
     const country = res.data[0].name.common;
     const cap = res.data[0].capital[0];
     const flag = res.data[0].flags.png;
     const pop = res.data[0].population;
     const region = res.data[0].region;

     setName(country)
     setCapital(cap)
     setFlag(flag)
     setPopulation(pop)
     setRegion(region)
   })
})
const click = () => {
    
}
   return (
     <>
     <div>
        <p>{name}</p>
        <p>{capital}</p>
        <img src={flag}/>
        <p>{population}</p>
        <p>{region}</p>
        {/* <button onClick={click}>cliquez</button> */}
        <Button />
     </div>
     </>
   )
}