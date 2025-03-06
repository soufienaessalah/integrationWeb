"use client";
import React from "react";

function LogoutButton() {
  const handleLogout = () => {
    // Implement logout functionality here
    console.log("User logged out");
  };

  return (
    <div className="absolute h-[45px] right-[230px] top-[34px] w-[109px] max-md:right-4 max-sm:w-20 max-sm:h-[35px]">
      <button
        onClick={handleLogout}
        className="text-3xl text-white bg-red-500 rounded size-full max-sm:text-xl flex items-center justify-center hover:bg-red-600 transition-colors"
      >
        LogOut
      </button>
    </div>
  );
}

export default LogoutButton;
