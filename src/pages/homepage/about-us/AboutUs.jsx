import aboutImg from '../../../assets/images/about.jpg';

const AboutUs = () => {
  return (
    <section className="flex max-sm:flex-col gap-10 container mx-auto items-center justify-center my-28 max-sm:my-12 ">
      <div className="w-full sm:w-1/2">
        <h2 className="sm:text-[58px] text-4xl font-semibold">About Us</h2>
        <div className="h-[2px] bg-orange-500 w-36 my-4"></div>
        <p className="text-base sm:pr-20">
          We&apos;re passionate about empowering people to reach their fitness goals. We believe that everyone deserves to feel confident and strong, and our fitness tracker is
          designed to be your supportive companion on your wellness journey. <br /> <br /> We&apos;re a team of fitness enthusiasts, data geeks, and design mavens who are dedicated
          to creating innovative tools that make tracking progress and staying motivated easier than ever.
        </p>
      </div>
      <div className="w-full sm:w-1/2">
        <div className="sm:h-[500px] h-[300px] overflow-hidden">
          <img src={aboutImg} className="h-full object-cover rounded-lg hover:scale-105 transition-all duration-500" alt="" />
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
