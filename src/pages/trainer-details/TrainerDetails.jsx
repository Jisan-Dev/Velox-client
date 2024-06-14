import React from 'react';
import { useLoaderData } from 'react-router-dom';

const TrainerDetails = () => {
  const { data } = useLoaderData();
  console.log(data);
  return (
    <div className="py-20">
      <h1>Trainers details for : {data.trainerName}</h1>
    </div>
  );
};

export default TrainerDetails;
