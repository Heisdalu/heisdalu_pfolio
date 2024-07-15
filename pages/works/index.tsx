import Box from "@/components/Works/Box";
import Container from "@/components/Wrapper/Container";
import Wrapper from "@/components/Wrapper/Wrapper";
import { data } from "@/utils/data";
import Link from "next/link";

const Works = () => {
  return (
    <Wrapper>
      <Container>
        <div className="p-[3rem] py-[1rem]">
          <div className="flex items-center space-y-[30px] flex-col md:flex-row relative py-[3rem] md:space-y-[0]">
            <Link
              href="/"
              className="md:absolute bg-white text-black rounded-[10px] px-[1rem] md:px-[2rem] py-[1rem]"
            >
              Back to porfolio
            </Link>
            <h1 className="text-white mx-auto text-[2rem] underline">Works</h1>
          </div>
          <div className="space-y-2 md:grid md:space-y-[0] md:grid-cols-2 md:[grid-gap:2rem] lg:[grid-gap:4rem]">
            {data.map((el, i) => (
              <Box key={i} data={el} />
            ))}
            {/* <Box />
            <Box />
            <Box />
            <Box /> */}
          </div>
        </div>
      </Container>
    </Wrapper>
  );
};
export default Works;
