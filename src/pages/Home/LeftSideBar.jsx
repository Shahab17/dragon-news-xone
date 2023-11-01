import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import LeftSideCard from "./LeftSideCard";

const LeftSideBar = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("categories.json")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  return (
    <div className="space-y-5 ">
      <h2 className="lg:text-3xl font-semibold">
        All Categories {categories.length}{" "}
      </h2>
      {categories.map((category) => (
        <NavLink to={`/category/${category.id}`} key={category.id} className="block ml-10 text-[#9F9F9F]">
          {" "}
          {category.name}{" "}
        </NavLink>
      ))}

      <dir>
        <LeftSideCard></LeftSideCard>
      </dir>
    </div>
  );
};

export default LeftSideBar;
