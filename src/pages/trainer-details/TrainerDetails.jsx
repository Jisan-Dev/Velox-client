import { Button } from '@/components/ui/button';
import img from '../../assets/images/hero2.jpg';
import { Link, useLoaderData } from 'react-router-dom';

const TrainerDetails = () => {
  const { data } = useLoaderData();
  console.log(data);
  return (
    <div className="py-20 container mx-auto">
      <h1 className="mt-6 font-semibold text-5xl text-center mb-20">
        All Details About The Trainer <br /> <span className="text-orange-600">{data.trainerName ?? data.name}</span>{' '}
      </h1>
      <div className="flex gap-16">
        <div className="sm:w-1/2">
          <img src={data?.profileImage ?? data?.imageUrl} className="h-[500px] w-[600px] object-cover object-top rounded-2xl" alt="" />
          <p className="text-2xl mt-4 max-w-[600px]"> {data.details} </p>
          <p className="mt-4 text-lg">
            <strong className="text-gray-600">Expertise in: </strong>
            {data.expertise?.map((item, i) => (
              <span key={i}> {item}, </span>
            ))}{' '}
          </p>
        </div>

        {/* 2nd col */}
        <div className="flex-1">
          <h1 className="text-4xl text-gray-900 font-semibold mb-6">Available Slots: {data.availableSlots} </h1>

          {data.availableSlotsDetails?.map((slot) => (
            <Link to={`/trainer-booking/${slot._id}`} key={slot._id}>
              <div className="text-white bg-orange-600 px-10 py-6 rounded-2xl mb-4 cursor-pointer hover:scale-95 transition-all">
                <h3 className="text-xl font-semibold">{slot.slotName}</h3>
                <p className="text-lg font-medium">
                  {slot.day} {slot['time-duration']}{' '}
                </p>
                <p>
                  <span className="font-medium">Classes:</span>
                  {slot.classNames?.map((name, i) => (
                    <span className="font-semibold" key={i}>
                      {name}
                      {slot.classNames.length - 1 !== i && ','}
                    </span>
                  ))}{' '}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <section className="bg-white mt-6">
        <div className="gap-8 items-center py-8 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16">
          <div className="mt-4 md:mt-0">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900">Become a Fitness Trainer! Join Our Team and Inspire Others to Achieve Their Fitness Goals</h2>
            <p className="mb-6 font-light text-gray-500 md:text-lg ">
              Are you passionate about fitness and helping others reach their full potential? We&#39;re looking for dedicated and enthusiastic trainers to join our team. Whether
              you&#39;re an experienced professional or just starting your career, we provide the support and resources you need to succeed.
            </p>
            <Link to={'/be-a-trainer'}>
              <Button size="lg" className="font-medium text-base">
                Get started
                <svg className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"></path>
                </svg>
              </Button>
            </Link>
          </div>

          <img className="w-full rounded-2xl" src={img} alt="dashboard image" />
        </div>
      </section>
    </div>
  );
};

export default TrainerDetails;
