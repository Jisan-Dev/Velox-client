import React from 'react';
import { Link } from 'react-router-dom';

const ClassCard = ({ classObj }) => {
  return (
    <>
      {/*<!-- Component: Horizontal card--> */}
      <div className="flex flex-col overflow-hidden bg-white rounded shadow-md text-slate-500 shadow-slate-200 sm:flex-row">
        {/*  <!-- Image --> */}
        <figure className="flex-1">
          <img src={classObj?.image} alt="card image" className="object-cover min-h-full aspect-auto" />
        </figure>
        {/*  <!-- Body--> */}
        <div className="flex-1 p-6 sm:mx-6 sm:px-0">
          <header>
            <h1 className="text-xl font-semibold mb-2 text-neutral-800">{classObj?.title}</h1>
          </header>
          <p className="text-sm font-medium text-neutral-800 text-opacity-60">{classObj?.description}</p>

          <div className="trainers mt-4">
            <h3 className="text-lg font-medium text-neutral-800 mb-2">Trainers who took this class</h3>
            {classObj?.trainers?.map((trainer) => (
              <Link to={`/trainers/${trainer.trainerObjId}`} key={trainer.trainerObjId}>
                <span title={trainer.name} className="relative inline-flex items-center justify-center  text-white rounded-full">
                  <img src={trainer.image} alt="trainer name" className="w-12 h-12 rounded-full object-cover object-top mr-2" />
                </span>
              </Link>
            ))}
          </div>

          <div>
            <p className="text-sm mt-3 ">
              <span className="font-semibold">Total Bookings:</span> <span className="font-bold"> {classObj.booking_count} </span>
            </p>
          </div>
        </div>
      </div>
      {/*<!-- End Horizontal card--> */}
    </>
  );
};

export default ClassCard;
