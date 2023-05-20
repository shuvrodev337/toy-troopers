import usetitle from "../../../hooks/useTitle";
import Banner from "../Banner/Banner";
import Gallery from "../Gallery/Gallery";

const HomePage = () => {
  usetitle('Home')

    return (
        <div>
            <Banner></Banner>
            <Gallery></Gallery>
            <h2>here will be another homepage component</h2>
        </div>
    );
};

export default HomePage;