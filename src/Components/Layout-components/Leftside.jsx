import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const Leftside = () => {
  const [category, setCategory] = useState([]);

  useEffect(() => {
    fetch("https://openapi.programming-hero.com/api/news/categories")
      .then((res) => res.json())
      .then((data) => setCategory(data.data.news_category));
  }, []);

  return (
    <div>
      <h1 className="font-bold">All Category ({category.length})</h1>
      <div className="flex flex-col gap-5 text-center py-3">
        {category.map((item) => (
          <NavLink
            style={({ isActive }) =>
              isActive ? { backgroundColor: "red", color: "white" } : {}
            }
            to={`/category/${item.category_id}`}
            className="btn bg-gray-200 py-5"
            key={item.category_id}
          >
            {item.category_name}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Leftside;
