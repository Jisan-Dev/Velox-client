import ForumCard from '@/components/ForumCard';
import axiosPublic from '@/hooks/useAxiosPublic';
import { useQuery } from '@tanstack/react-query';
import React from 'react';

const Community = () => {
  const { data = [], refetch } = useQuery({
    queryKey: ['community'],
    queryFn: async () => {
      const { data } = await axiosPublic.get('/forum');
      return data;
    },
  });
  return (
    <div className="container mx-auto pt-20">
      <div className="grid md:grid-cols-3 gap-6">
        {data.map((post) => (
          <ForumCard key={post._id} data={post} refetch={refetch} />
        ))}
      </div>
    </div>
  );
};

export default Community;
