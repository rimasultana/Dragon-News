import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const SocialLogin = () => {
  return (
    <div>
      <h1 className="font-bold ">Login Width</h1>
      <div className="flex flex-col w-full gap-5 py-3">
        <div className="flex gap-2 items-center btn bg-gray-100 cursor-pointer border-2 border-gray-300 p-3">
          <FaGoogle />
          Login with Google
        </div>
        <div className="flex items-center gap-2 btn bg-gray-100 cursor-pointer border-2 border-gray-300 p-3">
          <FaGithub />
          Login With Github
        </div>
      </div>
    </div>
  );
};

export default SocialLogin;
