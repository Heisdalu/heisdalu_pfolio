import Wrapper from "@/components/Wrapper/Wrapper";
import { Navbar } from "@/components/Navbar/Navbar";
import Heading from "@/components/Heading/Heading";
import Projects from "../components/Projects/Projects";
import Container from "@/components/Wrapper/Container";

export default function Home() {
  return (
    <Wrapper>
      <Container>
        <div className="bg-spb z-[1111] py-1 font-[500] text-[32px] sticky top-[0]">
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
            <Heading
              title="about"
              style="text-[1.8125rem] md:text-[2.3125rem]"
            />
            <div className="max-w-[800px] md:max-w-[none]">
              <p className="font-normal text-[1rem] leading-[1.6875rem] tracking-[0.016875rem] md:text-[1.0625rem] md:leading-[1.6875rem] md:tracking-[0.016875rem] vlg:leading-[1.875rem] vlg:tracking-[0.01875rem]">
                I am Divine Obi aka{" "}
                <span className="text-yellow">heisdalu</span>, a skilled
                frontend developer known for crafting captivating user
                interfaces and seamless web experiences. With a passion for
                clean code and pixel perfect design, I merge design and
                technology to bring digital visions to life. A dedicated problem
                solver, constant learner and lover of dogs.
              </p>
              <a
                href="https://drive.google.com/file/d/16kOazL7TdyB2SHDacqwFyMpCylLD6cj0/view?usp=drive_link"
                target="_blank"
                className="block uppercase text-white text-[1.0625rem] tracking-[0.0625rem] font-medium w-[100%] text-center mt-2 py-[0.9375rem] rounded-[6px] bg-lineBlack md:max-w-[250px] md:text-[1.0625rem] hover:text-opWhite"
              >
                Browse Resume
              </a>
            </div>
          </section>

          {/* selected works */}
          <section
            id="works"
            className="wrapperGen space-y-[2.46875rem] bg-recBlack rounded-[24px] md:space-y-48"
          >
            <div className="flex flex-col space-y-[0.711875rem] md:flex-row md:space-y-[0] md:items-end">
              <Heading
                title="selected works"
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

          <section className="wrapperGen space-y-[1.961875rem] md:grid md:grid-cols-2 md:space-x-2 md:space-y-[1rem]">
            <Heading
              title="Technologies"
              style="text-[1.6875rem] md:text-[2.125rem]"
            />
            <div className="text-white text-[1rem] space-y-[1.5rem]">
              <p className="tracking-[0.27px] md:tracking-[0.38px]">
                Here are the tools & technologies i use in creating magic:
              </p>

              <ul className="text-opWhite list-disc pl-[1.5rem] space-y-1 md:flex md:space-x-[0] flex-wrap md:pl-[2rem] md:gap-x-[2.3rem] md:gap-y-1 md:max-w-[500px] md:space-y-[0] tracking-[0.27px] md:tracking-[0.3px]">
                <li>TypeScript / JavaScript</li>
                <li>Next.js</li>
                <li>React.js</li>
                <li>Redux / ReduxToolkit</li>
                <li>CSS3</li>
                <li>Tailwind</li>
                <li>Styled Components</li>
                <li>Scss</li>
                <li>Firebase</li>
                <li>Git</li>
                <li>GitHub</li>
                <li>Figma</li>
              </ul>
            </div>
          </section>

          <section
            id="contact"
            className="bg-recBlack wrapperGen rounded-[12px]  md:mx-64 vlg:mx-80 text-center"
          >
            <div className="space-y-[40px] md:space-y-[49px]">
              <h1 className="uppercase text-[2.625rem] leading-[42px] tracking-[1.05px] flex flex-col font-medium text-white  md:text-[6rem] md:leading-[96px] md:tracking-[2.4px]">
                <span>Let’s work</span>
                <span>together</span>
              </h1>
              <a
                href="mailto:divineobi07@gmail.com"
                className="block text-[1.3rem] text-yellow underline break-all md:text-[2rem] lg:text-[3rem]"
              >
                divineobi07@gmail.com
              </a>
            </div>
          </section>

          <footer className="wrapperGen text-center text-white ">
            <div className="flex justify-center flex-col items-center md:flex-row space-y-[1.5rem] md:space-y-[0] md:space-x-[2.5rem]">
              <a
                href="https://github.com/Heisdalu"
                rel="noreferrer"
                target="_blank"
                className="hover:text-opWhite"
              >
                Github
              </a>
              <a
                href="https://www.linkedin.com/in/divine-obi/"
                rel="noreferrer"
                className="hover:text-opWhite"
                target="_blank"
              >
                LinkedIn
              </a>
              <a
                href="https://twitter.com/Dhevine_0X"
                rel="noreferrer"
                target="_blank"
                className="hover:text-opWhite"
              >
                Twitter
              </a>
            </div>
            <div className="mt-2 md:mt-[3rem]">
              Inspired by{" "}
              <a
                rel="noreferrer"
                className="text-yellow"
                target="_blank"
                href="https://www.bryntaylor.co.uk/"
              >
                {" "}
                Bryn Taylor
              </a>
            </div>
          </footer>
        </div>
      </Container>
    </Wrapper>
  );
}
