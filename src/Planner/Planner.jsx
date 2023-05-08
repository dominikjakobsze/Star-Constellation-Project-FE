import React from "react";
import Selector from "./SelectorContainer";

const Planner = () => {

  const [planner, setPlanner] = React.useState({
    stars: [],
    constellations: [],
  });

  return (<>
    <p onClick={() => console.log(planner)}>click</p>
    <div className="w-full max-w-screen flex flex-col flex-wrap items-center justify-center">
        <div className="w-full max-w-[1920px] bg-gray-900 p-5 grid grid-cols-1">
            <Selector setPlanner={setPlanner}/>
        </div>
    </div>
  </>)  
};

export default Planner;