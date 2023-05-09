import React from "react";
import { IMAGE_BASE_URL, BASE_URL } from "../constants";


const SelectorContainer = ({setPlanner}) => {

    const [stars, setStars] = React.useState([]);
    const [constellations, setConstellations] = React.useState([]);


    const fetchAllStars = async () => {
        try {
          const response = await fetch(BASE_URL+'/stars');
          const data = await response.json();
          setStars((prev) => data);
        } catch (error) {
            console.log(error);
        }
      };

    const fetchAllConstellations = async () => {
        try {
          const response = await fetch(BASE_URL+'/constellations');
          const data = await response.json();
          setConstellations((prev) => data);
        } catch (error) {
            console.log(error);
        }
      };
    
    const addSelectedStar = (event,star) => {
        if(event.currentTarget.style.backgroundColor === "rgb(74, 0, 224)"){
            event.currentTarget.style.backgroundColor = "rgb(17 24 39)";
            setPlanner((prev) => ({
                ...prev,
                stars: prev.stars.filter((item) => item !== star.id)
              }));
        } else {
            event.currentTarget.style.backgroundColor = "rgb(74, 0, 224)";
            setPlanner((prev) => ({
                ...prev,
                stars: [...prev.stars, star.id]
            }));
        }
    }

    const addSelectedConstellation = (event,constellation) => {
        if(event.currentTarget.style.backgroundColor === "rgb(74, 0, 224)"){
            event.currentTarget.style.backgroundColor = "rgb(17 24 39)";
            setPlanner((prev) => ({
                ...prev,
                constellations: prev.constellations.filter((item) => item !== constellation.id)
              }));
        } else {
            event.currentTarget.style.backgroundColor = "rgb(74, 0, 224)";
            setPlanner((prev) => ({
                ...prev,
                constellations: [...prev.constellations, constellation.id]
            }));
        }
    }

    React.useEffect(() => {
        fetchAllStars();
        fetchAllConstellations();
      }, []);

    return (<>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="w-full flex flex-col flex-wrap gap-5">
                <h1 className="w-full text-violet-400 font-bold text-xl text-center">Star Selector</h1>
                <div className="w-full flex flex-col flex-wrap border-2 border-indigo-900 p-3 rounded-lg max-h-[400px] overflow-x-hidden overflow-y-auto">
                {stars.status_code !== 200 && stars.status_code !== 201 && !stars.error 
                    ? (
                        <p className="w-full text-center text-base font-medium text-indigo-900">Coś poszło nie tak</p>
                    ) 
                    : (stars.stars_array.length === 0
                        ? (<p className="w-full text-center text-base font-medium text-indigo-900">0 Stars</p>)
                        : (
                            <div className="w-full grid grid-cols-1 gap-3">
                                {stars.stars_array.map((star) => (
                                    <div
                                    onClick={(event) => addSelectedStar(event,star)} 
                                    key={star.id+star.name+star.linkToImage} 
                                    className="w-full py-2 px-1 cursor-pointer hover:bg-indigo-900 items-center justify-center flex flex-row flex-nowrap gap-5 font-semibold text-violet-400">
                                        <p>{star.id}:</p>
                                        <p className="truncate">{star.name}</p>
                                        <img src={IMAGE_BASE_URL+star.linkToImage} alt={star.name} className="w-10 h-10"/>
                                    </div>
                                ))}
                            </div>
                        ))}
                </div>
            </div>
            <div className="w-full flex flex-col flex-wrap gap-5">
                <h1 className="w-full text-violet-400 font-bold text-xl text-center">Constellation Selector</h1>
                <div className="w-full flex flex-col flex-wrap border-2 border-indigo-900 p-3 rounded-lg max-h-[400px] overflow-x-hidden overflow-y-auto">
                {constellations.status_code !== 200 && constellations.status_code !== 201 && !constellations.error 
                    ? (
                        <p className="w-full text-center text-base font-medium text-indigo-900">Coś poszło nie tak</p>
                    ) 
                    : (constellations.constellations_array.length === 0
                        ? (<p className="w-full text-center text-base font-medium text-indigo-900">0 Constellations</p>)
                        : (
                            <div className="w-full grid grid-cols-1 gap-3">
                                {constellations.constellations_array.map((constellation) => (
                                    <div
                                    onClick={(event) => addSelectedConstellation(event,constellation)} 
                                    key={constellation.id+constellation.name+constellation.linkToImage} 
                                    className="w-full py-2 px-1 cursor-pointer hover:bg-indigo-900 items-center justify-center flex flex-row flex-nowrap gap-5 font-semibold text-violet-400">
                                        <p>{constellation.id}:</p>
                                        <p className="truncate">{constellation.name}</p>
                                        <img src={IMAGE_BASE_URL+constellation.linkToImage} alt={constellation.name} className="w-10 h-10"/>
                                    </div>
                                ))}
                            </div>
                        ))}
                </div>
            </div>
        </div>
    </>);
};

export default SelectorContainer;