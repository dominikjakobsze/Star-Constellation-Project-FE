import React from "react";
import Selector from "./SelectorContainer";
import SkyOptions from "./SkyOptions";

const Planner = () => {

  const [planner, setPlanner] = React.useState({
    stars: [],
    constellations: [],
    fog: 0,
    rain: 0,
    moon: 1,
    clouds: 0,
  });

  return (<>
    <p onClick={() => console.log(planner)}>click</p>
    <div className="w-full max-w-screen flex flex-col flex-wrap items-center justify-center">
        <div className="w-full max-w-[1920px] bg-gray-900 p-5 grid grid-cols-1 gap-5">
            <SkyOptions setPlanner={setPlanner}/>
            <Selector setPlanner={setPlanner}/>
        </div>
    </div>
  </>)  
};

export default Planner;