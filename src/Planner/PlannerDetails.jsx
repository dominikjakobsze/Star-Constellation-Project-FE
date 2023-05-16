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
        console.log(data);
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
                <div className="w-full flex flex-row flex-wrap items-center justify-center gap-1">
                    <p className="text-center flex-[0_0_20%] md:flex-[0_0_10%] object-contain h-[25px] text-violet-400 font-semibold">Fog</p>
                    <BsCloudFog2Fill className="flex-[0_0_10%] object-contain h-[25px] text-violet-400"/>
                    <p className="text-center flex-[0_0_17%] md:flex-[0_0_10%] object-contain h-[25px] text-violet-400 font-semibold">{planner.planner.fog}</p>
                </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default PlannerDetails;
