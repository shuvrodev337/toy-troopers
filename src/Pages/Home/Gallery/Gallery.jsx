import { useLoaderData } from "react-router-dom";

import GalleryItem from "./GalleryItem";
const Gallery = () => {
  const allToys = useLoaderData();
  //   console.log(allToys);

  return (
    <div className="mt-56 mb-28 w-4/5 mx-auto ">
      <div className="my-10">
        <h1 className="text-5xl text-teal-400 font font-bold text-center">
          Swipe to Pick your Action Figure From Our Collection Gallery!
        </h1>
      </div>
      <div>
        <div className="carousel carousel-center rounded-box mt-28">
          
          {allToys.map((toy) => <GalleryItem key={toy._id} toy={toy}></GalleryItem>)}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
