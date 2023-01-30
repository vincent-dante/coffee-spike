import Image from 'next/image';

export default function Header() {
  return (
    <div className="header-bg pt-[8rem]">
      <div className="container mx-auto flex flex-wrap justify-between items-center py-10 px-4 lg:px-10 xl:px-20">
        <div className="w-full md:w-3/5">
          <h1 className="text-[3rem] lg:text-[4rem] text-center md:text-left font-bold ">
            Make your day with <br /> your own coffee
          </h1>
          <button className="py-2 px-5 mt-5 text-lg block md:inline-block mx-auto rounded-full button-dark">
            ORDER NOW
          </button>
        </div>
        <div className="w-full md:w-2/5">
          <Image
            src="/header-image.png"
            alt="HeaderImage"
            width="350"
            height="350"
            className="mx-auto w-3/5 sm:w-2/5 md:w-4/5 mt-5 md:mt-0"
          />
        </div>
      </div>
    </div>
  );
}
