import React from 'react';
import { Link } from 'react-router-dom';
import { format } from 'date-fns';
import useAuth from '@/hooks/useAuth';
import useAxiosSecure from '@/hooks/useAxiosSecure';
import toast from 'react-hot-toast';

const ForumCard = ({ data, refetch }) => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();

  const upVoteHandler = async (id) => {
    if (!user) {
      toast.error('Please login first');
      return;
    }

    const res = await axiosSecure.put(`/forum/${id}/upVote?email=${user?.email}`);
    console.log(res);
    refetch();
  };
  return (
    <>
      {/*<!-- Component: Card with subtitle --> */}
      <div className="overflow-hidden bg-white rounded shadow-md text-slate-500 shadow-slate-200">
        <div className="p-6 flex flex-col h-full">
          <header className="flex-1">
            <h3 className="text-xl font-medium text-slate-700"> {data?.title} </h3>
            <div className="flex items-center gap-4">
              <p className="text-sm text-slate-400">
                By <span className="font-medium">{data?.authorName}</span>, <span className="text-sm">{format(new Date(data?.createdAt), 'MMMdd yyyy')}</span>
              </p>
              <span className="inline-flex items-center justify-center rounded-full bg-amber-100 px-2.5 py-0.5 text-amber-700">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="-ms-1 me-1.5 h-4 w-4">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.25 9.75h4.875a2.625 2.625 0 010 5.25H12M8.25 9.75L10.5 7.5M8.25 9.75L10.5 12m9-7.243V21.75l-3.75-1.5-3.75 1.5-3.75-1.5-3.75 1.5V4.757c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0c1.1.128 1.907 1.077 1.907 2.185z"
                  />
                </svg>

                <p className="whitespace-nowrap text-sm"> {data?.role} </p>
              </span>
            </div>
            <p className="mt-4">{data?.shortDescription}</p>
          </header>
          <div className="flex items-center justify-between">
            <Link to={`/forum/${data?._id}`} className="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-blue-600">
              Find out more
              <span aria-hidden="true" className="block transition-all group-hover:ms-0.5 rtl:rotate-180">
                &rarr;
              </span>
            </Link>

            <div className="flex gap-2">
              <button
                onClick={() => upVoteHandler(data?._id)}
                className="py-1.5 px-3 hover:text-green-600 hover:scale-105 hover:shadow text-center border rounded-md border-gray-400 h-8 text-sm flex items-center gap-1 lg:gap-2">
                <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z"></path>
                </svg>
                <span>{data?.upVotes}</span>
              </button>

              <button className="py-1.5 px-3 hover:text-red-600 hover:scale-105 hover:shadow text-center border rounded-md border-gray-400 h-8 text-sm flex items-center gap-1 lg:gap-2">
                <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M7.5 15h2.25m8.024-9.75c.011.05.028.1.052.148.591 1.2.924 2.55.924 3.977a8.96 8.96 0 01-.999 4.125m.023-8.25c-.076-.365.183-.75.575-.75h.908c.889 0 1.713.518 1.972 1.368.339 1.11.521 2.287.521 3.507 0 1.553-.295 3.036-.831 4.398C20.613 14.547 19.833 15 19 15h-1.053c-.472 0-.745-.556-.5-.96a8.95 8.95 0 00.303-.54m.023-8.25H16.48a4.5 4.5 0 01-1.423-.23l-3.114-1.04a4.5 4.5 0 00-1.423-.23H6.504c-.618 0-1.217.247-1.605.729A11.95 11.95 0 002.25 12c0 .434.023.863.068 1.285C2.427 14.306 3.346 15 4.372 15h3.126c.618 0 .991.724.725 1.282A7.471 7.471 0 007.5 19.5a2.25 2.25 0 002.25 2.25.75.75 0 00.75-.75v-.633c0-.573.11-1.14.322-1.672.304-.76.93-1.33 1.653-1.715a9.04 9.04 0 002.86-2.4c.498-.634 1.226-1.08 2.032-1.08h.384"></path>
                </svg>
                <span>{data?.downVotes}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      {/*<!-- End Card with subtitle --> */}
    </>
  );
};

export default ForumCard;
