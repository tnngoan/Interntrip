import React from "react";
import ProfilePopover from "./ProfilePopover";
import Link from "next/link";
import JobFilterForm from "./JobFilterForm";

export default function Navbar() {

  function handleFilterChange(newFilter) {
    console.log(newFilter);
  }

  return (
    <div>
      <nav className="bg-gray-800 py-1">
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
          <div className="relative flex items-center justify-between ">
            <div className="flex-1 flex items-center justify-around sm:items-stretch sm:justify-start">
              <div className="hidden sm:block sm:ml-6">
                <div className="flex justify-evenly space-4">
                  <div className="flex space-x-4 align-center">
                    <Link href="/">
                      <img
                        className="hidden lg:block h-8 w-auto"
                        src="/images/thislogo.jpg"
                        alt="Work"
                      />
                    </Link>
                    <Link
                      href="/joblist"
                      className="text-white px-3 rounded-md text-sm font-medium"
                    >
                      <a className="text-white">Find Job</a>
                    </Link>
                    <Link
                      href="#"
                      className="text-white hover:bg-gray-700 hover:text-white px-3 rounded-md text-sm font-medium"
                    >
                      <a className="text-white">Company</a>
                    </Link>
                    <Link
                      href="#"
                      className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 rounded-md text-sm font-medium"
                    >
                      <a className="text-white">Collaborate</a>
                    </Link>
                    <Link
                      href="#"
                      className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 rounded-md text-sm font-medium"
                    >
                      <a className="text-white">Blog</a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <JobFilterForm onSubmit={handleFilterChange} />
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              <button className="bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                <span className="sr-only">View notifications</span>

                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                  />
                </svg>
              </button>
              <div className="ml-3 relative">
                <ProfilePopover />
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
