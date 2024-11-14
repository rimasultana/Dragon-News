import moment from "moment";
import logo from "../../assets/img/logo.png"

const Header = () => {
    return (
        <div className="flex justify-center gap-3 items-center flex-col py-4">
            <div>
                <img className="w-[300px]" src={logo} alt="" />
            </div>
            <div>
                <p className="text-gray-400">Journalism Without Fear or Favour</p>
                <p>{moment().format("dddd, MMMM Do YYYY")}</p>
            </div>
        </div>
    );
};

export default Header;