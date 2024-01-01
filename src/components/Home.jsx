import React from "react";
import Dp from "../assets/dp.png";

const Home = () => {
  return (
    <div className="h-screen w-full">
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-between h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-7xl font-bold text-white">Hi, I'm Joel</h2>
          <p className="text-gray-500 py-4 max-w-md">I am a developer</p>
        </div>
        <div className="">
          <img
            src={Dp}
            alt="my profile"
            className="mx-auto w-2/3 md:w-full rounded-3xl"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;