import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { CircleArrowRight, Stethoscope} from 'lucide-react';


const Department=()=>{
    // const departments = [
    //     {
    //       name: "ENT",
    //       doctor: "Dr. Mehta",
    //       timing: "10:00 AM - 12:00 PM",
    //     },
    //     {
    //       name: "Cardiology",
    //       doctor: "Dr. Sharma",
    //       timing: "11:00 AM - 1:00 PM",
    //     },
    //     {
    //       name: "Dermatology",
    //       doctor: "Dr. Kapoor",
    //       timing: "1:30 PM - 3:30 PM",
    //     },
    //     {
    //       name: "Neurology",
    //       doctor: "Dr. Verma",
    //       timing: "2:00 PM - 4:00 PM",
    //     },
    //   ];
      const[dept, setDept] = useState([]);

      const navigate = useNavigate();

      useEffect(()=>{
        const fetchDoctors = async()=>{
          try{
            const response = await fetch(`https://hospital-queue-management-system-0jm3.onrender.com/doctor/department`);
            const data = await response.json();
            console.log(data);

            // const departmentData = data.map(doc =>({
            //   name : doc.department
            // }));
            setDept(data);
  
          }catch(error){
            console.log("Error fetching doctors", error);
          }
        };

        fetchDoctors();
      },[]);
    
      const handleSubmit = async(department)=>{
        const formattedName = department.trim().toLowerCase();
        navigate(`/doctorlist/${formattedName}`);
      }

      return (
        <div className="w-full min-h-screen px-10 py-10 bg-gray-100">
          <h1 className="text-center mb-2 text-2xl font-semibold text-gray-600">DEPARTMENTS</h1>
          <p className="mb-10 text-gray-600 font-bold text-center">Select any one department to check doctor's list</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {dept.map((dept, index) => (
              <div
                key={index}
                className="h-[200px] flex flex-col justify-between p-5 bg-gradient-to-br from-cyan-600 to-sky-600 text-white rounded-xl shadow-lg hover:scale-105 transition-all duration-300"
              >
                <div className="flex flex-col gap-4">
                  <h3 className="text-xl font-bold text-center text-white">{dept}</h3>
                  <p>Timings 8:00 am to 1:00 pm</p>
                  {/* <p className="mt-4 text-[15px]"><span className="font-semibold">Doctor:</span> {dept.doctor}</p> */}
                  {/* <p className="text-[15px]"><span className="font-semibold">Days:</span> {dept.days}</p> */}
                </div>
                <button onClick={()=>handleSubmit(dept)} className="flex col gap-2  mt-4 bg-sky-800 text-white text-center font-semibold p-2 rounded-md hover:bg-blue-700 transition">
                  Show Doctors List 
                  <CircleArrowRight/>
                </button>
              </div>
            ))}
          </div>
        </div>
      );
    };


export default Department;