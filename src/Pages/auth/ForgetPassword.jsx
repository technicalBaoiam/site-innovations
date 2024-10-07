import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import Logo from "../../assets/brand.png";
import forgetimg from "../../assets/f2.webp";
const apiUrl = import.meta.env.VITE_API_URL;

const ForgetPassword = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // Function to handle password reset request
  const handlePasswordReset = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch(`${apiUrl}/api/auth/users/reset_password/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });
      if (!response.ok) {
        if (response.status === 400) {
          throw new Error("User email does not exist.");
        }
        throw new Error("Failed to send password reset email.");
      }

      toast.success("Password reset email sent! Check your inbox.");

      setTimeout(() => {
        navigate("/login");
      }, 3000);
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='flex items-center justify-center min-h-screen bg-gradient-to-t from-white to-[#f3efef] dark:bg-gradient-to-t dark:from-black dark:to-black dark:bg-black'>
      <div className='dark:bg-zinc-900 bg-[#fdf8f8] rounded-3xl backdrop-blur-md  border-white/30 shadow-xl flex flex-col md:flex-row items-center justify-center '>
        <div className='h-80 w-80 overflow-hidden flex items-center justify-center'>
          <img
            className='h-full w-full object-contain '
            src={forgetimg}
            alt=''
          />
        </div>
        <div className=' dark:bg-zinc-900 rounded-3xl p-8  max-w-sm w-full text-center'>
          {/* <img
            src={Logo}
            alt='Logo'
            className='mx-auto mb-4 w-3/4 cursor-pointer'
            onClick={() => navigate("/login")}
          /> */}
          <h2 className='text-2xl text-left font-bold dark:text-zinc-300 text-black '>
            Forgot
          </h2>
          <h2 className='text-2xl text-left font-bold dark:text-zinc-300 mb-4'>
            Password?
          </h2>
          <p className='text-left dark:text-zinc-400 text-gray-700'>
            Enter the email address registered with your account
          </p>
          <form onSubmit={handlePasswordReset}>
            <div className='mb-6 mt-6'>
              <input
                type='email'
                className='w-full dark:bg-zinc-900 dark:rounded-none dark:text-zinc-300 px-4 py-2 border border-l-0 border-r-0 border-t-0 border-gray-300 rounded-lg focus:outline-none focus:border-t-none focus:ring-2 focus:ring-violet-400'
                placeholder='Enter your email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className=' w-full flex justify-end items-center '>
              <button
                type='submit'
                className={`w-[50%] px-4 py-2 text-white bg-green-600 rounded-lg dark:border-none hover:bg-black hover:border hover:border-gray-300 focus:outline-none focus:ring-2 focus:ring-violet-400 focus:ring-opacity-50 ${
                  loading ? "cursor-not-allowed" : ""
                }`}
                disabled={loading}
              >
                {loading ? "Sending..." : "Send Email"}
              </button>
            </div>
          </form>
          <ToastContainer />
        </div>
      </div>
    </div>
  );
};

export default ForgetPassword;
