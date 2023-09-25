import Wrapper from "@/components/Wrapper/Wrapper";
import { Navbar } from "@/components/Navbar/Navbar";
import localFont from "next/font/local";

const clashDisplay = localFont({
  src: [
    {
      path: "../../fonts/ClashDisplay-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../fonts/ClashDisplay-Regular.woff2",
      weight: "400",
      style: "normal",
    },
  ],
});

const Projects = () => {
  return (
    <div>
      <Wrapper>
        <div className={`${clashDisplay.className} font-[500] text-[32px]`}>
          <Navbar />
        </div>
      <div className="mt-2">Projects</div>
      </Wrapper>

    </div>
  );
};
export default Projects;
