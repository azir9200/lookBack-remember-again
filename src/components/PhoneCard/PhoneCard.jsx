import React from 'react';
import { Link } from 'react-router-dom';

const PhoneCard = ({ phone }) => {
  const { id, img, name, price, seller } = phone || {}



  return (
    <div>
      <p>name : {name} </p>

      <div className="relative flex w-96 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
        <div className="relative mx-4 mt-4 h-96 overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700">
          <img
            src={img}
            className="h-full w-full object-cover"
          />
        </div>
        <div className="p-6">
          <div className="mb-2 flex items-center justify-between">
            <p className="block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased">
              {name}
            </p>
            <p className="block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased">
              {price}
            </p>
          </div>
          <p className="block font-sans text-sm font-normal leading-normal text-gray-700 antialiased opacity-75">
            {seller}
          </p>
        </div>
        <div className="p-6 pt-0">
          <Link to={`/phones/${id}`} >
            <button
              className="block w-full select-none rounded-lg bg-blue-gray-900/10 py-3 px-6 text-center align-middle font-sans text-xs font-bold text-blue-gray-900 transition-all hover:scale-105 focus:scale-105 focus:opacity-[0.85] active:scale-100 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              type="button"
            >
              Show Details
            </button>
          </Link>
        </div>
      </div>

    </div>
  );
};

export default PhoneCard;