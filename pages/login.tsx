"use client";
import Button from "../components/Button";
import SocialIcons from "../components/SocialIcons";
// import { CgMenuRound } from "react-icons/Cg";
import InputIcons from "../components/InputIcons";
import { FaEnvelope, FaLock } from "react-icons/fa";
import { FormEventHandler, useState, useEffect } from "react";
import { getSession, signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Link from "next/link";

const Login: React.FC = () => {
  const [userInfo, setUserInfo] = useState({ email: "", password: "" });
  const router = useRouter();

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    //validate userInfo
    e.preventDefault();
    const result = await signIn("credentials", {
      email: userInfo.email,
      password: userInfo.password,
      redirect: false,
    });

    if (result && result.error === null) {
      const session = await getSession();
      if (session?.user !== null) {
        toast.success("Connection successful");
        router.push("/chat");
      }
    } else {
      toast.error("Connection failed");
    }
  };

  return (
    <>
      <div className="flex items-center justify-center h-screen">
        <div className="container mx-auto bg-blue-100">
          <div className="flex justify-between p-10 h-90">
            <div className="w-1/2 bg-gray-800 h-70 rounded-l-md hidden sm:block">
              {/* <div className="bg-zinc-200 w-8 p-1 flex justify-center rounded-md mt-4 ml-4">
                <CgMenuRound size={20} />
              </div> */}

              <div className="p-2 flex justify-center space-x-10  mb-10 mt-20">
                <div className="w-35 h-35 flex justify-center items-center text-center rounded-full p-3 bg-yellow-300">
                  <div style={{ fontSize: "3rem" }}>💭</div>
                </div>

                <div className="w-35 h-35 flex justify-center items-center text-center rounded-full p-3 bg-green-300">
                  <div style={{ fontSize: "3rem" }}>💬</div>
                </div>

                <div className="w-35 h-35 flex justify-center items-center text-center rounded-full p-3 bg-blue-600">
                  <div style={{ fontSize: "3rem" }}>✍️</div>
                </div>
              </div>

              <div className="w-1/2 mx-auto bg-gray-800 p-8 text-center mb-10">
                <h1 className="text-2xl font-bold mb-4 text-white">
                  Start Chatting Now
                </h1>
                <h3 className="text-md text-gray-300">
                  Join the conversation <br />
                  and connect with your friends
                </h3>
              </div>
            </div>

            <div className="w-full sm:w-1/2 bg-white h-50 rounded-r-md  p-8 ">
              <h1 className="text-center text-3xl font-bold mb-5">Sign In</h1>
              <div className="p-2 flex justify-center space-x-10 mt-5 mb-4">
                <SocialIcons name="google" size={32} color="#DB4437" />
                <SocialIcons name="facebook" size={32} color="#1877f2" />
                <SocialIcons name="apple" size={32} color="#000000" />
              </div>
              <div className="flex items-center justify-center w-full mb-3">
                <hr className="border border-gray-300 flex-grow mr-2" />
                <span className="text-gray-500 font-bold text-sm">
                  Sign in using email
                </span>
                <hr className="border border-gray-300 flex-grow ml-2" />
              </div>

              <div className="flex justify-center items-center mt-7">
                <form className="w-full max-w-sm" onSubmit={handleSubmit}>
                  <div className="mb-5">
                    <InputIcons
                      name="email"
                      placeholder="your email"
                      icon={FaEnvelope}
                      inputType="email"
                      value={userInfo.email}
                      onChange={(e) =>
                        setUserInfo({
                          ...userInfo,
                          [e.target.name]: e.target.value,
                        })
                      }
                    />
                  </div>
                  <div className="mb-5">
                    <InputIcons
                      name="password"
                      placeholder="your password"
                      icon={FaLock}
                      inputType="password"
                      value={userInfo.password}
                      onChange={({ target }) =>
                        setUserInfo({ ...userInfo, password: target.value })
                      }
                    />
                  </div>
                  <div className="flex items-center justify-center mb-5">
                    <Button type="submit" className="font-bold text-center">
                      Sign In
                    </Button>
                  </div>

                  <div className="container mx-auto py-3 px-4 flex items-center justify-between">
                    <p className="text-gray-600">Don't have an account?</p>
                    <Link
                      href="/chat-public"
                      className="text-blue-500 hover:text-blue-700 font-bold ml-2"
                    >
                      Chat
                    </Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default Login;
