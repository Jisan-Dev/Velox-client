const AllClasses = () => {
  return (
    <div className="container mx-auto">
      <h1 className="pt-20">All Classes</h1>
      <div className="grid md:grid-cols-2 gap-4">
        {/*<!-- Component: Horizontal card--> */}
        <div className="flex flex-col overflow-hidden bg-white rounded shadow-md text-slate-500 shadow-slate-200 sm:flex-row">
          {/*  <!-- Image --> */}
          <figure className="flex-1">
            <img src="https://picsum.photos/id/118/800/600" alt="card image" className="object-cover min-h-full aspect-auto" />
          </figure>
          {/*  <!-- Body--> */}
          <div className="flex-1 p-6 sm:mx-6 sm:px-0">
            <header>
              <h1 className="text-lg font-semibold mb-2 text-neutral-800">Yoga for beginners</h1>
            </header>
            <p className="text-sm text-neutral-800">After a walk through history, Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>

            <div className="trainers mt-4">
              <h3 className="text-lg font-medium text-neutral-800 mb-2">Trainers who took this class</h3>
              <a href="#" className="relative inline-flex items-center justify-center w-12 h-12 text-white rounded-full">
                <img src="https://i.pravatar.cc/48?img=24" alt="user name" title="user name" className="max-w-full rounded-full" />
              </a>
            </div>
          </div>
        </div>
        {/*<!-- End Horizontal card--> */}
      </div>
    </div>
  );
};

export default AllClasses;
