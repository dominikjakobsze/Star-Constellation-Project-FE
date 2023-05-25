import React from "react";
import baner from "../images/banner-bg.jpg"
import footer from "../images/footer.jpg"
import { Link } from "react-router-dom";


const Home = () => {
    return (
        <>
            <nav className=" border-gray-200 bg-gray-900/30 fixed w-full" >
                <div className="max-w-screen-xl flex flex-wrap items-center  justify-between mx-auto p-4">
                    <a href="#" className="flex items-center">
                        <span className="self-center text-2xl font-semibold whitespace-nowrap text-white ">STAR CONSTELLATION<span className="text-sm">PROJECT</span></span>
                    </a>
                    <div className="hidden w-full md:block w-auto" id="navbar-default">
                        <ul className=" flex flex-col p-4 md:p-0 mt-4 border  rounded-lg  md:flex-row md:space-x-8 md:mt-0 md:border-0  border-gray-700">
                            <li>
                                <a href="#" className="block py-2 pl-3 pr-4 text-white  rounded text-blue-600 p-0 text-white" aria-current="page">Home</a>
                            </li>
                            <li>
                                <Link to="/starManagement" className="block py-2 pl-3 pr-4 rounded  border-0  p-0 text-white hover:text-blue-500  text-white hover:bg-transparent">Star Management</Link>
                            </li>
                            <li>
                                <Link to="/constellationManagement" className="block py-2 pl-3 pr-4 rounded  border-0  p-0 text-white hover:text-blue-500  text-white hover:bg-transparent">Constellation Management</Link>
                            </li>
                            <li>
                                <Link to="/planner" className="block py-2 pl-3 pr-4 rounded  border-0  p-0 text-white hover:text-blue-500  text-white hover:bg-transparent">Planner </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>


            <div className="flex justify-center items-center" style={{ backgroundImage: 'url(' + baner + ')', height: '100vh' }}>
                <h1 className="mb-4 font-bold leading-none tracking-tight text-7xl text-white">CREATE YOUR NEW EXPERIENCE</h1>
            </div>

            <div className="flex justify-center items-center bg-gray-100">
                <h1 className="mb-8 mt-8  text-lg text-gray-800 font-medium   leading-none tracking-tight ">Maria Gierszon-Nikolayenko, Dominik Jakobsze, Jędrzej Rusak</h1>
            </div>

            <div className="max-w-screen-xl flex flex-col flex-wrap items-start  justify-between mx-auto p-8">
                <p className="mb-4 mt-6  text-base  text-cyan-500 font-medium   leading-none tracking-tight ">Services</p>
                <p className=" mb-6  text-3xl text-gray-900 font-bold   leading-none tracking-tight ">Services we provide</p>
                <p className=" text-base text-gray-500 leading-none tracking-tight ">App that manages appearance of the night sky</p>
            </div>
            <div className="max-w-screen-xl pb-8 flex flex-wrap items-center  justify-between mx-auto p-4">
                <Link to="/starManagement" className="flex mt-8 flex-col justify-center items-center block w-96 h-48 p-6 rounded-lg  bg-gray-100 hover:bg-gray-200">
                    <h5 className="mb-4  text-2xl font-bold tracking-tight text-gray-800">Stars Management</h5>
                    <p className="font-normal   text-gray-800">Create, edit or delete your star.</p>
                </Link>
                <Link to="/constellationManagement" className="flex mt-8 flex-col justify-center items-center block w-96 p-6  h-48 rounded-lg  bg-gray-100 hover:bg-gray-200">
                    <h5 className="mb-4 text-2xl font-bold tracking-tight text-gray-800">Constellation Management</h5>
                    <p className="font-normal  text-gray-800">Create, edit or delete your constellation.</p>
                </Link>
                <Link to="/planner" className="flex justify-center mt-8 flex-col items-center block w-96 h-48  rounded-lg  bg-gray-100 hover:bg-gray-200">
                    <h5 className="mb-4 text-2xl font-semibold tracking-tight text-gray-800">Sky Planner</h5>
                    <p className="font-normal text-gray-800">Manage the day's sky however you want.</p>
                </Link>

            </div>
            <div class="w-full mt-8 p-8 mx-auto flex justify-center flex-col items-center " style={{ backgroundImage: 'url(' + footer + ')' }}>
                <hr class="my-8 mt-8 border-gray-400 h-px" style={{ width: '70%' }} />
                <p className="mb-5 mt-6 font-normal text-sm  text-white">Designed by Maria, Dominik &amp; Jędrzej</p>
            </div>
        </>
    )
}

export default Home;