import React from "react";
import { useParams } from "react-router-dom";
import { BASE_URL, FRONT_URL } from "../constants";
import {BsCloudFog2Fill} from "react-icons/bs";
import {BsFillCloudRainHeavyFill} from "react-icons/bs";
import {BsFillMoonFill} from "react-icons/bs";
import {BsFillCloudsFill} from "react-icons/bs";

const PlannerDetails = () => {
  const { plannerId } = useParams();

  const [planner, setPlanner] = React.useState([]);

  const fetchPlanner = async () => {
    try {
      const response = await fetch(`${BASE_URL}/planner/${plannerId}`);
      const data = await response.json();
      if (data.error) {
        window.location.href = `${FRONT_URL}/planner`;
      } else {
        const trimmedStringStars = data.planner.starsList.substring(1, data.planner.starsList.length - 1);
        const trimmedStringConstellations = data.planner.constellationList.substring(1, data.planner.constellationList.length - 1);
        data.planner.starsList = JSON.parse(trimmedStringStars);
        data.planner.constellationList = JSON.parse(trimmedStringConstellations);
        setPlanner((prev) => data);
      }
    } catch (error) {
      console.log(error);
      //window.location.href = `${FRONT_URL}/planner`;
    }
  };

  React.useEffect(() => {
    fetchPlanner();
  }, []);

  return (
    <>
      <div className="w-full max-w-screen flex flex-col flex-wrap items-start justify-start">
        <div className="w-full max-w-[1920px] justify-start items-start bg-gray-900 min-h-screen p-5 flex flex-col flex-wrap gap-10">
          {planner.length === 0 ? (
            <p className="w-full text-center text-base font-medium text-indigo-900">Loading...</p>
          ) : (
            <>
                <h1 className="text-3xl text-gray-50 font-bold text-center w-full mt-10">{planner.planner.nightSkyDate.substring(0,10)}</h1>
                <div className="w-full flex flex-row flex-wrap items-center justify-center gap-1 mt-10">
                    <p className="text-center flex-[0_0_20%] md:flex-[0_0_10%] object-contain h-[25px] text-violet-400 font-semibold">Fog</p>
                    <BsCloudFog2Fill className="flex-[0_0_10%] object-contain h-[25px] text-violet-400"/>
                    <p className="text-center flex-[0_0_17%] md:flex-[0_0_10%] object-contain h-[25px] text-violet-400 font-semibold">{planner.planner.fog}</p>
                </div>
                <div className="w-full flex flex-row flex-wrap items-center justify-center gap-1">
                    <p className="text-center flex-[0_0_20%] md:flex-[0_0_10%] object-contain h-[25px] text-violet-400 font-semibold">Rain</p>
                    <BsFillCloudRainHeavyFill className="flex-[0_0_10%] object-contain h-[25px] text-violet-400"/>
                    <p className="text-center flex-[0_0_17%] md:flex-[0_0_10%] object-contain h-[25px] text-violet-400 font-semibold">{planner.planner.rain}</p>
                </div>
                <div className="w-full flex flex-row flex-wrap items-center justify-center gap-1">
                    <p className="text-center flex-[0_0_20%] md:flex-[0_0_10%] object-contain h-[25px] text-violet-400 font-semibold">Moon</p>
                    <BsFillMoonFill className="flex-[0_0_10%] object-contain h-[25px] text-violet-400"/>
                    <p className="text-center flex-[0_0_17%] md:flex-[0_0_10%] object-contain h-[25px] text-violet-400 font-semibold">{planner.planner.moon}</p>
                </div>
                <div className="w-full flex flex-row flex-wrap items-center justify-center gap-1">
                    <p className="text-center flex-[0_0_20%] md:flex-[0_0_10%] object-contain h-[25px] text-violet-400 font-semibold">Clouds</p>
                    <BsFillCloudsFill className="flex-[0_0_10%] object-contain h-[25px] text-violet-400"/>
                    <p className="text-center flex-[0_0_17%] md:flex-[0_0_10%] object-contain h-[25px] text-violet-400 font-semibold">{planner.planner.clouds}</p>
                </div>
                <h1 className="text-2xl text-gray-50 font-bold text-center w-full mt-10">Stars ID that will be seen that night</h1>
                <div className="w-full flex flex-row flex-wrap items-center justify-center gap-3">
                    {planner.planner.starsList.map((star) => {
                        return(
                            <p className="text-xl text-indigo-300 cursor-pointer">{star}</p>
                        )
                    })}
                </div>
                <h1 className="text-2xl text-gray-50 font-bold text-center w-full mt-10">Constellations ID that will be seen that night</h1>
                <div className="w-full flex flex-row flex-wrap items-center justify-center gap-3">
                    {planner.planner.constellationList.map((constellation) => {
                        return(
                            <p className="text-xl text-indigo-300 cursor-pointer">{constellation}</p>
                        )
                    })}
                </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default PlannerDetails;
