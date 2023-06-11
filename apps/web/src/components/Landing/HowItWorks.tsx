import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { useMediaQuery } from "../../hooks/useMediaQuery";

const HowItWorks = () => {
  const [active, setActive] = useState<1 | 2 | 3 | 4>(1);
  const [completed, setCompleted] = useState<number[]>([]);
  const isMobile = useMediaQuery(768);

  const [ref1, inView1] = useInView({
    triggerOnce: true,
    rootMargin: "-100px",
  });
  const [ref2, inView2] = useInView({
    triggerOnce: true,
    rootMargin: "-100px",
  });
  const [ref3, inView3] = useInView({
    triggerOnce: true,
    rootMargin: "-100px",
  });
  const [ref4, inView4] = useInView({
    triggerOnce: true,
    rootMargin: "-100px",
  });

  // Animation manager
  useEffect(() => {
    if (inView1 && !completed.includes(1)) {
      setActive(1);
      setCompleted([...completed, 1]);
    } else if (inView2 && !completed.includes(2)) {
      setActive(2);
      setCompleted([...completed, 2]);
    } else if (inView3 && !completed.includes(3)) {
      setActive(3);
      setCompleted([...completed, 3]);
    } else if (inView4 && !completed.includes(4)) {
      setActive(4);
      setCompleted([...completed, 4]);
    }
  }, [inView1, inView2, inView3, inView4]);

  return (
    <div>
      <h3 className="mb-16 text-[1.9rem] leading-[39.58px] md:text-center">
        See <span className="text-[#006633]">how Afrigives works</span>
      </h3>
      <div className="flex h-[800px] md:justify-center">
        <div className="hidden grid-rows-4 md:grid ">
          <div
            ref={ref2}
            className={`flex flex-col justify-center row-span-1 row-start-2 text-right translate-y-full opacity-0 fill-mode-forwards ${
              completed.includes(2) && "animate-slideIn"
            }`}
          >
            <h1 className="text-xl font-medium md:text-2xl">Find a cause</h1>

            <p className="font-medium opacity-[48%]">
              Purus a, ut consequat vulputate sit volutpat.
            </p>
          </div>
          <div
            ref={ref4}
            className={`flex flex-col justify-center row-span-1 row-start-4 text-right translate-y-full opacity-0 fill-mode-forwards ${
              completed.includes(4) && "animate-slideIn"
            }`}
          >
            <h1 className="text-xl font-medium md:text-2xl">Donate</h1>

            <p className="font-medium opacity-[48%]">
              Diam viverra gravida dis commodo ipsum. Tellus.
            </p>
          </div>
        </div>

        <div className="grid grid-rows-4 bg-[#E0E0E0] w-1 mr-8 md:mx-16 gap-8 transition-all duration-200">
          {[...Array(4)].map((_, idx) => (
            <div
              key={idx + 1}
              className={`row-start-${
                idx + 1
              } row-span-1 animate-in slide-in-from-top-0 slide-out-to-bottom-full duration-500 fade-in-100 fade-out-100 ${
                active === idx + 1 && "bg-[#006633]"
              }`}
            />
          ))}
        </div>
        <div className="grid grid-rows-4">
          <div
            ref={ref1}
            className={`flex flex-col justify-center row-span-1 row-start-1
             translate-y-full opacity-0 fill-mode-forwards ${
               completed.includes(1) && "animate-slideIn"
             }`}
          >
            <h1 className="text-xl font-medium md:text-2xl">
              Create an account
            </h1>

            <p className="font-medium opacity-[48%]">
              Purus a, ut consequat vulputate sit volutpat.
            </p>
          </div>

          <div
            ref={ref3}
            className={`flex flex-col justify-center row-span-1 row-start-3 translate-y-full opacity-0 fill-mode-forwards ${
              completed.includes(3) && "animate-slideIn"
            }`}
          >
            <h1 className="text-xl font-medium md:text-2xl">Cash or kind?</h1>

            <p className="font-medium opacity-[48%]">
              Diam viverra gravida dis commodo ipsum. Tellus.
            </p>
          </div>

          {/* Visible on small screens */}
          {isMobile && (
            <>
              <div
                ref={ref2}
                className={`flex flex-col justify-center row-span-1 row-start-2 md:hidden translate-y-full opacity-0 fill-mode-forwards ${
                  completed.includes(2) && "animate-slideIn"
                }`}
              >
                <h1 className="text-xl font-medium md:text-2xl">
                  Find a cause
                </h1>

                <p className="font-medium opacity-[48%]">
                  Purus a, ut consequat vulputate sit volutpat.
                </p>
              </div>
              <div
                ref={ref4}
                className={`flex flex-col justify-center row-span-1 row-start-4 md:hidden translate-y-full opacity-0 fill-mode-forwards ${
                  completed.includes(4) && "animate-slideIn"
                }`}
              >
                <h1 className="text-xl font-medium md:text-2xl">Donate</h1>

                <p className="font-medium opacity-[48%]">
                  Diam viverra gravida dis commodo ipsum. Tellus.
                </p>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
