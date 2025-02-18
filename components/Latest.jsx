import React from "react";

const Latest = () => {
  return (
    <section className="w-full bg-[#f7f7f7] py-16 px-4 md:px-0">
      <div className="w-full max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold text-[#0f4189]">Latest News</h2>
      </div>
      <div className="w-full max-w-6xl mx-auto">
        <div className="w-full grid grid-cols-12 gap-10">
          <div className="col-span-12 md:col-span-8">
            {/* post */}
            <div></div>
          </div>
          <div className="col-span-12 md:col-span-4"></div>
        </div>
      </div>
    </section>
  );
};

export default Latest;
