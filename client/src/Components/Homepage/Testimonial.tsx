import React from "react";

const Testimonial = () => {
  const cards = [
    {
      image: "/image/first.png",
      title: "Greenish",
      subtitle: "Team management",
      growth: "195% Growth",
    },
    {
      image: "/image/fist.png",
      title: "Rise",
      subtitle: "Project management",
      growth: "256% Growth",
    },
    {
      image: "/image/second.png",
      title: "Network",
      subtitle: "Secure Storages",
      growth: "256% Growth",
    },
  ];
  const testimonials = [
    {
      quote:
        '“their team are easy to work with and helped me make amazing website in a short amount of time. thanks guys for all your hand work.”',
      name: 'Matthew Miller',
      image: '/image/img1.png',
      company: 'Greenish',
      logo: '/image/first.png',
    },
    {
      quote:
        '“their team are easy to work with and helped me make amazing website in a short amount of time. thanks guys for all your hand work.”',
      name: 'Matthew Miller',
      image: '/image/img2.png',
      company: 'Greenish',
      logo: '/image/first.png',
    },
    {
      quote:
        '“their team are easy to work with and helped me make amazing website in a short amount of time. thanks guys for all your hand work.”',
      name: 'Matthew Miller',
      image: '/image/img1.png',
      company: 'Greenish',
      logo: '/image/first.png',
    },
    {
      quote:
        '“their team are easy to work with and helped me make amazing website in a short amount of time. thanks guys for all your hand work.”',
      name: 'Matthew Miller',
      image: '/image/img3.png',
      company: 'Greenish',
      logo: '/image/first.png',
    },
    {
      quote:
        '“their team are easy to work with and helped me make amazing website in a short amount of time. thanks guys for all your hand work.”',
      name: 'Matthew Miller',
      image: '/image/img2.png',
      company: 'Greenish',
      logo: '/image/first.png',
    },
    {
      quote:
        '“their team are easy to work with and helped me make amazing website in a short amount of time. thanks guys for all your hand work.”',
      name: 'Matthew Miller',
      image: '/image/img1.png',
      company: 'Greenish',
      logo: '/image/first.png',
    },
    {
      quote:
        '“their team are easy to work with and helped me make amazing website in a short amount of time. thanks guys for all your hand work.”',
      name: 'Matthew Miller',
      image: '/image/img3.png',
      company: 'Greenish',
      logo: '/image/first.png',
    },
  ];
  return (
    <>
      <div className="bg-[#131313] px-4 sm:px-12 h-auto" id="Testimonial">
        <div className="max-w-[1290px] mx-auto">
          <header className="text-white py-16 text-center">
            <p className="flex justify-center items-center text-xs font-thin sm:text-base">
              <img src="/image/testi.svg" className="w-[35px] mr-2" alt="" />
              <span>Valuable 🧑🏼‍🤝‍🧑 Feedback</span>
            </p>
            <h1 className="text-4xl mt-4 text-[#FFFEFD]">
              Trusted By The World&apos;s Fastest
              <br />
              Growing Companies
            </h1>
          </header>

          <div className="py-8">
            <div className="flex flex-wrap gap-7 items-center justify-center">
              {cards.map((card, index) => (
                <div key={index} className="w-[350px] relative">
                  <img src="/image/testibg.svg" alt="" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 p-3 flex flex-col justify-between text-lg">
                    <div className="flex justify-between">
                      <div className="flex items-center gap-2">
                        <img src={card.image} alt="" className="w-[20px] sm:w-[35px]" />
                        <h3 className="text-[#E2CCBF] text-sm sm:text-2xl font-bold">
                          {card.title}
                        </h3>
                      </div>
                      <p className="text-[#D2D2D2] text-sm sm:text-lg">
                        {card.subtitle}
                      </p>
                    </div>
                    <div className="self-end text-[#B3B3B3] text-xs sm:text-sm border border-gray-600 p-2 rounded-full">
                      {card.growth}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="py-14">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {testimonials.map((item, index) => (
                <div
                  key={index}
                  className={`border border-[#6b625d] px-7 py-8 rounded-2xl sm:w-auto ${index === 6 ? 'lg:col-start-2 lg:col-end-3' : ''
                    }`}
                >
                  <p className="text-[#D2D2D2] text-base mb-6">{item.quote}</p>
                  <div className="flex justify-between">
                    <div className="flex items-center gap-2">
                      <img
                        src={item.image}
                        alt="Testimonial User"
                        className="w-[32px] h-[32px] rounded-full"
                      />
                      <p className="text-white text-sm font-bold">{item.name}</p>
                    </div>
                    <div className="flex items-center gap-1">
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