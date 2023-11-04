import { useLoaderData } from "react-router-dom";
import Headers from "../Shared/Headers/Headers";
import Navbar from "../Shared/Navbar/Navbar";
import RightSideBar from "../Shared/RightSideBar/RightSideBar";
import LatestNews from "./LatestNews";
import LeftSideBar from "./LeftSideBar";
import NewsCard from "./NewsCard";

const Home = () => {
  const news = useLoaderData();

  return (
    <div>
      <Headers></Headers>
      <LatestNews></LatestNews>
      <Navbar></Navbar>

      <div className="my-12 grid gap-6 grid-cols-1 lg:grid-cols-4">
        {/* left side bar */}
        <div className=" ">
          <LeftSideBar></LeftSideBar>
        </div>

        {/* main content  */}
        <div className="lg:col-span-2  ">
          <h1 className="lg:text-3xl font-semibold text-center mb-12">
            News Xone
          </h1>
          {news.map((aNews, i) => (
            <NewsCard key={i} newsData={aNews}></NewsCard>
          ))}
        </div>

        {/* right sidebar */}
        <div className=" ">
          <RightSideBar></RightSideBar>
        </div>
      </div>
    </div>
  );
};

export default Home;
