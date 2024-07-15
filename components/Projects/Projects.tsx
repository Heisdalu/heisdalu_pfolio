import { FC } from "react";
import Image from "next/image";

const Projects: FC = (): JSX.Element => {
  return (
    <div className="space-y-2 md:grid md:space-y-[0] md:grid-cols-2 md:[grid-gap:2rem] lg:[grid-gap:4rem]">
      {/* 1 picture */}
      <div className="animate-card rounded-[6px] overflow-hidden bg-[#2A2A29]">
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
        <div className="p-[1.25rem] tracking-[0.01875rem]  text-1 md:text-[1.2rem] md:tracking-[0.0225rem]">
          <h1 className="text-white font-medium flex flex-col">
            DRACORA
            <span className="font-[400] text-[#ffffffdf]">
              An Admin Dashboard With Visualized Charts & Kanban
            </span>
          </h1>
          <div className="text-[1rem] font-normal text-opWhite flex flex-wrap">
            <span className=" mr-0.5 py-[3px]">Next.js</span>
            <span className="mr-0.5 py-[3px]">TypeScript</span>
            <span className="mr-0.5 py-[3px]">Firebase</span>
            <span className="mr-0.5 py-[3px]">Chart.js</span>
          </div>
          <div className="space-x-1 mt-1 flex">
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
      <div className="animate-card md:self-start rounded-[6px] overflow-hidden bg-[#2A2A29]">
        <div className="max-h-[210px] md:h-[250px] overflow-hidden lg:max-h-[653px]">
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
        <div className="p-[1.25rem] tracking-[0.01875rem]  text-1 md:text-[1.2rem] md:tracking-[0.0225rem]">
          <h1 className="text-white font-medium flex flex-col">
            RETRO
            <span className="font-[400] text-[#ffffffdf]">
              Food E-commerce Web Application
            </span>
          </h1>
          <div className="text-[1rem] font-normal text-opWhite flex flex-wrap">
            <span className="mr-0.5 py-[3px]">React.js</span>
            <span className="mr-0.5 py-[3px]">ReduxToolkit</span>
            <span className="mr-0.5 py-[3px]">JavaScript</span>
            <span className="mr-0.5 py-[3px]">Firebase</span>
            <span className="mr-0.5 py-[3px]">Tailwind</span>
          </div>
          <div className="space-x-1 mt-1 flex">
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
      <div className="animate-card rounded-[6px] overflow-hidden bg-[#2A2A29]">
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
        <div className="p-[1.25rem] tracking-[0.01875rem]  text-1 md:text-[1.2rem] md:tracking-[0.0225rem]">
          <h1 className="text-white font-medium flex flex-col">
            Country View
            <span className="font-[400] text-[#ffffffdf]">
              Browse Vital Informations About Countries
            </span>
          </h1>
          <div className="text-[1rem] font-normal text-opWhite flex flex-wrap">
            <span className="mr-0.5 py-[3px]">React.js</span>
            <span className="mr-0.5 py-[3px]">JavaScript</span>
            <span className="mr-0.5 py-[3px]">CSS3</span>
          </div>
          <div className="borde space-x-1 mt-1 flex">
            <a
              href="https://country-view-er8gcmz3f-dhevine.vercel.app/"
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
      <div className="animate-card rounded-[6px] overflow-hidden bg-[#2A2A29] md:translate-y-[-5.6rem] lg:translate-y-[-8.2rem]">
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
        <div className="p-[1.25rem] tracking-[0.01875rem]  text-1 md:text-[1.2rem] md:tracking-[0.0225rem]">
          <h1 className="text-white font-medium flex flex-col">
            Boldo
            <span className="font-[400] text-[#ffffffdf]">
              Boldo Multi-Page Template
            </span>
          </h1>
          <div className="text-[1rem] font-normal text-opWhite flex flex-wrap">
            <span className="mr-0.5 py-[3px]">React.js</span>
            <span className="mr-0.5 py-[3px]">JavaScript</span>
            <span className="mr-0.5 py-[3px]">CSS3</span>
            <span className="mr-0.5 py-[3px]">Swiper.js</span>
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
      <div className="animate-card md:self-start rounded-[6px] overflow-hidden bg-[#2A2A29]">
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
        <div className="p-[1.25rem] tracking-[0.01875rem]  text-1 md:text-[1.2rem] md:tracking-[0.0225rem]">
          <h1 className="text-white font-medium">Wordle Clone</h1>
          <div className="text-[1rem] font-normal text-opWhite flex flex-wrap">
            <span className="mr-0.5 py-[3px]">React</span>
            <span className="mr-0.5 py-[3px]">JavaScript</span>
            <span className="mr-0.5 py-[3px]">Tailwind</span>
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
      <div className="animate-card md:translate-y-[-5.6rem] lg:translate-y-[-8.2rem] rounded-[6px] overflow-hidden bg-[#2A2A29]">
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
        <div className="p-[1.25rem] tracking-[0.01875rem]  text-1 md:text-[1.2rem] md:tracking-[0.0225rem]">
          <h1 className="text-white font-medium flex flex-col">
            Wordlens
            <span className="font-[400] text-[#ffffffdf]">
              Search and pronounce meanings to words
            </span>
          </h1>
          <div className="text-[1rem] font-normal text-opWhite flex flex-wrap">
            <span className="mr-0.5 py-[3px]">React.js</span>
            <span className="mr-0.5 py-[3px]">JavaScript</span>
            <span className="mr-0.5 py-[3px]">WebSpeech-Api</span>
            <span className="mr-0.5 py-[3px]">CSS3</span>
          </div>
          <div className="space-x-1 mt-1 flex">
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
  );
};
export default Projects;
