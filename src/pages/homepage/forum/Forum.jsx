import ForumCard from '@/components/ForumCard';
import SectionHeader from '@/components/SectionHeader';
import axiosPublic from '@/hooks/useAxiosPublic';
import { useQuery } from '@tanstack/react-query';
import React from 'react';

const Forum = () => {
  const { data = [], refetch } = useQuery({
    queryKey: ['forum'],
    queryFn: async () => {
      const { data } = await axiosPublic.get(`/forum?sort=${'dsc'}&size=${6}`);
      return data;
    },
  });
  return (
    <section className="container mx-auto my-28">
      <SectionHeader heading={'Latest Community Buzz'} subHeading={'Dive into the newest discussions and get inspired by your fellow Velox members.'} />

      <div className="grid md:grid-cols-3 gap-6">
        {data.map((post) => (
          <ForumCard key={post._id} data={post} refetch={refetch} />
        ))}
      </div>
    </section>
  );
};

export default Forum;
