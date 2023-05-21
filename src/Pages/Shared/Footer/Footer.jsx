import { Link } from "react-router-dom";
import websiteLogo from "../../../assets/logo.png";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  const contactEmail = 'shuvrodevmondal337@gmail.com'
  return (
    <footer className="footer divide-y footer-center p-10 bg-base-300 text-base-content  ">
      <div className="grid grid-flow-col gap-4">
        <Link className="link link-hover">About us</Link>
        <Link to={`mailto:${contactEmail}`} className="link link-hover">Contact Us</Link>
        <Link className="link link-hover">Blogs</Link>
      </div>
      
        <div className="grid grid-flow-col gap-4">
          <Link to={"https://www.facebook.com/"}>
            <FaFacebook></FaFacebook>
          </Link>
          <Link className="mx-2" to={"https://twitter.com/"}>
            <FaTwitter></FaTwitter>
          </Link>
          <Link to={"https://www.instagram.com/"}>
            <FaInstagram></FaInstagram>
          </Link>
        
      </div>
      <div className="grid items-center grid-flow-col">
        <img src={websiteLogo} alt="toy-troopers-logo" className="h-20" />
        <div className="flex flex-col">
        <p>Copyright © 2023 - All right reserved By <span className="font-bold text-lg text-cyan-500">Toy Troopers</span></p>
        <p>Rampura, Dhaka, Bangladesh</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
