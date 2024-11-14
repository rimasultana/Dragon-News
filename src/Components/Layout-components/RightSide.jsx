import FindUs from "./FindUs";
import QZone from "./QZone";
import SocialLogin from "./SocialLogin";


const RightSide = () => {
    return (
        <div className="space-y-4">
            <SocialLogin/>
            <FindUs/>
            <QZone/>
        </div>
    );
};

export default RightSide;