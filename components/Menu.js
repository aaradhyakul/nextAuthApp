"use client";
import React, { useState } from "react";
import styles from "../styles/Dashboard.module.css";

function Menu({ menu, closeMenu }) {
  return (
    <div
      className={`${styles.menu_wrapper} h-[100%] max-h-[944px] flex justify-end`}
    >
      <div
        className={`${styles.menu} ${menu}  h-full w-[280px] mh:p-[40px] p-[30px] rounded-3xl bg-[black] text-white flex flex-col justify-between`}
      >
        <img
          className={`absolute right-[30px] top-[30px] mh:hidden`}
          src="/static/cross.png"
          width="32px"
          onClick={closeMenu}
        />
        <div>
          <div
            className={`text-[35px] mh:text-[40px] font-mont font-black tracking-[1px] mt-[30px]`}
          >
            Board .
          </div>
          <div
            className={`flex h-[30px] items-center gap-[20px] mt-[30px] text-lg`}
          >
            <img src="/static/mdashboard.png" width="18px" height="18px" />
            <div className={`text-lg tracking-[0.4px]`}>Dashboard</div>
          </div>
          <div
            className={`flex h-[30px] items-center gap-[20px] mt-[25px] text-lg`}
          >
            <img src="/static/mtransactions.png" width="18px" height="18px" />
            <div className={`text-lg tracking-[0.4px]`}>Transactions</div>
          </div>
          <div
            className={`flex h-[30px] items-center gap-[20px] mt-[25px] text-lg`}
          >
            <img src="/static/mschedules.png" width="18px" height="18px" />
            <div className={`text-lg tracking-[0.4px]`}>Schedules</div>
          </div>
          <div
            className={`flex h-[30px] items-center gap-[20px] mt-[25px] text-lg`}
          >
            <img src="/static/musers.png" width="18px" height="18px" />
            <div className={`text-lg tracking-[0.4px]`}>Users</div>
          </div>
          <div
            className={`flex h-[30px] items-center gap-[20px] mt-[25px] text-lg`}
          >
            <img src="/static/msettings.png" width="18px" height="18px" />
            <div className={`text-lg tracking-[0.4px]`}>Settings</div>
          </div>
        </div>
        <div>
          <div className={`mb-[18px]`}>Help</div>
          <div>Contact Us</div>
        </div>
      </div>
    </div>
  );
}

export default Menu;
