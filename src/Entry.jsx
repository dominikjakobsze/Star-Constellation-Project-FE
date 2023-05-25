import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from "./reusable/NotFound/NotFound";
import Planner from "./Planner/Planner";
import PlannerBoard from "./Planner/PlannerBoard";
import SpaceManagement, { STARS_TYPE, CONSTELLATIONS_TYPE } from "./SpaceManagement/SpaceManagement";
import PlannerDetails from "./Planner/PlannerDetails";
import Home from "./Home/Home";

//define all you need here like route etc!
//to match expected colors, you can use the following classes: violet-400, indigo-900, gray-900

const Entry = () => {
    return (
        <>
            <BrowserRouter>
                { /* here you can define menu to make be available on all pages or any other components that are supposed to be on all pages */}
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={"about"} />
                    <Route path="/planner" element={<PlannerBoard />} />
                    <Route path="/planner/add/:date" element={<Planner />} />
                    <Route path="/starManagement" element={<SpaceManagement collectionType={STARS_TYPE} />} />
                    <Route path="/constellationManagement" element={<SpaceManagement collectionType={CONSTELLATIONS_TYPE} />} />
                    <Route path="/planner/details/:plannerId" element={<PlannerDetails />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
                { /* //here you can define menu to make be available on all pages or any other components that are supposed to be on all pages */}
            </BrowserRouter>
        </>
    );
};

export default Entry;