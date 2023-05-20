import { Link } from "react-router-dom";
// import NavBar from "../../Shared/NavBar/NavBar";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
const Banner = () => {
    useEffect(() => {
        AOS.init({
          duration: 800, 
          offset: 200,
          easing: 'ease-in-out'
        });
      }, []);
  return (
    <div
      className="hero min-h-screen rounded-lg relative"
      style={{
        backgroundImage: `url(https://i.ibb.co/gtxT1hd/wallpaperflare-com-wallpaper-2.jpg)`,
      }}
      data-aos="fade-down"
    >
        {/* <div className="absolute top-0 left-0 w-full">
      <NavBar></NavBar>

    </div> */}
      <div className="hero-overlay bg-opacity-60 rounded-lg"></div>
      <div className="hero-content text-center text-slate-300">
        <div className="max-w-4xl">
          <h1 className="mb-5 text-7xl font-bold">Toy Troopers</h1>
          <p className="mb-5">
          Join the Action Figure Revolution: Where Heroes Come to Life.
          </p>
          <p className="mb-5">
          Welcome to Toy Troopers, the ultimate destination for action figure enthusiasts and collectors! We are dedicated to providing a thrilling online platform where you can explore and acquire an extensive range of action figures from various themes, franchises, and eras.
          </p>
          <Link to={'/alltoys'} className="btn btn-accent capitalize uppercase:text-normal">Get Started</Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
