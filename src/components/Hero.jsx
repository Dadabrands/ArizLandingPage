import Herobg from "../assets/Herobg.jpg";
import { Link } from "react-router-dom";
const Hero = () => {
  return (
    <div className="relative overflow-hidden flex flex-col justify-center items-center px-16 py-20 text-white min-h-[800px] max-md:px-5">
      <img
        loading="lazy"
        srcSet={Herobg}
        className="object-cover absolute inset-0 w-full h-full"
        style={{ zIndex: -1 }} // Ensure the image is behind the overlay
      />
      <div className="absolute inset-0 bg-black opacity-60"></div>{" "}
      {/* Black background overlay */}
      <div className="relative flex flex-col items-center mt-[-200px] max-w-full w-[1148px] max-md:mt-10">
        {/* <div className="self-stretch text-5xl font-bold text-center max-md:max-w-full max-md:text-4xl">
          Take Control of Your Healthcare Costs & Claims: <br />
          Ariz Makes Nigerian Healthcare Simpler.
        </div> */}
        <div className="flex flex-col items-center justify-center">
          <h1 className="font-Jakarta font-bold text-2xl sm:text-3xl lg:text-4xl text-center tracking-wide">
            Take Control of Your Healthcare Costs & Claims:
          </h1>
          <h2 className="font-Jakarta font-bold text-2xl sm:text-3xl lg:text-4xl text-center tracking-wide">
            Ariz Makes Nigerian Healthcare Simpler.
          </h2>
        </div>

        <p className="mt-4 text-lg  text-center text-white max-w-4xl">
          Ariz is a revolutionary platform designed to empower Nigerians with a
          simpler and more transparent healthcare experience. We believe
          everyone deserves access to affordable, high quality care, and Ariz
          puts you in control.
        </p>
         <Link to="/newsletter" className="justify-center px-12 py-5 mt-11 text-sm font-semibold bg-primary rounded-md max-md:px-5 max-md:mt-10">
        Join Our Waitlist
      </Link>
      </div>
    </div>
  );
};

export default Hero;
