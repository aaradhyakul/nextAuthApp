"use client";
import React, { useState } from "react";
import styles from "../styles/Dashboard.module.css";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";

function Navbar({ openMenu }) {
  const router = useRouter();

  const signOutHandler = () => {
    signOut();
    router.push("/");
  };

  return (
    <div className={`${styles.navbar}  flex items-center `}>
      <img
        className={`mh:hidden mr-[10px]`}
        src="/static/menuicon.png"
        width="30px"
        onClick={openMenu}
      />
      <div
        className={`text-2xl font-black tracking-[0.2px] font-mont mb:block hidden`}
      >
        Dashboard
      </div>
      <div className={`flex bg-[#F5F5F5] items-center ml-auto gap-x-[30px]`}>
        <div
          className={`${styles.search_box} relative w-[180px] rounded-xl bg-white   `}
        >
          <input
            className={`w-[160px] px-[15px] py-[3px] rounded-lg`}
            type="text"
            placeholder="Search ..."
          />
          <img
            className={`absolute right-[15px] top-[50%] translate-y-[-50%] `}
            width="18px"
            src="/static/search.png"
          />
        </div>
        <img src="/static/bell.png" width="20px" />
        <img src="/static/gamer.png" width="22px" onClick={signOutHandler} />
      </div>
    </div>
  );
}

export default Navbar;
