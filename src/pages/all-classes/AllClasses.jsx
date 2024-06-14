import ClassCard from '@/components/ClassCard';
import SectionHeader from '@/components/SectionHeader';
import axiosPublic from '@/hooks/useAxiosPublic';
import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import { Helmet } from 'react-helmet-async';

const AllClasses = () => {
  const [itemsPerPage, setItemsPerPage] = useState(4);
  const [currentPage, setCurrentPage] = useState(1);
  const { data: classes } = useQuery({
    queryKey: ['classes', currentPage],
    queryFn: async () => {
      const { data } = await axiosPublic.get(`/classes?page=${currentPage}&size=${itemsPerPage}`);
      return data;
    },
  });
  const { data: count = 0 } = useQuery({
    queryKey: ['classes-count'],
    queryFn: async () => {
      const { data } = await axiosPublic.get('/classes-count');
      return data.count;
    },
  });

  console.log(classes);

  const numberOfPages = Math.ceil(count / itemsPerPage);
  const pages = [...Array(numberOfPages).keys()].map((element) => element + 1);

  return (
    <>
      <Helmet>
        <title>VELOX | ClASSES</title>
      </Helmet>
      <div className="container mx-auto py-20">
        <SectionHeader heading={'All Classes'} subHeading={'See through various kind of classes does our trainers usually conduct'} />
        <div className="grid md:grid-cols-2 gap-10">
          {classes?.map((c) => (
            <ClassCard key={c?._id} classObj={c} />
          ))}
        </div>

        {/* Pagination Section */}
        <div className="flex justify-center mt-12">
          {/* Previous Button */}
          <button
            onClick={() => {
              setCurrentPage(currentPage - 1);
              window.scrollTo(0, 0);
            }}
            disabled={currentPage === 1}
            className="px-4 py-2 mx-1 text-gray-700 disabled:text-gray-500 capitalize bg-gray-200 rounded-md disabled:cursor-not-allowed disabled:hover:bg-gray-200 disabled:hover:text-gray-500 hover:bg-orange-500  hover:text-white">
            <div className="flex items-center -mx-1">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-1 rtl:-scale-x-100" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16l-4-4m0 0l4-4m-4 4h18" />
              </svg>

              <span className="mx-1">previous</span>
            </div>
          </button>

          {/* Numbers */}
          {pages.map((btnNum) => (
            <button
              onClick={() => {
                setCurrentPage(btnNum);
                window.scrollTo(0, 0);
              }}
              key={btnNum}
              className={`hidden ${
                currentPage === btnNum ? 'bg-orange-500 text-white' : ''
              } px-4 py-2 mx-1 transition-colors duration-300 transform  rounded-md sm:inline hover:bg-orange-500  hover:text-white`}>
              {btnNum}
            </button>
          ))}

          {/* Next Button */}
          <button
            onClick={() => {
              setCurrentPage(currentPage + 1);
              window.scrollTo(0, 0);
            }}
            disabled={currentPage === numberOfPages}
            className="px-4 py-2 mx-1 text-gray-700 transition-colors duration-300 transform bg-gray-200 rounded-md hover:bg-orange-500 disabled:hover:bg-gray-200 disabled:hover:text-gray-500 hover:text-white disabled:cursor-not-allowed disabled:text-gray-500">
            <div className="flex items-center -mx-1">
              <span className="mx-1">Next</span>

              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-1 rtl:-scale-x-100" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </div>
          </button>
        </div>
      </div>
    </>
  );
};

export default AllClasses;
