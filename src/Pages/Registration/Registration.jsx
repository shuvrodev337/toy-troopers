import { useContext, useState } from "react";
import { AuthContext } from "../../Providers/AuthProviders";
import { updateProfile } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
const Registration = () => {
    const navigate = useNavigate()
    const {createUser} = useContext(AuthContext)
    const [successText, setSuccessText] = useState("");
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
              // Swal.fire('Registration successfull!!')
              toast.success(
                `Registration Successfull. Welcome ${registeredUser?.displayName}!!`,
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

              navigate("/")
            })
            .catch((error) => {
              setSuccessText("");
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
        <div className="hero  ">
        <div className="hero-content flex-col gap-10">
          <div className="text-center text-white bg-blue-300 rounded-2xl shadow-2xl p-4">
            <h1 className="text-5xl font-bold">Welcome to Toy Troopers!! <br /> Register Here!</h1>
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
                <input type="password" name="password" placeholder="password" className="input input-info" required/>
                
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input type="text" name="photoURL" placeholder="Your Photo URL" className="input input-info" required/>
              </div>
              <p className="text-red-700 mx-1">{errorText}</p>
              <div className="form-control mt-6">
                <input type="submit" className="btn border-none rounded-3xl bg-emerald-400 hover:bg-emerald-500" value="Register" />
              </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Registration;