import { Outlet } from "react-router-dom";
import NavBar from "../Pages/Shared/NavBar/NavBar";
import Footer from "../Pages/Shared/Footer/Footer";

const Main = () => {
    return (
        <div >
            <NavBar></NavBar>
            <div className=' min-h-[calc(100vh-400px)]'>

            <Outlet></Outlet>
            </div>
            <Footer></Footer>

        </div>
    );
};

export default Main;