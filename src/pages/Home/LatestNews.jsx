import Marquee from "react-fast-marquee";

const LatestNews = () => {
  return (
    <div className="flex mt-8 ">
      <button className="mr-6 px-4 py-2 rounded text-xl font-semibold bg-red-300">
        Latest
      </button>

      <Marquee speed={100} pauseOnHover className="text-xl font-semibold">
        I can be a React component, multiple React components, or just some
        text.
      </Marquee>
    </div>
  );
};

export default LatestNews;
