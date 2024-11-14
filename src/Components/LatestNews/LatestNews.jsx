import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const LatestNews = () => {
  return (
    <div className="flex items-center gap-2 bg-gray-200 p-2">
      <p className="bg-[#D72050] font-bold text-white p-2">Latest</p>
      <Marquee pauseOnHover={true} speed={100} className="space-x-10">
        <Link>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus, quaerat.</Link>
        <Link>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus, quaerat.</Link>
        <Link>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus, quaerat.</Link>
        <Link>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus, quaerat.</Link>
      </Marquee>
    </div>
  );
};

export default LatestNews;
