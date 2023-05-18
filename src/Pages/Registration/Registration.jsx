
const Registration = () => {
    return (
        <div className="hero  ">
        <div className="hero-content flex-col gap-10">
          <div className="text-center text-white bg-blue-300 rounded-2xl shadow-2xl p-4">
            <h1 className="text-5xl font-bold">Welcome to Toy Troopers!! <br /> Register Here!</h1>
          </div>
          <div className="card shadow-2xl  w-full">
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="text" placeholder="Your Name" className="input input-info" required/>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" placeholder="email" className="input input-info" required/>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" placeholder="password" className="input input-info" required/>
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input type="text" placeholder="Your Photo URL" className="input input-info" required/>
              </div>
              <div className="form-control mt-6">
                <button className="btn border-none rounded-3xl bg-emerald-400 hover:bg-emerald-500">Login</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Registration;