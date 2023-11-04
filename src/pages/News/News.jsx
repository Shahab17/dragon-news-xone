import { useParams } from "react-router-dom";
import Headers from "../Shared/Headers/Headers";
import RightSideBar from "../Shared/RightSideBar/RightSideBar";
import Navbar from "../Shared/Navbar/Navbar";

const News = () => {

    const {id}=useParams()

  return (
    <div>
      <Headers></Headers>
      <Navbar></Navbar>
      <div className="grid md:grid-cols-2 lg:grid-cols-4">
        <div className="lg:col-span-3">
          <h2 className="lg:text-3xl text-center font-semibold">News Xone</h2>
          <p>{id}</p>
        </div>
        <div>
            <RightSideBar></RightSideBar>
        </div>
      </div>
    </div>
  );
};

export default News;
