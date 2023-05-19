import usetitle from "../../../hooks/useTitle";
import Banner from "../Banner/Banner";

const HomePage = () => {
  usetitle('Home')

    return (
        <div>
            <Banner></Banner>
            <h2>here will be another homepage component</h2>
        </div>
    );
};

export default HomePage;