import { useContext, useRef, useState } from "react";
import { AuthContext } from "../../Providers/AuthProviders";
import { toast } from "react-toastify";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaGoogle, FaEye, FaEyeSlash } from "react-icons/fa";
import usetitle from "../../hooks/useTitle";
const Login = () => {
  usetitle('Login')
  const [errorText, setErrorText] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const emailRef = useRef();
  const navigate = useNavigate();
  const location = useLocation()
  const from = location.state?.from?.pathname || "/";
 
  console.log(from);
  const { signIn, googleSignIn, passwordReset } = useContext(AuthContext);

  // Log in with Email and Password
  const handleLoginWithEmailPassword = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    signIn(email, password)
      .then((result) => {
        const loggedUser = result.user;
        toast.success(
          `Login Successfull! Welcome ${loggedUser?.displayName}!!`,
          {
            position: "bottom-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          }
        );
        navigate(from,{replace:true});
      })
      .catch((error) => {
        if (error.message === "Firebase: Error (auth/user-not-found).") {
          setErrorText("The email address you have entered is not registered!");
        } else if (error.message === "Firebase: Error (auth/wrong-password).") {
          setErrorText("Password Incorrect! Type again or reset.");
        }
      });
  };
  // Handle Google Sign In
  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
        const googleSignedInUser = result.user;
        toast.success(
          `Sign in Successfull. Welcome ${googleSignedInUser?.displayName} .`,
          {
            position: "bottom-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          }
        );
        navigate(from, {replace:true});
      })
      .catch((error) => {
        setErrorText(error.message);
      });
  };
  // Handle Reset Password
  const handleForgottenPassword = () => {
    const email = emailRef.current.value;
    if (!email) {
      toast.error("Please Provide Your Email.", {
        position: "bottom-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      return;
    }
    passwordReset(email)
      .then(() => {
        toast.success("Password reset email sent. Please Check your inbox.", {
          position: "bottom-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      })
      .catch((error) => {
        if (error.message === "Firebase: Error (auth/user-not-found).") {
          setErrorText("The email address you have entered is not registered.");
        }
      });
  };

  return (
    <div className="w-1/2 mx-auto ">
      <div className="hero-content flex-col gap-10">
        <div className="text-center text-white bg-blue-300 rounded-2xl shadow-2xl p-4">
          <h1 className="text-5xl font-bold">
             Login Here!
          </h1>
        </div>
        <div className="card shadow-2xl  w-full">
          <div className="card-body">
            <form onSubmit={handleLoginWithEmailPassword}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-info"
                  ref={emailRef}
                  required
                />
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
                <p className="text-red-700 font-semibold">{errorText}</p>
              </div>
              <div className="form-control mt-6">
                <input
                  className="btn border-none text-xl  rounded-3xl bg-emerald-400 hover:bg-emerald-500 capitalize uppercase:text-normal"
                  type="submit"
                  value="Login"
                />
              </div>
            </form>
            <div className="flex items-center my-6">
              <hr className="flex-grow border-t-2 border-gray-300" />
              <span className="px-4 text-gray-500">Or You Can </span>
              <hr className="flex-grow border-t-2 border-gray-300" />
            </div>
            <div className="mx-auto">
              <button
                type="button"
                onClick={handleGoogleSignIn}
                className="btn btn-outline md:btn-wide text-red-400 hover:text-red-600 capitalize uppercase:text-normal"
              >
                <FaGoogle className="mr-2 text-xl"></FaGoogle>
                Sign In With Google
              </button>
            </div>
            <div className="flex mt-10 text-gray-500 items-center gap-4">
                <p>New to Toy Troopers?
                <Link to={"/register"} className="btn btn-sm btn-link capitalize uppercase:text-normal no-underline">
                  Sign Up / Register
                </Link></p>
             
                <p>Forgot Password?
                <button
                  onClick={handleForgottenPassword}
                  type="button"
                  className="btn btn-sm btn-link capitalize uppercase:text-normal no-underline"
                >
                  Reset
                </button></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
