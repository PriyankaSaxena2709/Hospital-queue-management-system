import React from "react";
import { NavLink } from "react-router-dom";
import NavBar from "./NavBar";
import { CalendarDays, Clock, BarChart3,MoveRight  } from "lucide-react";
import QueueImage from "../assets/Hospital.png"
import HospitalImage from "../assets/Hospitalicon.png"


const HeroSection =()=>{
    return (
    <div className="bg-white min-h-screen flex flex-col justify-center items-center p-4">
      <section className="max-w-6xl w-full flex flex-col-reverse md:flex-row items-center gap-10 md:gap-16">
        <div className="flex-1">
          <h1 className="text-2xl md:text-5xl font-bold text-cyan-800 mb-6">
            Streamline <p className="text-gray-800 m-1">Your Hospital's</p> Queue
          </h1>
          <p className="text-gray-500 mb-6 text-lg">
            {/* Enhance patient experience by streamlining the appointment 
            <br></br> and check-in process at your hospital. */}
            Streamline Patient flow and improve the waiting experience with our efficient 
            queue management system.
          </p>
          <NavLink to = "/register/patient">
          <button className="flex col gap-2 bg-cyan-700 text-white px-6 py-3 rounded-full shadow-md hover:bg-blue-700 transition">
            Get Started
            <MoveRight />
          </button>
          </NavLink>
        </div>

        
        <div className="flex-1">
          <img
            src= {HospitalImage}
            alt="Queue Illustration"
            className=" w-full max-w-md mx-auto "
          />
        </div>
      </section>

   
      <section className="bg-cyan-700 p-6 w-full h-50 p-8 mt-20 grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
        <div className="flex flex-col items-center p-4">
          <CalendarDays className="h-10 w-10 text-white mb-2" />
          <h3 className="font-semibold text-lg text-white">Manage Appointments</h3>
        </div>
        <div className="flex flex-col items-center p-4">
          <Clock className="h-10 w-10 text-white mb-2" />
          <h3 className="font-semibold text-lg text-white">Reduce Wait Times</h3>
        </div>
        <div className="flex flex-col items-center p-4">
          <BarChart3 className="h-10 w-10 text-white mb-2" />
          <h3 className="font-semibold text-lg text-white">Improve Efficiency</h3>
        </div>
        <div className="flex flex-col items-center p-4">
          <BarChart3 className="h-10 w-10 text-white mb-2" />
          <h3 className="font-semibold text-lg text-white">Improve Efficiency</h3>
        </div>
      </section>
    </div>
  );
};
export default HeroSection;