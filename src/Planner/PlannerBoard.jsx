import React from "react";
import { BsFillTrash2Fill } from "react-icons/bs";

const PlannerBoard = () => {
    return (<>
        <div className="w-full max-w-screen flex flex-col flex-wrap items-start justify-start">
            <div className="w-full max-w-[1920px] justify-start items-start bg-gray-900 min-h-screen p-5 flex flex-col flex-wrap gap-10">
                <h1 className="text-center w-full text-3xl font-bold text-gray-50">Create new sky</h1>
                <div className="w-full flex flex-col flex-wrap items-center justify-center">
                    <input type="date" className="w-[280px]" onChange={(event) => {
                        window.location.href = `/planner/add/${event.currentTarget.value}`;
                    }}/>
                </div>
                <h1 className="text-center w-full text-3xl font-bold text-gray-50">Inspect existing sky</h1>
                <div className="w-full flex flex-row flex-wrap items-center justify-center gap-5">
                    <div className="bg-gray-800 gap-3 py-1 px-4 flex flex-row flex-wrap justify-center items-center cursor-pointer">
                        <h1 className="font-semibold text-xl text-purple-400">2023-03-18</h1>
                        <BsFillTrash2Fill className="w-[30px] h-[30px] text-gray-900 object-contain hover:text-red-400"/>
                    </div>
                </div>
            </div>
        </div>
    </>);
};

export default PlannerBoard;