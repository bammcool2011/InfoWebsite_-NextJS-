import Image from "next/image";
import "../styles/fadein.css";

export default function Home() {
  return (
    <>
      <section className="flex justify-center">
        <div className=" box-content bg-white w-[15rem] h-[15rem] rounded-full m-10"></div>
      </section>

      <section className=" animated animatedFadeInUp fadeInUp flex justify-center">
        <div className=" box-content w-[45rem] bg-gray-900 rounded-lg p-5">
          <div className=" text-center">
            <span className=" text-3xl leading-normal font-mono font-bold">
              HELLO MY NAME IS PUMIN 👋
              <br />
              THIS IS MY FIRST PORTFOLIO WEBSITE
              <br />
            </span>
            <span className=" text-lg font-mono font-bold">
              (CREATED WITH NEXTJS)
            </span>
          </div>
        </div>
      </section>
    </>
  );
}
