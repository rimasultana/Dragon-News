import Header from "../Components/Header/Header";
import LatestNews from "../Components/LatestNews/LatestNews";
import Leftside from "../Components/Layout-components/Leftside";
import Navbar from "../Components/Navbar/Navbar";

const HomeLayOut = () => {
  return (
    <div className="font-Poppins">
      <Header />
      <div className="w-11/12 mx-auto">
        <LatestNews />
      </div>
      <div className="w-11/12 mx-auto py-5">
        <Navbar />
      </div>
      <main className="w-11/12 mx-auto py-5 grid md:grid-cols-12 gap-5">
        <div className="left col-span-3">
            <Leftside/>
        </div>
        <div className="col-span-6">main Content</div>
        <div className="col-span-3">right side</div>
      </main>
    </div>
  );
};

export default HomeLayOut;
