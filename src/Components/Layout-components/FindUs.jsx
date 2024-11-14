import { FaSquareFacebook,FaTwitter } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";


const FindUs = () => {
  return (
    <div>
      <h1 className="font-bold">Find Us On</h1>
      <div className="join flex join-vertical *:bg-base-100 py-3 text-left">
        <button className="btn join-item"> <FaSquareFacebook /> Facebook
        </button>
        <button className="btn join-item"><FaTwitter />Twitter</button>
        <button className="btn join-item"><FaInstagramSquare />Instagram</button>
      </div>
    </div>
  );
};

export default FindUs;
