const ToyCategoryCard = ({toy}) => {
    const {toyPictureURL,toyName,price,rating} = toy
    console.log(toy);
  return (
    // <div className="grid grid-cols-1 md:grid-cols-2  bg-base-100 shadow-2xl overflow-hidden">
    //   <div>
    //     <img
    //       src={toyPictureURL}
    //       alt="Album"
    //       className="w-full h-56 object-cover"
    //     />
    //   </div>
    //   <div className="card-body flex flex-col">
    //     <div >
    //     <h2 className="card-title"> {toyName}</h2>
    //     </div>
    //     <div className="mt-auto">
    //     <p className="font-semibold text-lg">Rating: {rating}</p>
    //     <p className="font-semibold text-lg">Price: ${price}</p>
    //     </div>
    //     <div className="card-actions justify-start mt-auto">
            
    //       <button className="btn btn-accent">View Details</button>
    //     </div>
    //   </div>
    // </div>
    <div className="border-2 border-slate-100 rounded-md p-6 space-y-3 flex flex-col overflow-hidden shadow-md bg-slate-100">

    </div>
  );
};

export default ToyCategoryCard;
