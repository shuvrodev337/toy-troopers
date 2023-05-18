import { useContext, useState } from "react";
import { AuthContext } from "../../Providers/AuthProviders";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [errorText, setErrorText] = useState("");
  const [showPassword, setShowPassword] = useState(false);

const navigate = useNavigate()
const {signIn} = useContext(AuthContext)
const handleLoginWithEmailPassword = (event) =>{
  event.preventDefault()
  const form = event.target 
  const email = form.email.value
  const password = form.password.value
  console.log(email, password);
  signIn(email,password)
  .then(result =>{
    const loggedUser = result.user;
    toast.success(`Login Successfull! Welcome ${loggedUser?.displayName}!!`, {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      });
      navigate("/")
  })
  .catch(error=>{
    if (error.message === "Firebase: Error (auth/user-not-found).") {
      setErrorText("The email address you have entered is not registered!");
    } else if (error.message === "Firebase: Error (auth/wrong-password).") {
      setErrorText("Password Incorrect! Type again or reset.");
    }
  })
}




    return (
        <div className="hero  ">
  <div className="hero-content flex-col gap-10">
    <div className="text-center text-white bg-blue-300 rounded-2xl shadow-2xl p-4">
      <h1 className="text-5xl font-bold">Welcome to Toy Troopers!! <br /> Login Here!</h1>
    </div>
    <div className="card shadow-2xl  w-full">
      <div className="card-body">
        <form onSubmit={handleLoginWithEmailPassword}>
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
          <input type={showPassword ? "text" : "password"} name="password" placeholder="password" className="input input-info" required/>
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
            <button type="button" onClick={()=>setShowPassword(!showPassword)} className="btn btn-link btn-xs">{showPassword ?"Hide" : "See"} Password</button>
          </label>
          <p className="text-red-700 font-semibold">{errorText}</p>
        </div>
        <div className="form-control mt-6">
          <input className="btn border-none rounded-3xl bg-emerald-400 hover:bg-emerald-500" type="submit" value="Login" />
        </div>
        </form>
      </div>
    </div>
  </div>
</div>
    );
};

export default Login;