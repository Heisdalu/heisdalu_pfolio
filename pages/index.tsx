import Image from "next/image";
import Wrapper from "@/components/Wrapper/Wrapper";
import { Navbar } from "@/components/Navbar/Navbar";

export default function Home() {
  return (
    <Wrapper>
      <div className={`font-[500] text-[32px]`}>
        <Navbar />
      </div>

      <div>
        <header>
          <h1 className="font-[500] leading-[2.625rem] mx-auto max-w-[320px] pb-[4rem] mt-[4rem] text-white text-center border-b-[1px] border-lineBlack capitalize tracking-[0.065625rem] flex flex-col md:max-w-[680px]  md:leading-[6rem] md:pb-[5rem] md:mt-[5rem] md:tracking-[0.15rem] lg:max-w-[850px]">
            <span className="text-[2.4375rem] md:text-[5.6875rem]">
              I’M DIVINE, A
            </span>
            <span className="text-yellow text-[2.5rem] md:text-[5.75rem]">
              {" "}
              PASSIONATE{" "}
            </span>
            <span className="text-[2.5rem] md:text-[5.75rem]">
              FRONTEND DEVELOPER
            </span>
          </h1>
        </header>

        <section className="space-y-[1.961875rem] py-64 px-[2.5rem] about border-1 border-white text-white md:grid md:grid-cols-2 md:space-y-[0]">
          <h1 className="text-white flex space-x-1.5 items-center tracking-[0.03rem] font-medium">
            <span className="rounded-full block h-[8px] w-[8px] bg-yellow"></span>
            <span className="text-[1.8125rem]">About</span>
          </h1>
          <div className="max-w-[500px] md:max-w-[none]">
            <p className="font-normal text-[1rem] leading-[1.6875rem] tracking-[0.016875rem]">
              I am Divine Obi, a skilled frontend developer known for crafting
              captivating user interfaces and seamless web experiences. With a
              passion for clean code and pixel perfect design, I merge design
              and technology to bring digital visions to life. A dedicated
              problem solver, constant lover and lover of dogs.
            </p>
            <button className="uppercase text-white text-[1.0625rem] tracking-[0.0625rem] font-medium w-[100%] text-center mt-2 py-[0.9375rem] rounded-[6px] bg-lineBlack">
              Browse Resume
            </button>
          </div>
        </section>
      </div>
    </Wrapper>
  );
}
