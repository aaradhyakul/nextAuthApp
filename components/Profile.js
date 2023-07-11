import React, { useEffect, useState } from "react";
import styles from "../styles/Dashboard.module.css";
import { signOut } from "next-auth/react";
import { useRouter } from "next/router";

function Profile({ profileOpen, profileHandler }) {
  const [profileClass, setProfileClass] = useState();
  useEffect(() => {
    profileOpen === "profileOpen"
      ? setProfileClass(styles.profileOpen)
      : setProfileClass(styles.profileClosed);
  }, [profileOpen]);

  const router = useRouter();

  const signOutHandler = () => {
    signOut();
    // router.push("/");
  };

  return (
    <div
      className={`${profileClass} flex gap-[2px] flex-col profile-cont absolute w-[300px]  bg-gray-900 right-[-9px] top-[35px] p-[10px] pr-[23px] rounded-xl`}
    >
      <div className="text-white text-lg tracking-[0.3px]  font-bold  flex justify-between items-center">
        <span>Profile</span>
        <img
          className="duration-200 hover:scale-110"
          width="22px"
          src="/static/closeprofile.png"
          onClick={() => {
            profileHandler("profileClosed");
          }}
        />
      </div>
      <div className="w-full h-[0.3px] bg-gray-600"></div>
      <button
        className="flex text-white items-center  gap-[10px] p-[5px]  rounded-md p-[10px] hover:bg-gray-700"
        onClick={signOutHandler}
      >
        <img src="/static/logout.png" width="30px" />
        <span>Sign Out</span>
      </button>
    </div>
  );
}

export default Profile;
