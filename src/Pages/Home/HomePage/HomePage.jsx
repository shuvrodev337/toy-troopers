import usetitle from "../../../hooks/useTitle";
import Banner from "../Banner/Banner";
import Gallery from "../Gallery/Gallery";
import KnowYourHeroes from "../KnowYourHeroes/KnowYourHeroes";
import ShopByCategory from "../ShopByCategory/ShopByCategory";

const HomePage = () => {
  usetitle('Home')

    return (
        <div>
            <Banner></Banner>
            <Gallery></Gallery>
            <ShopByCategory></ShopByCategory>
            <KnowYourHeroes></KnowYourHeroes>
        </div>
    );
};

export default HomePage;