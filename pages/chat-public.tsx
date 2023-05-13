"use client";
import React from "react";
import "react-toastify/dist/ReactToastify.css";
import { FiLogOut } from "react-icons/fi";
import Conversation from "../components/Chats/Conversation";
import { useRouter } from "next/navigation";

const ChatPublic: React.FC = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push("/");
  };

  return (
    <>
      <div>
        <div>
          <div className="relative min-h-screen flex flex-col bg-gray-50">
            <nav className="flex-shrink-0 bg-blue-600">
              <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
                <div className="relative flex items-center justify-between h-16">
                  <div></div>

                  <div className="flex lg:hidden justify-between">
                    <button className="bg-blue-600 inline-flex item-center justify-center p-2 rounded-md text-white hover:text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offet-blue-600 focus:ring-white">
                      <svg
                        className="block h-6 w-6"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M4 6h16M4 12h8m6 6h2"
                        />
                      </svg>
                    </button>
                    <button
                      className="bg-blue-600 inline-flex item-center justify-center p-2 rounded-md text-white hover:text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offet-blue-600 focus:ring-white ml-4"
                      onClick={handleClick}
                    >
                      <FiLogOut className="h-6 w-6" />
                    </button>
                  </div>

                  <div className="hidden lg:block lg:w-80">
                    <div className="flex items-center justify-between">
                      <div className="flex">
                        <a
                          href="#"
                          className="px-3 py-2 rounded-md text-sm font-medium text-white hover:text-white"
                        >
                          Chat
                        </a>
                      </div>
                      <div className="ml-4 relative flex-shrink-0">
                        <div className="ml-4 relative flex-shrink-0 flex items-center">
                          <button className="bg-blue-700 flex text-sm rounded-full text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-blue-700 focus:ring-white">
                            <img
                              src="https://xsgames.co/randomusers/assets/avatars/male/10.jpg"
                              alt="profile"
                              className="h-8 w-8 rounded-full"
                            />
                          </button>
                          <button
                            className="bg-blue-600 ml-2 inline-flex item-center justify-center p-2 rounded-md text-white hover:text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offet-blue-600 focus:ring-white"
                            onClick={handleClick}
                          >
                            <FiLogOut className="h-6 w-6" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </nav>

            {/* Nav section end */}

            {/* layout section start */}
            <div className="flex-grow w-full max-w-7xl mx-auto lg:flex">
              <div className="flex-1 min-w-0 bg-white xl:flex">
                {/* Left content start*/}
                <div className="border-b border-gray-200 xl:border-b-0 xl:flex-shrink-0 xl:w-64 xl:border-r xl:border-gray-200 bg-gray-50">
                  <div className="h-full pl-4 pr-2 py-6 sm:pl-6 lg:pl-8 xl:pl-0">
                    <div className="h-full relative">
                      {/* person 1 */}
                      <div className="relative rounded-lg px-2 py-2 flex items-center space-x-3 hover:border-gray-400 focus-within:ring-2 focus-within-ring-offset-2 focus-within:ring-blue-500 mb-4">
                        <div className="flex-shrink-0">
                          <img
                            src="https://xsgames.co/randomusers/assets/avatars/male/10.jpg"
                            alt="profile_1"
                            className="h-12 w-12 rounded-full"
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <a href="#" className="focus:outline-none">
                            <span className="absolute inset-0" />
                            <p className="text-sm font-bold text-blue-600">
                              Alex Mitchell
                            </p>
                            <p className="text-sm font-bold text-gray-500">
                              Data Analyst
                            </p>
                          </a>
                        </div>
                      </div>
                      {/* search bar 2 */}
                      <div className="mb-4">
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              className="h-5 w-5 text-gray-400"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                              />
                            </svg>
                          </div>
                          <input
                            type="text"
                            name="search"
                            className="focus:ring-blue-500 focus:border-blue-500 block w-full pl-10  sm:text-sm border-gray-100 rounded-full p-2 border"
                          />
                        </div>
                      </div>
                      {/* search bar end 3 */}
                      {/* message 1 */}
                      <Conversation
                        name="Person 1"
                        imageSrc="https://xsgames.co/randomusers/assets/avatars/female/2.jpg"
                        imageAlt="Person 1"
                        message="Hello"
                        messageCount={4}
                      />
                      {/* message 1 end */}

                      {/* message 2 */}
                      <Conversation
                        name="Person 2"
                        imageSrc="https://xsgames.co/randomusers/assets/avatars/male/7.jpg"
                        imageAlt="Person 2"
                        message="Hi"
                        messageCount={3}
                      />
                      {/* message 2 end */}

                      {/* message 3 */}
                      <Conversation
                        name="Person 3"
                        imageSrc="https://xsgames.co/randomusers/assets/avatars/male/49.jpg"
                        imageAlt="Person 3"
                        message="where are you ?"
                        messageCount={7}
                      />
                      {/* message 3 end */}

                      {/* message 4 */}
                      <Conversation
                        name="Person 4"
                        imageSrc="https://xsgames.co/randomusers/assets/avatars/male/71.jpg"
                        imageAlt="Person 4"
                        message="why ?"
                        messageCount={3}
                      />
                      {/* message 4 end */}
                    </div>
                  </div>
                </div>
                {/* Left content end */}

                {/* middle content sart */}
                <div className="flex-1 p:2 sm:pb-6 justify-between  flex-col h-screen hidden xl:flex">
                  <div className="flex sm:items-center justify-between  py-3 border-b border-gray-200 p-3">
                    <div className="flex items-center space-x-4">
                      <img
                        src="https://xsgames.co/randomusers/assets/avatars/female/16.jpg"
                        alt=""
                        className="w-10 sm:w-12 h-10 sm:h-12 rounded-full cursor-pointer"
                      />
                      <div className="flex flex-col leading-tight">
                        <div className="text-1xl mt-1 flex items-center">
                          <span className="text-gray-700 mr-3">Jane Smith</span>
                          <span className="text-green-500">
                            <svg width="20" height="20">
                              <circle
                                cx="10"
                                cy="10"
                                r="6"
                                fill="#4CAF50"
                                stroke="#fff"
                                strokeWidth={2}
                              />
                            </svg>
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center space-x-2">
                      <button className="inline-flex items-center justify-center rounded-full h-10 w-10 transition duration-500 ease-in-out text-gray-500 hover:bg-gray-300 focus:outline-none">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          className="w-6 h-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                          />
                        </svg>
                      </button>

                      <button className="inline-flex items-center justify-center rounded-full h-10 w-10 transition duration-500 ease-in-out text-gray-500 hover:bg-gray-300 focus:outline-none">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          className="w-6 h-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M20.84 4.22a5.5 5.5 0 00-7.78 0L12 5.16l-1.06-.94a5.5 5.5 0 00-7.78 7.78L12 21l9.84-9.84a5.5 5.5 0 000-7.78v 0z"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>

                  {/* message start */}
                  <div
                    id="messages"
                    className="flex flex-col space-y-4 p-3 overflow-y-auto  scrollbar-thumb-blue scrollbar-thumb-rounded scrollbar-track-blue-lighter scrollbar-w-2 scrolling-touch"
                  >
                    {/* first message */}
                    <div className="chat-messag">
                      <div className="flex items-end">
                        <div className="flex  flex-col space-y-2 text-xs max-w-xs mx-2 order-2 items-start">
                          <div className="">
                            <span className="px-3 py-2 rounded-lg inline-block rounded-bl-none bg-gray-200 text-gray-600">
                              Lorem ipsum
                            </span>
                          </div>
                        </div>
                        <img
                          src="https://xsgames.co/randomusers/assets/avatars/female/16.jpg"
                          alt=""
                          className="w-6 h-6 rounded-full order-1"
                        />
                      </div>
                    </div>
                    {/* first message end */}

                    {/* second message */}
                    <div className="chat-messag">
                      <div className="flex items-end justify-end">
                        <div className="flex  flex-col space-y-2 text-xs max-w-xs mx-2 order-2 items-end">
                          <div className="">
                            <span className="px-3 py-2 rounded-lg inline-block rounded-bl-none bg-blue-500 text-white">
                              Lorem ipsum 2
                            </span>
                          </div>
                        </div>
                        <img
                          src="https://xsgames.co/randomusers/assets/avatars/male/10.jpg"
                          alt=""
                          className="w-6 h-6 rounded-full order-1"
                        />
                      </div>
                    </div>
                    {/* second message end */}
                  </div>
                  {/* message end */}

                  <div className="border-t-2 border-gray-200 px-4 pt-4 mb-16">
                    <div className="relative flex ">
                      <span className="absolute inset-y-0 flex items-center">
                        <button className="inline-flex items-center justify-center rounded-full h-12 w-12 transition duration-500 ease-in-out text-gray-500 hover:bg-gray-300">
                          <img
                            src="https://www.iconpacks.net/icons/1/free-microphone-icon-342-thumb.png"
                            alt=""
                            className="w-6 h-6 text-gray-600"
                          />
                        </button>
                      </span>
                      <input
                        placeholder="Write a message"
                        type="text"
                        className="focus:ring-blue-500 focus:border-blue-500 w-full focus:placeholder-gray-400 text-gray-600 placeholder-gray-300 pl-12 bg-gray-100 rounded-full py-3 border-gray-200"
                      />
                    </div>
                  </div>
                </div>
                {/* middle content end */}
              </div>

              {/* right content start*/}
              <div className="bg-gray-50 pr-4 sm:pr-6 lg:pr-8 lg:flex-shrink-0 lg:border-l lg:border-gray-200 xl:pr-0 hidden xl:block">
                <div className="h-full pl-6 py-6 lg:w-80">
                  <div className="h-full relative">
                    <div className="m-auto text-center mb-10">
                      <img
                        src="https://xsgames.co/randomusers/assets/avatars/female/16.jpg"
                        alt=""
                        className="w-36 h-36  rounded-full m-auto"
                      />
                      <h2 className="m-auto text-2xl mt-2"> Jane Smith</h2>
                    </div>
                    <div className="mb-2">
                      <h2>Attachements</h2>
                    </div>
                    <div className="grid grid-cols-4 gap-2">
                      <div>
                        <div className="cursor-pointer bg-gray-300 hover:bg-gray-400 h-14 w-full"></div>
                      </div>
                      <div>
                        <div className="cursor-pointer bg-gray-300 hover:bg-gray-400 h-14 w-full"></div>
                      </div>
                      <div>
                        <div className="cursor-pointer bg-gray-300 hover:bg-gray-400 h-14 w-full"></div>
                      </div>
                      <div>
                        <div className="cursor-pointer bg-gray-300 hover:bg-gray-400 h-14 w-full"></div>
                      </div>
                      <div>
                        <div className="cursor-pointer bg-gray-300 hover:bg-gray-400 h-14 w-full"></div>
                      </div>
                      <div>
                        <div className="cursor-pointer bg-gray-300 hover:bg-gray-400 h-14 w-full"></div>
                      </div>
                      <div>
                        <div className="cursor-pointer bg-gray-300 hover:bg-gray-400 h-14 w-full"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* right content end*/}
            </div>
            {/* layout section end */}
          </div>
        </div>
      </div>
    </>
  );
};

export default ChatPublic;
