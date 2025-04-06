import React from "react";
import GuestImg from '../assests/guest.jpg';

const Guest = () => {
  return (
    <div id="guest" className="bg-black rounded-2xl shadow-lg text-center p-6 m-4 max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl mx-auto">
      <h1 className="text-3xl text-gray-100 text-center mb-4">Guest</h1>
      <img
        src={GuestImg}
        alt="Elon Musk"
        className="w-full h-64 object-cover rounded-xl"
      />
      <h2 className="text-2xl text-gray-100 font-bold mt-6 text-center sm:text-left">Elon Musk</h2>
      <p className="text-gray-100 text-center sm:text-left">CEO of Tesla & SpaceX</p>
      <p className="mt-4 text-sm text-gray-100 leading-relaxed text-center sm:text-left">
        Delivering an insightful lecture on Artificial Super Intelligence (ASI) and its future implications.
      </p>
    </div>
  );
};

export default Guest;
