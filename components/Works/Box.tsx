import Image from "next/image";

type Props = {
  data: {
    imagePath: string;
    title: string;
    subTitle: string;
    tools: string[];
    liveLink: string;
    githubLink: string;
  };
};

const Box = ({
  data: { imagePath, subTitle, githubLink, liveLink, title, tools },
}: Props) => {
  return (
    <div className="animate-card rounded-[6px] overflow-hidden bg-[#2A2A29]">
      <div className="relative innerDiv max-h-[300px] md:h-[300px] overflow-hidden lg:max-h-[653px]">
        <Image
          src={`/${imagePath}`}
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
          {title}
          <span className="font-[400] text-[#ffffffdf]">{subTitle}</span>
        </h1>
        <div className="text-[1rem] font-normal text-opWhite flex flex-wrap">
          {tools.map((el, i) => (
            <span key={i} className=" mr-0.5 py-[3px] capitalize">
              {el}
            </span>
          ))}
        </div>
        <div className="space-x-1 mt-1 flex">
          <a
            href={liveLink}
            rel="noreferrer"
            target="_blank"
            className="text-white px-1 py-0.5 rounded-[6px] border"
          >
            Live
          </a>
          <a
            href={githubLink}
            rel="noreferrer"
            target="_blank"
            className="text-yellow px-1 py-0.5 rounded-[6px] border"
          >
            Github
          </a>
        </div>
      </div>
    </div>
  );
};
export default Box;
