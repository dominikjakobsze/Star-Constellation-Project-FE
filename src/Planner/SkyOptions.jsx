import React from "react";
import {BsCloudFog2Fill} from "react-icons/bs";
import {BsFillCloudRainHeavyFill} from "react-icons/bs";
import {BsFillMoonFill} from "react-icons/bs";

//faza ksiezyca
//opady atmosferyczne => jesli na niebie nie ma chmur to nie ma opadow
//gestosc mgly
//poziom zachmurzenia

const SkyOptions = ({setPlanner}) => {
    const [fog,setFog] = React.useState(0);
    const [rain,setRain] = React.useState(0);
    const [moon,setMoon] = React.useState(1);
    const [clouds,setClouds] = React.useState(0);

    return (<>
        <div className="w-full max-w-[1920px] md:p-5 grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="w-full flex flex-row flex-wrap items-center justify-center md:justify-start gap-1">
                <p className="text-center flex-[0_0_20%] md:flex-[0_0_10%] object-contain h-[25px] text-violet-400 font-semibold">Fog</p>
                <BsCloudFog2Fill className="flex-[0_0_10%] object-contain h-[25px] text-violet-400"/>
                <input
                    id="fog"
                    name="fog"
                    min="0"
                    max="100"
                    defaultValue="0"
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
                    defaultValue="0"
                    step="1"
                    type="range"
                    className="flex-[0_0_40%]"
                    onChange={(e) => {
                        if(clouds === 0){
                            e.target.value = 0;
                        }else{
                            setRain(Number(e.target.value));
                            setPlanner((prev) => ({
                                ...prev,
                                rain: Number(e.target.value),
                            }));
                        }
                    }}
                />
                <p className="text-center flex-[0_0_17%] md:flex-[0_0_10%] object-contain h-[25px] text-violet-400 font-semibold">{rain}</p>
            </div>
            <div className="w-full flex flex-row flex-wrap items-center justify-center md:justify-start gap-1">
                <p className="text-center flex-[0_0_20%] md:flex-[0_0_10%] object-contain h-[25px] text-violet-400 font-semibold">Moon</p>
                <BsFillMoonFill className="flex-[0_0_10%] object-contain h-[25px] text-violet-400"/>
                <input
                    id="moon"
                    name="moon"
                    min="1"
                    max="4"
                    defaultValue="0"
                    step="1"
                    type="range"
                    className="flex-[0_0_40%]"
                    onChange={(e) => {
                        setMoon(Number(e.target.value));
                        setPlanner((prev) => ({
                            ...prev,
                            moon: Number(e.target.value),
                        }));
                    }}
                />
                <p className="text-center flex-[0_0_17%] md:flex-[0_0_10%] object-contain h-[25px] text-violet-400 font-semibold">{moon}</p>
            </div>
            <div className="w-full flex flex-row flex-wrap items-center justify-center md:justify-start gap-1">
                <p className="text-center flex-[0_0_20%] md:flex-[0_0_10%] object-contain h-[25px] text-violet-400 font-semibold">Clouds</p>
                <BsFillMoonFill className="flex-[0_0_10%] object-contain h-[25px] text-violet-400"/>
                <input
                    id="clouds"
                    name="clouds"
                    min="0"
                    max="100"
                    defaultValue="0"
                    step="1"
                    type="range"
                    className="flex-[0_0_40%]"
                    onChange={(e) => {
                        if(Number(e.target.value) === 0){
                            setRain(0);
                        }
                        setClouds(Number(e.target.value));
                        setPlanner((prev) => ({
                            ...prev,
                            clouds: Number(e.target.value),
                        }));
                    }}
                />
                <p className="text-center flex-[0_0_17%] md:flex-[0_0_10%] object-contain h-[25px] text-violet-400 font-semibold">{clouds}</p>
            </div>
        </div>
    </>);
};

export default SkyOptions;