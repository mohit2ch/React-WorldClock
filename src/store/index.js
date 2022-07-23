import { createContext, useEffect,useState } from "react";

const ClockContext = createContext({
    dt: new Date(),
    location: 'Asia/Kolkata',
    setLocation: (new_location)=>{}
});


export function ClockProvider(props){
    const [location, setLocation] = useState('Asia/kolkata');
    const [dt, setDt] = useState("00:00");
    
   useEffect(function(){
    const clkinterval = setInterval(function(){
        fetch(`https://worldtimeapi.org/api/timezone/${location}`).then((res)=>{
            return res.json();
        }).then((data)=>{
            setDt(data.datetime.substring(11,16));
            console.log(dt);
        })   
        console.log(location);
    },4000);
    return ()=>{clearInterval(clkinterval); console.log("interval cleared")};
   },[location])
    function setLocationHandler(new_location){
        
        setLocation(new_location);
        fetch(`https://worldtimeapi.org/api/timezone/${new_location}`).then((res)=>{
            return res.json();
        }).then((data)=>{
            setDt(data.datetime.substring(11,16));
            console.log(dt);
        })    
        // console.log(data.datetime,new Date(data.datetime));
    }
    return <ClockContext.Provider value={{
        dt: dt,
        setLocation: setLocationHandler,
        location: location

    }}>{props.children}</ClockContext.Provider>
}

export default ClockContext;
