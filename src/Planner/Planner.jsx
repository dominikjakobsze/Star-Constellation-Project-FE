import React from "react";
import Selector from "./SelectorContainer";
import SkyOptions from "./SkyOptions";
import { BASE_URL, FRONT_URL } from "../constants";

const Planner = () => {

  const [planner, setPlanner] = React.useState({
    date: "2021-10-16",
    stars: [],
    constellations: [],
    fog: 0,
    rain: 0,
    moon: 1,
    clouds: 0,
  });

  return (<>
    <p onClick={() => console.log(planner)}>click</p>
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
          window.location.href = FRONT_URL;
        }else{
          window.location.reload();
        }
      }catch(e){
        console.log(e);
      }
    }}>send</p>
    <div className="w-full max-w-screen flex flex-col flex-wrap items-center justify-center">
        <div className="w-full max-w-[1920px] bg-gray-900 p-5 grid grid-cols-1 gap-5">
            <h1 className="mt-10 mb-10 w-full text-center font-bold text-3xl text-gray-50">{planner.date}</h1>
            <SkyOptions setPlanner={setPlanner}/>
            <Selector setPlanner={setPlanner}/>
        </div>
    </div>
  </>)  
};

export default Planner;