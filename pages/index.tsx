import Image from "next/image";
import Wrapper from "@/components/Wrapper/Wrapper";
import { Navbar } from "@/components/Navbar/Navbar";
import Heading from "@/components/Heading/Heading";

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
              {" "}
              PASSIONATE{" "}
            </span>
            <span className="text-[2.5rem] md:text-[5.75rem]">
              FRONTEND DEVELOPER
            </span>
          </h1>
        </header>

        {/* About me */}
        <section className="border-t-[1px] border-lineBlack space-y-[1.961875rem] py-64 mx-[2.5rem] text-white md:grid md:grid-cols-2 md:space-x-2 md:space-y-0.5 md:px-64">
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

        <section className="space-y-[2.46875rem] bg-recBlack rounded-[24px] py-64 px-[2.5rem] md:px-64">
          <div className="border-1 border-white flex flex-col space-y-[0.711875rem] md:flex-row md:space-y-[0] md:items-end">
            <Heading
              title="Selected works"
              style="text-[1.9375rem] leading-[38.4px]"
            />

            <span
              aria-label="selceted works time frame"
              className="text-[#ffffff80] tracking-[0.016875rem] md:ml-auto"
            >
              2022—{new Date().getFullYear()}
            </span>
          </div>

          <div className="py-[3rem] space-y-2 md:grid md:space-y-[0] md:grid-cols-2 border md:[grid-gap:2rem] lg:[grid-gap:4rem]">
            {/* 1 picture */}
            <div className="animate-card border-1 border-r-red-400 rounded-[6px] overflow-hidden bg-[#2A2A29]">
              <div className="relative innerDiv max-h-[300px] md:h-[350px] overflow-hidden lg:max-h-[653px]">
                <Image
                  src="/lol.png"
                  height={0}
                  width={0}
                  quality={100}
                  sizes="100vw"
                  style={{ width: "100%", height: "auto" }}
                  alt=""
                />
              </div>
              <div className="p-[1.25rem]">
                <h1 className="text-white font-medium">
                  Dracora : An Admin Dashboard With Visualized Charts & Kanban
                </h1>
                <div className="borde border-white font-normal text-opWhite flex flex-wrap">
                  <span className="border- border-white mr-0.5 py-[3px]">
                    Next.js
                  </span>
                  <span className="border- border-white mr-0.5 py-[3px]">
                    TypeScript
                  </span>
                  <span className="border- border-white mr-0.5 py-[3px]">
                    Firebase
                  </span>
                  <span className="border- border-white mr-0.5 py-[3px]">
                    Chart.js
                  </span>
                </div>
                <div className="borde space-x-1 mt-1 flex">
                  <a
                    href="https://dracora.vercel.app/"
                    rel="noreferrer"
                    target="_blank"
                    className="text-white px-1 py-0.5 rounded-[6px] border"
                  >
                    Live
                  </a>
                  <a
                    href="https://github.com/Heisdalu/Dracora"
                    rel="noreferrer"
                    target="_blank"
                    className="text-yellow px-1 py-0.5 rounded-[6px] border"
                  >
                    Github
                  </a>
                </div>
              </div>
            </div>

            {/* 2 picture */}
            <div className="animate-card md:self-start border-1 border-r-red-400 rounded-[6px] overflow-hidden bg-[#2A2A29]">
              <div className="border-[0px] border-yellow max-h-[210px] md:h-[250px] overflow-hidden lg:max-h-[653px]">
                <Image
                  src="/jo.png"
                  height={0}
                  width={0}
                  quality={100}
                  sizes="100vw"
                  style={{ width: "100%", height: "auto" }}
                  alt=""
                />
              </div>
              <div className="p-[1.25rem]">
                <h1 className="text-white font-medium">
                  RETRO : Food E-commerce Web Application
                </h1>
                <div className="borde border-white font-normal text-opWhite flex flex-wrap">
                  <span className="border- border-white mr-0.5 py-[3px]">
                    React.js
                  </span>
                  <span className="border- border-white mr-0.5 py-[3px]">
                    Redux Toolkit
                  </span>
                  <span className="border- border-white mr-0.5 py-[3px]">
                    JavaScript
                  </span>
                  <span className="border- border-white mr-0.5 py-[3px]">
                    Firebase
                  </span>
                  <span className="border- border-white mr-0.5 py-[3px]">
                    Tailwind
                  </span>
                </div>
                <div className="borde space-x-1 mt-1 flex">
                  <a
                    href="https://retro-ecommerce.vercel.app/"
                    rel="noreferrer"
                    target="_blank"
                    className="text-white px-1 py-0.5 rounded-[6px] border"
                  >
                    Live
                  </a>
                  <a
                    href="https://github.com/Heisdalu/retro-ecommerce"
                    rel="noreferrer"
                    target="_blank"
                    className="text-yellow px-1 py-0.5 rounded-[6px] border"
                  >
                    Github
                  </a>
                </div>
              </div>
            </div>

            {/* 3 picture */}
            <div className="animate-card border-1 border-r-red-400 rounded-[6px] overflow-hidden bg-[#2A2A29]">
              <div className="max-h-[210px] md:h-[285px] overflow-hidden lg:max-h-[653px]">
                <Image
                  src="/view.png"
                  height={0}
                  width={0}
                  quality={100}
                  sizes="100vw"
                  style={{ width: "100%", height: "auto" }}
                  alt=""
                />
              </div>
              <div className="p-[1.25rem]">
                <h1 className="text-white font-medium">
                  Country View : Broswe Vital Informations About Countries
                </h1>
                <div className="borde border-white font-normal text-opWhite flex flex-wrap">
                  <span className="border- border-white mr-0.5 py-[3px]">
                    React.js
                  </span>
                  <span className="border- border-white mr-0.5 py-[3px]">
                    JavaScript
                  </span>
                  <span className="border- border-white mr-0.5 py-[3px]">
                    CSS3
                  </span>
                </div>
                <div className="borde space-x-1 mt-1 flex">
                  <a
                    href="https://dalu-country-view.vercel.app/"
                    rel="noreferrer"
                    target="_blank"
                    className="text-white px-1 py-0.5 rounded-[6px] border"
                  >
                    Live
                  </a>
                  <a
                    href="https://github.com/Heisdalu/Country-view"
                    rel="noreferrer"
                    target="_blank"
                    className="text-yellow px-1 py-0.5 rounded-[6px] border"
                  >
                    Github
                  </a>
                </div>
              </div>
            </div>

            {/* 4 picture */}
            <div className="animate-card border-1 border-r-red-400 rounded-[6px] overflow-hidden bg-[#2A2A29] md:translate-y-[-5.6rem] lg:translate-y-[-6.2rem]">
              <div className="max-h-[210px] md:h-[285px] overflow-hidden lg:max-h-[653px]">
                <Image
                  src="/boldo.png"
                  height={0}
                  width={0}
                  quality={100}
                  sizes="100vw"
                  style={{ width: "100%", height: "auto" }}
                  alt=""
                />
              </div>
              <div className="p-[1.25rem]">
                <h1 className="text-white font-medium">
                  Boldo : Boldo Multi-Page Template Website
                </h1>
                <div className="borde border-white font-normal text-opWhite flex flex-wrap">
                  <span className="border- border-white mr-0.5 py-[3px]">
                    React.js
                  </span>
                  <span className="border- border-white mr-0.5 py-[3px]">
                    JavaScript
                  </span>
                  <span className="border- border-white mr-0.5 py-[3px]">
                    CSS3
                  </span>
                  <span className="border- border-white mr-0.5 py-[3px]">
                    Swiper.js
                  </span>
                </div>
                <div className="borde space-x-1 mt-1 flex">
                  <a
                    href="https://daalu-boldo.netlify.app/"
                    rel="noreferrer"
                    target="_blank"
                    className="text-white px-1 py-0.5 rounded-[6px] border"
                  >
                    Live
                  </a>
                  <a
                    href="https://github.com/Heisdalu/boldo"
                    rel="noreferrer"
                    target="_blank"
                    className="text-yellow px-1 py-0.5 rounded-[6px] border"
                  >
                    Github
                  </a>
                </div>
              </div>
            </div>

            {/* 5 */}
            <div className="animate-card md:self-start border-1 border-r-red-400 rounded-[6px] overflow-hidden bg-[#2A2A29]">
              <div className="max-h-[210px] md:h-[200px]  overflow-hidden lg:max-h-[653px]">
                <Image
                  src="/wordle.png"
                  height={0}
                  width={0}
                  quality={100}
                  sizes="100vw"
                  style={{ width: "100%", height: "auto" }}
                  alt=""
                />
              </div>
              <div className="p-[1.25rem]">
                <h1 className="text-white font-medium">Wordle Clone</h1>
                <div className="borde border-white font-normal text-opWhite flex flex-wrap">
                  <span className="border- border-white mr-0.5 py-[3px]">
                    React
                  </span>
                  <span className="border- border-white mr-0.5 py-[3px]">
                    JavaScript
                  </span>
                  <span className="border- border-white mr-0.5 py-[3px]">
                    Tailwind
                  </span>
                </div>
                <div className="space-x-1 mt-1 flex">
                  <a
                    href="https://dalu-wordle.netlify.app/"
                    rel="noreferrer"
                    target="_blank"
                    className="text-white px-1 py-0.5 rounded-[6px] border"
                  >
                    Live
                  </a>
                  <a
                    href="https://github.com/Heisdalu/wordle-clone"
                    rel="noreferrer"
                    target="_blank"
                    className="text-yellow px-1 py-0.5 rounded-[6px] border"
                  >
                    Github
                  </a>
                </div>
              </div>
            </div>

            {/* 6 */}
            <div className="animate-card md:translate-y-[-5.6rem] lg:translate-y-[-6.2rem] border-1 border-r-red-400 rounded-[6px] overflow-hidden bg-[#2A2A29]">
              <div className="max-h-[300px] md:h-[190px] overflow-hidden lg:max-h-[653px]">
                <Image
                  src="/Wordlens.png"
                  height={0}
                  width={0}
                  quality={100}
                  sizes="100vw"
                  style={{ width: "100%", height: "auto" }}
                  alt=""
                />
              </div>
              <div className="p-[1.25rem]">
                <h1 className="text-white font-medium">
                  Wordlens : Search and pronounce meanings to words
                </h1>
                <div className="borde border-white font-normal text-opWhite flex flex-wrap">
                  <span className="border- border-white mr-0.5 py-[3px]">
                    React.js
                  </span>
                  <span className="border- border-white mr-0.5 py-[3px]">
                    JavaScript
                  </span>
                  <span className="border- border-white mr-0.5 py-[3px]">
                    WebSpeech-Api
                  </span>
                  <span className="border- border-white mr-0.5 py-[3px]">
                    CSS3
                  </span>
                </div>
                <div className="borde space-x-1 mt-1 flex">
                  <a
                    href="https://wordlens.netlify.app/"
                    rel="noreferrer"
                    target="_blank"
                    className="text-white px-1 py-0.5 rounded-[6px] border"
                  >
                    Live
                  </a>
                  <a
                    href="https://github.com/Heisdalu/Wordlens"
                    rel="noreferrer"
                    target="_blank"
                    className="text-yellow px-1 py-0.5 rounded-[6px] border"
                  >
                    Github
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Wrapper>
  );
}
