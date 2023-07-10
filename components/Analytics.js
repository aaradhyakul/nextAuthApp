"use client";
import React, { useState } from "react";
import styles from "../styles/Dashboard.module.css";
import Navbar from "@/components/Navbar";
import Menu from "@/components/Menu";
// import { Line } from "react-chartjs-2";

function Analytics() {
  const [menu, setMenu] = useState("closemenu");
  const closeMenu = () => {
    setMenu("closemenu");
  };
  const openMenu = () => {
    setMenu("openmenu");
  };
  return (
    <div
      className={`${styles.page_wrapper} w-[100%] h-[100%] p-[30px] ce:p-[35px]   flex justify-center `}
    >
      <Menu menu={menu} closeMenu={closeMenu} />
      <div className={`${styles.analytics_wrapper} `}>
        <div
          className={`${styles.analytics_container} pl-[35px] w-[100%] ce:gap-[35px] gap-[25px] `}
        >
          <Navbar openMenu={openMenu} />
          <div
            className={`${styles.revenue} ${styles.statistic_card} bg-[#DDEFE0] rounded-2xl flex flex-col`}
          >
            <div>
              <img src="/static/revenue.png" width="24px" />
            </div>
            <div className={`md:text-mid`}>Total Revenues</div>
            <div>$2,129,430</div>
          </div>
          <div
            className={`${styles.transactions} ${styles.statistic_card} bg-[#F4ECDD] rounded-2xl flex flex-col`}
          >
            <div>
              <img src="/static/transactions.png" width="24px" />
            </div>
            <div className={`md:text-mid`}>Total Transactions</div>
            <div>1520</div>
          </div>
          <div
            className={`${styles.likes} ${styles.statistic_card} bg-[#EFDADA] rounded-2xl flex flex-col`}
          >
            <div>
              <img src="/static/likes.png" width="24px" />
            </div>
            <div className={`md:text-mid`}>Total Likes</div>
            <div>920</div>
          </div>
          <div
            className={`${styles.users} ${styles.statistic_card} bg-[#DEE0EF] rounded-2xl flex flex-col`}
          >
            <div>
              <img src="/static/users.png" width="24px" />
            </div>
            <div className={`md:text-mid`}>Total Users</div>
            <div>3240</div>
          </div>
          <div
            className={`${styles.activities} bg-white rounded-2xl relative flex items-center`}
          >
            <img src="/static/activitescard.svg" />
            <img
              src="/static/line_chart_1.svg"
              className={`${styles.linechart} absolute left-[8%] width-[60%]`}
            />
            <img
              src="/static/line_chart_2.svg"
              className={`${styles.linechart} absolute left-[8%] width-[60%]`}
            />
            {/* <ActivityChart /> */}
          </div>
          <div className={`${styles.products} bg-white rounded-2xl`}>
            <img src="/static/productscard.svg" />
          </div>
          <div className={`${styles.schedule} bg-white rounded-2xl`}>
            <img src="/static/schedulescard.png" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Analytics;
