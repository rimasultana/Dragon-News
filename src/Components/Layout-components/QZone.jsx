import swimmingImg from "../../assets/img/swimming.png"
import ClassRoom from "../../assets/img/class.png"
import PlayGround from "../../assets/img/playground.png"
import bgImg from "../../assets/img/bg.png"
const QZone = () => {
    return (
        <div className="py-2">
           <h1 className="font-semibold">Q-Zone</h1> 
           <div className="bg-gray-100 flex flex-col items-center gap-8 p-3">
            <div className="">
              <img src={swimmingImg} alt="" />
            </div>
            <div>
              <img src={ClassRoom} alt="" />
            </div>
            <div>
              <img src={bgImg} alt="" />
            </div>
            
           </div>
        </div>
    );
};

export default QZone;