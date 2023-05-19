import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProviders";

const AddAToy = () => {
    const {user } = useContext(AuthContext)
  const handleAddAToy = (event) => {
    event.preventDefault();
  };
  return (
    <div className="w-1/2 mx-auto">
      <div className="hero-content flex-col gap-10">
        <div className="text-center text-white bg-blue-300 rounded-2xl shadow-2xl p-4">
          <h1 className="text-5xl font-bold">Add A Toy</h1>
        </div>
        <div className="card shadow-2xl  w-full">
          <div className="card-body">
            <form onSubmit={handleAddAToy}>
            <div className="form-control">
                <label className="label">
                  <span className="label-text">Toy Picture URL</span>
                </label>
                <input
                  type="text"
                  name="pictureURL"
                  placeholder="Toy Picture URL"
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
                  placeholder="Toy Name"
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
                  defaultValue={user?.displayName}
                  className="input input-info"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  defaultValue={user?.email}
                  className="input input-info"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Sub Category</span>
                </label>
                <input
                  type="text"
                  name="subCategory"
                  placeholder="Sub category"
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
                  placeholder="Price"
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
                  placeholder="Rating"
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
                  placeholder="Available Quantity"
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
                  placeholder="Available Quantity"
                  className="input input-info"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Detail Description</span>
                </label>
                <textarea name="detailDescription" className="textarea textarea-info" placeholder="Detail Description" required></textarea>
              </div>
              

              
              <div className="form-control mt-6">
                <input
                  type="submit"
                  className="btn border-none rounded-3xl bg-emerald-400 hover:bg-emerald-500 capitalize uppercase:text-normal text-xl"
                  value="Add Toy"
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

export default AddAToy;
