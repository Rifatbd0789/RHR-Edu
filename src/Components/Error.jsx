import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="text-center mt-40">
      <div>
        <h1 className="text-4xl text-[#013E62] font-bold m-4">Oops!</h1>
        <p className="text-2xl font-medium mb-2">
          Sorry ! an unexpected error happened!
        </p>
        <p className="text-xl  mb-2">
          The Page you are looking for is under construction,
        </p>
        <p className="mb-2 ">please click the button below, Thank you !</p>
      </div>
      <div>
        <Link
          className="btn normal-case bg-[#013E62] text-white hover:text-black"
          to={"/"}
        >
          Go Home
        </Link>
      </div>
    </div>
  );
};

export default Error;
