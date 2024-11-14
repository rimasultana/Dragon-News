import { useLoaderData } from "react-router-dom";
import NewCard from "../Components/NewCard";

const CategoryNews = () => {
  const {data:news} = useLoaderData();

  return (
    <div>
      <h2 className="font-semibold mb-3">Dragon News Home</h2>
      <div>
        {
            news.slice(0,3).map((singleNews) =>(
                <NewCard key={singleNews._id} news={singleNews}></NewCard>
            ))
        }
      </div>
    </div>
  );
};

export default CategoryNews;
