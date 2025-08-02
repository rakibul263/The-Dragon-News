import { Link } from "react-router";
import { AuthContext } from "../../Provider/AuthProvider";
import { use } from "react";
import { toast } from "react-toastify";

const Register = () => {
  const { createUser, setUser } = use(AuthContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(e.target);
    const form = e.target;
    const name = form.name.value;
    const photoURL = form.photoURL.value;
    const email = form.email.value;
    const password = form.name.value;
    // console.log({name, photoURL, email, password});
    createUser(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        // console.log(user);
        setUser(user);
        toast.success("Register Successful.")
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-10 rounded-lg shadow-lg w-full max-w-md"
      >
        <h2 className="text-2xl font-semibold text-center mb-6">
          Register your account
        </h2>
        <div className="space-y-4">
          <div>
            <label className="block font-medium mb-1">Your Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="w-full px-4 py-2  rounded-md bg-gray-100 focus:outline-none"
              required
            />
          </div>
          <div>
            <label className="block font-medium mb-1">Photo URL</label>
            <input
              type="text"
              name="photoURL"
              placeholder="Enter photo URL"
              className="w-full px-4 py-2  rounded-md bg-gray-100 focus:outline-none"
            />
          </div>
          <div>
            <label className="block font-medium mb-1">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email address"
              className="w-full px-4 py-2  rounded-md bg-gray-100 focus:outline-none"
              required
            />
          </div>
          <div>
            <label className="block font-medium mb-1">Password</label>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              className="w-full px-4 py-2  rounded-md bg-gray-100 focus:outline-none"
              required
            />
          </div>
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              name="termsAccepted"
              className="accent-black"
            />
            <label className="text-sm">
              Accept <span className="font-semibold">Term & Conditions</span>
            </label>
          </div>
          <button
            type="submit"
            className="w-full bg-black text-white py-2 rounded-md font-semibold hover:bg-gray-800 transition"
          >
            Register
          </button>
          <p>
            Already have an account ?{" "}
            <Link className="text-green-800 link link-hover" to="/auth/login">
              Please Login
            </Link>{" "}
          </p>
        </div>
      </form>
    </div>
  );
};

export default Register;
