import React from "react";
import { IMAGE_BASE_URL } from "../constants";


const SpaceItem = ({ item, itemParameters, setItemParameters }) => {

    return (<>
        {itemParameters.id === '' || itemParameters.id == item.id ? (
            <div >
                <div
                    onClick={() => setItemParameters((prev) => ({ ...prev, id: item.id }))}
                    className="w-full py-2 px-1 cursor-pointer hover:bg-indigo-900 items-center justify-center flex flex-row flex-nowrap gap-5 font-semibold text-violet-400">
                    <p>{item.id}:</p>
                    <p className="truncate">{item.name}</p>
                    <img src={IMAGE_BASE_URL + item.linkToImage} alt={item.name} className="w-10 h-10" />

                </div>
                {itemParameters.id == item.id ? (
                    <div
                        className="w-full py-2 px-1 cursor-pointer hover:bg-indigo-900 items-center justify-center flex flex-row flex-nowrap gap-5 font-semibold text-violet-400">
                        <p>{item.description}</p>
                    </div>)
                    : ('')}
            </div>) : ''}
    </>);
};

export default SpaceItem;