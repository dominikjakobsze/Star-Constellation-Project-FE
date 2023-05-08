import React from "react";
import { IMAGE_BASE_URL } from "../constants";


const SelectorContainer = () => {

    const [stars, setStars] = React.useState([]);
    const [constellations, setConstellations] = React.useState([]);

    const fetchAllStars = async () => {
        try {
          const response = await fetch('http://localhost:3520/stars');
          //console.log(response.status);
          const data = await response.json();
          setStars((prev) => data);
            // console.log(data);
            // console.log(data.status_code);
            // console.log(data.error);
            // console.log(data.stars_array);
        } catch (error) {
            // console.error(error);
            // console.error(error.response);
            // console.error(error.message);
            // console.error(error.stack);
        }
      };
      

    React.useEffect(() => {
        fetchAllStars();
      }, []);

    return (<>
        <div onClick={() => console.log(stars)} className="w-full grid grid-cols-2 gap-5">
            <div className="w-full flex flex-col flex-wrap gap-5">
                <h1 className="w-full text-violet-400 font-bold text-xl text-center">Star Selector</h1>
                <div className="w-full flex flex-col flex-wrap border-2 border-indigo-900 p-3 rounded-lg max-h-[400px]">
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
                                    key={star.id+star.name+star.linkToImage} 
                                    className="w-full items-center justify-center flex flex-row flex-wrap gap-5 font-semibold text-violet-400">
                                        <p>{star.id}:</p>
                                        <p>{star.name}</p>
                                        <img src={IMAGE_BASE_URL+star.linkToImage} alt={star.name} className="w-10 h-10"/>
                                    </div>
                                ))}
                            </div>
                        ))}
                </div>
            </div>
            <div className="w-full flex flex-col flex-wrap gap-5">
                <h1 className="w-full text-violet-400 font-bold text-xl text-center">Star Selector</h1>
                <div className="w-full flex flex-col flex-wrap border-2 border-indigo-900 p-3 rounded-lg max-h-[400px]">
                {stars.status_code !== 200 && stars.status_code !== 201 && !stars.error 
                    ? (
                        <p className="w-full text-center text-base font-medium text-indigo-900">Coś poszło nie tak</p>
                    ) 
                    : (stars.stars_array.length === 0
                        ? (<p className="w-full text-center text-base font-medium text-indigo-900">0 Stars</p>)
                        : "ok")}
                </div>
            </div>
        </div>
    </>);
};

export default SelectorContainer;