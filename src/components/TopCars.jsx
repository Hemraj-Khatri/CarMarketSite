import React from "react";
import FakerData from "../FakerData";
import CarItems from "./CarItems";
import {  useGetAllListsQuery, useRecentAddListsQuery } from "../Slices/listingApiSlice";
export default function TopCars() {

  const {data:recentAddLists, isLoading, error} = useRecentAddListsQuery();
// const {data:getAllLists, isLoading, error} = useGetAllListsQuery();
console.log(recentAddLists);

  return (
    <div>
      {isLoading ?(<div>Loading....</div>):(
        <>
             <h1 className="text-center text-3xl font-semibold pt-10 pb-5 md:pt-24">
             Recent Uploaded Cars
           </h1>
           <div className="carousel carousel-end rounded-box w-full">
             {recentAddLists.data.map((car, index) => (
               <div key={index} className="carousel-item w-full md:w-1/4">
                
                 {/* Set width to 25% */}
                 <CarItems car={car} />
               </div>
             ))}
           </div>
           </>
      )}
 
    </div>
  );
}
