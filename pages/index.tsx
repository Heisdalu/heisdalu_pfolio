import Image from "next/image";
import Wrapper from "@/components/Wrapper/Wrapper";
import { Navbar } from "@/components/Navbar/Navbar";
import Heading from "@/components/Heading/Heading";
import Projects from "../components/Projects/Projects";

export default function Home() {
  return (
    <Wrapper>
      <div className={`font-[500] text-[32px]`}>
        <Navbar />
      </div>

      <div>
        <header>
          <h1 className="font-[500] leading-[2.625rem] mx-auto max-w-[320px] pb-[4rem] mt-[4rem] text-white text-center capitalize tracking-[0.065625rem] flex flex-col md:max-w-[680px]  md:leading-[6rem] md:pb-[5rem] md:mt-[5rem] md:tracking-[0.15rem] lg:max-w-[850px]">
            <span className="text-[2.4375rem] md:text-[5.6875rem]">
              I’M DIVINE, A
            </span>
            <span className="text-yellow text-[2.5rem] md:text-[5.75rem]">
              PASSIONATE
            </span>
            <span className="text-[2.5rem] md:text-[5.75rem]">
              FRONTEND DEVELOPER
            </span>
          </h1>
        </header>

        {/* About me */}
        <section className="wrapperPadding border-t-[1px] border-lineBlack space-y-[1.961875rem] mx-[2.5rem] text-white md:grid md:grid-cols-2 md:space-x-2 md:space-y-0.5 md:mx-64 vlg:mx-80">
          <Heading title="about" style="text-[1.8125rem] md:text-[2.3125rem]" />
          <div className="max-w-[500px] md:max-w-[none] border1 border-white ">
            <p className="font-normal text-[1rem] leading-[1.6875rem] tracking-[0.016875rem] md:text-[1.0625rem] md:leading-[1.6875rem] md:tracking-[0.016875rem] vlg:leading-[1.875rem] vlg:tracking-[0.01875rem]">
              I am Divine Obi aka <span className="text-yellow">heisdalu</span>,
              a skilled frontend developer known for crafting captivating user
              interfaces and seamless web experiences. With a passion for clean
              code and pixel perfect design, I merge design and technology to
              bring digital visions to life. A dedicated problem solver,
              constant learner and lover of dogs.
            </p>
            <a
              href="/ggg"
              target="_blank"
              className="block uppercase text-white text-[1.0625rem] tracking-[0.0625rem] font-medium w-[100%] text-center mt-2 py-[0.9375rem] rounded-[6px] bg-lineBlack md:max-w-[250px] md:text-[1.0625rem]"
            >
              Browse Resume
            </a>
          </div>
        </section>

        {/* selected works */}
        <section className="wrapperGen space-y-[2.46875rem] bg-recBlack rounded-[24px] md:space-y-48">
          <div className="border-1 border-white flex flex-col space-y-[0.711875rem] md:flex-row md:space-y-[0] md:items-end">
            <Heading
              title="Selected works"
              style="text-[1.9375rem] leading-[38.4px] md:text-[2.4375rem] md:tracking-[0.01875rem]"
            />

            <span
              aria-label="selceted works time frame"
              className="text-[#ffffff80] text-[1.0625rem] tracking-[0.016875rem] md:ml-auto md:text-[1.1875rem]"
            >
              2022—{new Date().getFullYear()}
            </span>
          </div>

          <Projects />
        </section>
      </div>
    </Wrapper>
  );
}
