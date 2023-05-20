
const GalleryItem = ({toy}) => {
    return (
            <div className="carousel-item w-60 h-60  mx-3" >
            <img className=" " src={toy.toyPictureURL} alt="Pizza" />
          </div>
    );
};

export default GalleryItem;