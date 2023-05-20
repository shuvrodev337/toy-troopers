import { useLoaderData } from "react-router-dom";

import GalleryItem from "./GalleryItem";
const Gallery = () => {
  const allToys = useLoaderData();
  //   console.log(allToys);

  return (
    <div className="my-36 w-4/5 mx-auto ">
      <div className="my-10">
        <h1 className="text-5xl text-teal-400 font font-bold text-center">
          Swipe to See Our Most sold Action Figures from Our Collection Gallery!
        </h1>
      </div>
      <div>
        <div className="carousel carousel-center rounded-box mt-28 shadow-lg ">
          
          {allToys.map((toy) => <GalleryItem key={toy._id} toy={toy}></GalleryItem>)}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
