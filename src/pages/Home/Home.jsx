import Headers from "../Shared/Headers/Headers";
import Navbar from "../Shared/Navbar/Navbar";
import RightSideBar from "../Shared/RightSideBar/RightSideBar";
import LatestNews from "./LatestNews";
import LeftSideBar from "./LeftSideBar";

 

const Home = () => {
    return (
        <div>
            <Headers></Headers>
            <LatestNews></LatestNews>
            <Navbar></Navbar>
            
            <div className="my-12 grid gap-6 grid-cols-1 lg:grid-cols-4">
                <div className="border border-blue-600">
                    <LeftSideBar></LeftSideBar>
                </div>
                <div className="lg:col-span-2 border border-red-400">
                    <h1 className="text-3xl">Middle Contents</h1>
                </div> 
                <div className="border border-gray-700">
                    <RightSideBar></RightSideBar>
                </div>
            </div>
        </div>
    );
};

export default Home;