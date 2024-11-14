import Header from "../Components/Header/Header";
import LatestNews from "../Components/LatestNews/LatestNews";

const HomeLayOut = () => {
    return (
        <div>
            <Header/>
           <div className="w-11/12 mx-auto">
           <LatestNews/>
           </div>
        </div>
    );
};

export default HomeLayOut;