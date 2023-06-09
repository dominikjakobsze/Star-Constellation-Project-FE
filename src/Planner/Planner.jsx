import React from "react";
import Selector from "./SelectorContainer";
import SkyOptions from "./SkyOptions";
import { BASE_URL, FRONT_URL } from "../constants";
import { useParams } from "react-router-dom";


const Planner = () => {
  const { date } = useParams();

  const [planner, setPlanner] = React.useState({
    date: date,
    stars: [],
    constellations: [],
    fog: 0,
    rain: 0,
    moon: 1,
    clouds: 0,
  });

  return (<>
    <div className="w-full max-w-screen flex flex-col flex-wrap items-start justify-start">
        <div className="w-full max-w-[1920px] justify-start items-start bg-gray-900 min-h-screen p-5 flex flex-col flex-wrap gap-5">
          <h3 onClick={() => {
            window.location.href = FRONT_URL+"/planner";
          }} className="cursor-pointer underline my-3 w-full text-center font-underline text-base text-blue-500">Previous Page</h3>
          <p onClick={async () => {
              const data = new FormData();
              data.set("fog", planner.fog);
              data.set("rain", planner.rain);
              data.set("moon", planner.moon);
              data.set("clouds", planner.clouds);
              data.set("date", planner.date);
              data.set("stars", JSON.stringify(planner.stars));
              data.set("constellations", JSON.stringify(planner.constellations));
              try{
                const result = await fetch(`${BASE_URL}/planner`, {
                  method: "POST",
                  body: data,
                });
                const resultjson = await result.json();
                if(Number(resultjson.status_code) === 200){
                  window.location.href = FRONT_URL+"/planner";
                }else{
                  window.location.reload();
                }
              }catch(e){
                console.log(e);
              }
            }} className="cursor-pointer my-3 w-full text-center font-bold text-base text-blue-500">Add New Sky</p>
            <h1 className="mt-10 mb-10 w-full text-center font-bold text-3xl text-gray-50">{planner.date}</h1>
            <SkyOptions setPlanner={setPlanner}/>
            <Selector setPlanner={setPlanner}/>
        </div>
    </div>
  </>)  
};

export default Planner;