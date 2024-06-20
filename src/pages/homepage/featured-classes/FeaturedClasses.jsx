import ClassCard from '@/components/ClassCard';
import SectionHeader from '@/components/SectionHeader';
import { Button } from '@/components/ui/button';
import axiosPublic from '@/hooks/useAxiosPublic';
import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router-dom';

const FeaturedClasses = () => {
  const { data } = useQuery({
    queryKey: ['featuredClasses'],
    queryFn: async () => {
      const { data } = await axiosPublic.get(`/classes?sort=${'dsc'}`);
      return data;
    },
  });
  console.log('sorted classes', data);
  return (
    <section className="container mx-auto my-28">
      <SectionHeader heading={'Featured Classes'} subHeading={'Explore a variety of classes tailored to your goals, from strength training to yoga and more'} />
      <div className="grid md:grid-cols-2 gap-10">
        {data?.map((item) => (
          <ClassCard key={item._id} classObj={item} />
        ))}
      </div>
      <div className="flex justify-center mt-16">
        <Link to={'/all-classes'}>
          <Button size="lg" className="text-lg">
            {' '}
            All Classes
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default FeaturedClasses;
