import Image from "next/image";
import React from "react";
import FlowChat from "../../../../public/Images/automation-work.png";

const HowItsWork = () => {
  return (
    <>
      <div className="w-full px-20 py-20  bg-gradient-to-r how-is-work-bg from-zinc-950 to-zinc-950">
        <div className="w-[358px] ">
          <span className="text-neutral-400 text-[40px] font-semibold furbanist">
            As easy as it can be
            <br />
          </span>
          <span className="text-teal-500 how-its-work-gradient text-[56px] font-bold urbanist">
            How it Works
          </span>
        </div>
        <div className="flex flex-row gap-48 pt-10">
          <div className="flex-col w-[40%] justify-start items-start gap-10 inline-flex">
            <div className="w-[635px] h-[130px] flex gap-11 items-center px-10  bg-gradient-to-r from-stone-950 via-zinc-900 to-neutral-900 cards-border-style">
              <div className=" text-red-500 text-[56px] font-bold urbanist">
                01
              </div>
              <div className=" flex-col justify-start items-start gap-4 inline-flex">
                <div className="text-white text-[32px] font-bold urbanist">
                  Connect
                </div>
                <div className="w-[441px] text-[#8E8E8E] text-base font-light urbanist">
                  Set up triggers for actions or a particular time to get the
                  data.
                </div>
              </div>
            </div>
            <div className="w-[635px] h-[130px] flex items-center gap-11 px-10  bg-gradient-to-r from-stone-950 via-zinc-900 to-neutral-900 custom-border-style">
              <div className=" text-zinc-600 text-[56px] font-bold urbanist">
                02
              </div>
              <div className="  flex-col justify-start items-start gap-4 inline-flex">
                <div className="text-stone-300 text-[32px] font-bold urbanist">
                  Customise
                </div>
                <div className="w-[452px] text-neutral-400 text-base font-light furbanist">
                  Customise your automation, activate integrations of your
                  choice.
                </div>
              </div>
            </div>
            <div className="w-[635px] h-[130px] flex items-center px-10 gap-11  bg-gradient-to-r from-stone-950 via-zinc-900 to-neutral-900 custom-border-style">
              <div className=" text-zinc-600 text-[56px] font-bold urbanist]">
                03
              </div>
              <div className="h-[73px]  flex-col justify-start items-start gap-4 inline-flex">
                <div className="text-stone-300 text-[32px] font-bold urbanist]">
                  You’re ready!
                </div>
                <div className="w-[441px] text-neutral-400 text-base font-light urbanist">
                  Automation is ready. You’ll save a lot of time - everyday.
                </div>
              </div>
            </div>
          </div>
          <Image src={FlowChat} width={605} height={470} />
        </div>
      </div>
    </>
  );
};

export default HowItsWork;
