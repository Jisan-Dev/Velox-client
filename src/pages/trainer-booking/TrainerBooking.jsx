import { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const TrainerBooking = () => {
  const [selectedSlot, setSelectedSlot] = useState({});
  const { data } = useLoaderData();
  const { id } = useParams();

  useEffect(() => {
    const slot = data.availableSlotsDetails.filter((obj) => obj._id === id);
    setSelectedSlot(slot[0]);
  }, [data, id]);

  return (
    <div className="pt-40">
      <p> {selectedSlot?.day} </p>
      <p> {selectedSlot['time-duration']} </p>
    </div>
  );
};

export default TrainerBooking;
