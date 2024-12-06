import React from "react";

const Testimonial = () => {
  const cards = [
    {
      image: "/image/greenish.svg",
      // title: "",
      subtitle: "Team management",
      growth: "195% Growth",
    },
    {
      image: "fist.png",
      title: "Rise",
      subtitle: "Project management",
      growth: "256% Growth",
    },
    {
      image: "second.png",
      title: "Network",
      subtitle: "Secure Storages",
      growth: "256% Growth",
    },
  ];
  const testimonials = [
    {
      quote:
        "“their team are easy to work with and helped me make amazing website in a short amount of time. thanks guys for all your hand work.”",
      name: "Matthew Miller",
      image: "img1.png",
      company: "Greenish",
      logo: "first.png",
    },
    {
      quote:
        "“their team are easy to work with and helped me make amazing website in a short amount of time. thanks guys for all your hand work.”",
      name: "Matthew Miller",
      image: "img2.png",
      company: "Greenish",
      logo: "first.png",
    },
    {
      quote:
        "“their team are easy to work with and helped me make amazing website in a short amount of time. thanks guys for all your hand work.”",
      name: "Matthew Miller",
      image: "img1.png",
      company: "Greenish",
      logo: "first.png",
    },
    {
      quote:
        "“their team are easy to work with and helped me make amazing website in a short amount of time. thanks guys for all your hand work.”",
      name: "Matthew Miller",
      image: "img3.png",
      company: "Greenish",
      logo: "first.png",
    },
    {
      quote:
        "“their team are easy to work with and helped me make amazing website in a short amount of time. thanks guys for all your hand work.”",
      name: "Matthew Miller",
      image: "img2.png",
      company: "Greenish",
      logo: "first.png",
    },
    {
      quote:
        "“their team are easy to work with and helped me make amazing website in a short amount of time. thanks guys for all your hand work.”",
      name: "Matthew Miller",
      image: "img1.png",
      company: "Greenish",
      logo: "first.png",
    },
    {
      quote:
        "“their team are easy to work with and helped me make amazing website in a short amount of time. thanks guys for all your hand work.”",
      name: "Matthew Miller",
      image: "img3.png",
      company: "Greenish",
      logo: "first.png",
    },
  ];
  return (
    <>
      <div className="bg-[#131313]  h-auto px-12" id="Testimonial">
        <div className="max-w-[1290px] mx-auto">
          <header className="text-white py-16 h-auto">
            <div className="max-w-7xl mx-auto px-4 text-center">
              {/* Top Feedback Text */}
              <p className="flex justify-center items-center text-xs font-thin sm:text-base ">
                <img src="/image/testi.svg" className="w-[35px] mr-2" alt="" />
                <span> Valuable 🧑🏼‍🤝‍ 🧑Feedback </span> 
              </p>

              {/* Header Title */}
              <div className="text-4xl mt-4 text-[#FFFEFD] ">
                <h1>Trusted By The World's Fastest </h1>
                <h1>Growing Companies</h1>
              </div>
            </div>
          </header>
          <div className="py-8">
            {/* Grid Layout */}
            <div className="flex flex-row xl:flex-wrap gap-7 items-center justify-center">
              {cards.map((card, index) => (
                <div key={index} className=" w-[350px] relative">
                  <div className="w-full h-full">
                    <img
                      src="/image/testibg.svg"
                      alt=""
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="w-full h-full p-1 flex flex-col justify-between text-lg absolute top-0">
                    <div className="flex flex-row justify-between p-3">
                      <div className="flex items-center gap-2">
                        <img
                          className="w-[15px] sm:w-[20px] md:w-[35px]"
                          src={card.image}
                          alt=""
                        />
                        <h3 className="text-[#E2CCBF] text-sm sm:text-2xl font-bold">
                          {card.title}
                        </h3>
                      </div>
                      <p className="text-[#D2D2D2] text-sm w-[80px] sm:text-lg sm:w-[126px]">
                        {card.subtitle}
                      </p>
                    </div>

                    <div className="text-[#B3B3B3] self-end text-xs sm:text-sm border border-gray-600 p-[3px] sm:p-2  rounded-full  sm:mr-3 ">
                      <p className="">{card.growth}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="py-14 bg-[#131313]">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-x-2 gap-y-8 justify-items-center">
              {testimonials.map((item, index) => (
                <div
                  key={index}
                  className={`flex flex-col border border-[#6b625d]  px-7 py-8 rounded-2xl sm:w-auto${
                    index === 6 ? "lg:col-start-2 lg:col-end-3" : ""
                  }`}
                >
                  {/* Testimonial Text */}
                  <p className="text-[#D2D2D2] text-base mb-6">{item.quote}</p>

                  {/* User Details */}
                  <div className="flex justify-between mt-4">
                    <div className="flex items-center gap-2">
                      <img
                        src={item.image}
                        alt="Testimonial User"
                        className="w-[32px] h-[32px] rounded-full"
                      />
                      <div>
                        <p className="text-white text-sm font-bold">
                          {item.name}
                        </p>
                      </div>
                    </div>

                    {/* Company Logo */}
                    <div className="flex gap-1 items-center">
                      <img
                        src={item.logo}
                        alt="Company Logo"
                        className="w-[21px] h-[18px]"
                      />
                      <p className="text-[#E2CCBF] font-bold">{item.company}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonial;
