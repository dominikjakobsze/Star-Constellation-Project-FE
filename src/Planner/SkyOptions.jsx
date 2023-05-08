import React from "react";
import {BsCloudFog2Fill} from "react-icons/bs";
import {BsFillCloudRainHeavyFill} from "react-icons/bs";

//faza ksiezyca
//opady atmosferyczne => jesli na niebie nie ma chmur to nie ma opadow
//gestosc mgly
//poziom zachmurzenia

const SkyOptions = ({setPlanner}) => {
    const [fog,setFog] = React.useState(0);
    const [rain,setRain] = React.useState(0);
    
    return (<>
        <div className="w-full max-w-[1920px] bg-gray-700 md:p-5 grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="w-full flex flex-row flex-wrap items-center justify-center md:justify-start gap-1">
                <p className="text-center flex-[0_0_20%] md:flex-[0_0_10%] object-contain h-[25px] text-violet-400 font-semibold">Fog</p>
                <BsCloudFog2Fill className="flex-[0_0_10%] object-contain h-[25px] text-violet-400"/>
                <input
                    id="fog"
                    name="fog"
                    min="0"
                    max="100"
                    defaultValue="1"
                    step="1"
                    type="range"
                    className="flex-[0_0_40%]"
                    onChange={(e) => {
                        setFog(Number(e.target.value));
                        setPlanner((prev) => ({
                            ...prev,
                            fog: Number(e.target.value),
                        }));
                    }}
                />
                <p className="text-center flex-[0_0_17%] md:flex-[0_0_10%] object-contain h-[25px] text-violet-400 font-semibold">{fog}</p>
            </div>
            <div className="w-full flex flex-row flex-wrap items-center justify-center md:justify-start gap-1">
                <p className="text-center flex-[0_0_20%] md:flex-[0_0_10%] object-contain h-[25px] text-violet-400 font-semibold">Rain</p>
                <BsFillCloudRainHeavyFill className="flex-[0_0_10%] object-contain h-[25px] text-violet-400"/>
                <input
                    id="fog"
                    name="fog"
                    min="0"
                    max="100"
                    defaultValue="1"
                    step="1"
                    type="range"
                    className="flex-[0_0_40%]"
                    onChange={(e) => {
                        setRain(Number(e.target.value));
                        setPlanner((prev) => ({
                            ...prev,
                            rain: Number(e.target.value),
                        }));
                    }}
                />
                <p className="text-center flex-[0_0_17%] md:flex-[0_0_10%] object-contain h-[25px] text-violet-400 font-semibold">{rain}</p>
            </div>
        </div>
    </>);
};

export default SkyOptions;