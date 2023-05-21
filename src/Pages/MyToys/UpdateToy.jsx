// import { useContext } from "react";
// import { AuthContext } from "../../Providers/AuthProviders";
import usetitle from "../../hooks/useTitle";
import { useLoaderData, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const UpdateToy = () => {
  usetitle("Update Toy");
const navigate = useNavigate()
  //Get the toy that will be updated.
  const updateAbletoy = useLoaderData();
  const {_id,
    toyPictureURL,
    toyName,
    sellerName,
    sellerEmail,
    subCategory,
    price,
    rating,
    availableQuantity,
    detailDescription,
  } = updateAbletoy;


  // handle Update Toy
  const handleUpdateToy = (event) => {
    event.preventDefault();
    const form = event.target;
    const toyPictureURL = form.pictureURL.value;
    const toyName = form.toyName.value;
    const sellerName = form.sellerName.value;
    const sellerEmail = form.sellerEmail.value;
    const subCategory = form.subCategory.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const availableQuantity = form.availableQuantity.value;
    const detailDescription = form.detailDescription.value;
    const updatedToy = {
      toyPictureURL,
      toyName,
      sellerName,
      sellerEmail,
      subCategory,
      price,
      rating,
      availableQuantity,
      detailDescription,
    };


    // Send updated toy to DB
    fetch(`https://toy-troopers-server.vercel.app/updatetoy/${_id}`, {
        method: 'PUT',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(updatedToy)
    })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if (data.modifiedCount > 0) {
                navigate("/mytoys")
                toast.success(
                    `Toy Updated!`,
                    {
                      position: "bottom-center",
                      autoClose: 4000,
                      hideProgressBar: false,
                      closeOnClick: true,
                      pauseOnHover: true,
                      draggable: true,
                      progress: undefined,
                      theme: "light",
                    }
                  );
            }
        })
  };

  // const { user } = useContext(AuthContext);
  return (
    <div className="w-4/5 mx-auto">
      <div className="hero-content flex-col gap-10">
        <div className="text-center text-white bg-blue-300 rounded-2xl shadow-2xl p-4">
          <h1 className="text-5xl font-bold">Update Toy</h1>
        </div>
        <div className="card shadow-2xl  w-full">
          <div className="card-body">
            <form onSubmit={handleUpdateToy}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Toy Picture URL</span>
                </label>
                <input
                  type="text"
                  name="pictureURL"
                  defaultValue={toyPictureURL}
                  className="input input-info"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Toy Name</span>
                </label>
                <input
                  type="text"
                  name="toyName"
                  defaultValue={toyName}
                  className="input input-info"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Seller Name</span>
                </label>
                <input
                  type="text"
                  name="sellerName"
                  defaultValue={sellerName}
                  className="input input-info"
                  readOnly
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Seller Email</span>
                </label>
                <input
                  type="email"
                  name="sellerEmail"
                  defaultValue={sellerEmail}
                  className="input input-info"
                  readOnly
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Sub Category</span>
                </label>
                <input
                  type="text"
                  name="subCategory"
                  defaultValue={subCategory}
                  className="input input-info"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Price</span>
                </label>
                <input
                  type="number"
                  name="price"
                  defaultValue={price}
                  className="input input-info"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Rating</span>
                </label>
                <input
                  type="number"
                  name="rating"
                  defaultValue={rating}
                  className="input input-info"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Available Quantity</span>
                </label>
                <input
                  type="number"
                  name="availableQuantity"
                  defaultValue={availableQuantity}
                  className="input input-info"
                  required
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Detail Description</span>
                </label>
                <textarea
                  name="detailDescription"
                  className="textarea textarea-info"
                  defaultValue={detailDescription}
                  required
                ></textarea>
              </div>

              <div className="form-control mt-6">
                <input
                  type="submit"
                  className="btn border-none rounded-3xl bg-emerald-400 hover:bg-emerald-500 capitalize uppercase:text-normal text-xl"
                  value="Update"
                />
              </div>
            </form>
            <hr className="border-gray-300 my-6" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateToy;
