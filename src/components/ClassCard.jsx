import React from 'react';

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
            <a href="#" className="relative inline-flex items-center justify-center w-12 h-12 text-white rounded-full">
              <img src="https://i.pravatar.cc/48?img=24" alt="user name" title="user name" className="max-w-full rounded-full" />
            </a>
          </div>
        </div>
      </div>
      {/*<!-- End Horizontal card--> */}
    </>
  );
};

export default ClassCard;
