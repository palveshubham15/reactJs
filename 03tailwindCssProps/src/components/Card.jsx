import React from "react";

function Card({username , nama = "Title"}){
  // console.log("props : ",props );
  // console.log(username);
    return (
        <div className="max-w-xs p-6 rounded-md shadow-md bg-black m-5">
        <img
          src="https://royalchallengers.com/PRRCB01/public/rcb-logo-new_0.png"
          alt=""
          className="object-cover object-center w-full rounded-md h-72 bg-gray-500"
        />
        <div className="mt-6 mb-2">
          <span className="block text-sm font-medium font-mono tracking-widest uppercase text-indigo-400">
            {nama}
          </span>
          <h2 className="text-xl font-semibold tracking-wide">{username}</h2>
        </div>
        <p className="text-gray-300">
          Royal Challengers Bengaluru is a popular and often unpredictable team in the IPL with a strong fanbase. They have reached the finals three times but are still searching for their first title. The 2025 season looks promising for RCB as they are currently well-positioned for the playoffs under the captaincy of Rajat Patidar.
        </p>
      </div>
    )
}

export default Card