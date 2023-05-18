import { useContext, useState } from "react";
import { AuthContext } from "../../Providers/AuthProviders";
import { updateProfile } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Registration = () => {
    const navigate = useNavigate()
  const [showPassword, setShowPassword] = useState(false);

    const {createUser , logOut} = useContext(AuthContext)
    const [errorText, setErrorText] = useState("");


    const handleRegister = event =>{
        event.preventDefault()
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        const photo = event.target.photoURL.value
        if (password.length < 6) {
            setErrorText("password is too short, must be atleast 6 charecters!!");
            return;
          }
          createUser(email, password)
            .then((result) => {
              const registeredUser = result.user;              
              event.target.reset();
              setErrorText("");
              updateUserNamePhoto(name, registeredUser, photo)
              toast.success(
                `Registration Successfull!! Please Login Now.`,
                {
                  position: "top-center",
                  autoClose: 2000,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                  progress: undefined,
                  theme: "light",
                }
              );
              logOut()
              .then(()=>{})
              .catch(err=>{setErrorText(err.message)})

              navigate("/login")
            })
            .catch((error) => {
              
              setErrorText(error.message);
            });
        };
      
            const updateUserNamePhoto = (name,user,photo) => {
               updateProfile(user, {
                displayName: name,
                photoURL: photo,
              })
              .then(() => {
                
              })
              .catch((error) => {
                setErrorText("Name and photo URL could not be updated " + error.message);
              });
            };
        
    
    return (
        <div className="w-1/2 mx-auto">
        <div className="hero-content flex-col gap-10">
          <div className="text-center text-white bg-blue-300 rounded-2xl shadow-2xl p-4">
            <h1 className="text-5xl font-bold">Register Here!</h1>
          </div>
          <div className="card shadow-2xl  w-full">
            <div className="card-body">
                <form onSubmit={handleRegister}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="text" name="name" placeholder="Your Name" className="input input-info" required/>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" name="email" placeholder="email" className="input input-info" required/>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <div className="flex items-center">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="password"
                  className="input input-info w-full"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="btn btn-link btn-xs"
                >
                  {showPassword ? <FaEyeSlash className="text-xl text-gray-500"></FaEyeSlash >:<FaEye className="text-2xl text-gray-500"></FaEye>}
                </button>
                </div>
                
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input type="text" name="photoURL" placeholder="Your Photo URL" className="input input-info" required/>
              </div>
              <p className="text-red-700 mx-1">{errorText}</p>
              <div className="form-control mt-6">
                <input type="submit" className="btn border-none rounded-3xl bg-emerald-400 hover:bg-emerald-500 capitalize uppercase:text-normal text-xl" value="Register" />
              </div>
              </form>
              <hr className="border-gray-300 my-6" />
              
                <p className="text-center">Already Have An Account?
                <Link to={"/login"} className="btn btn-sm btn-link capitalize uppercase:text-normal font-semibold">
                  Login Here
                </Link></p>
             
            </div>
          </div>
        </div>
      </div>
    );
};

export default Registration;