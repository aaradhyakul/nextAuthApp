import styles from "../styles/Home.module.css";
import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const googleHandler = (e) => {
    (e) => {
      e.preventDefault();
      signIn("google");
    };
  };
  const gitHubHandler = (e) => {
    (e) => {
      e.preventDefault();
      signIn("github");
    };
  };

  if (!(status == "authenticated")) {
    return (
      <div
        className={`${styles.home_container} w-screen min-h-screen flex md:flex-row flex-col`}
      >
        <div
          className={`${styles.left} bg-[#000000] md:flex-left flex-top  color-[#FFFFFF] flex justify-center items-center`}
        >
          <h1 className={`text-white md:text-[72px] font-mont font-bold`}>
            Board.{" "}
          </h1>
        </div>
        <div
          className={`${styles.right} md:flex-right flex-bottom bg-[#F5F5F5] flex justify-center items-center font-arial`}
        >
          <div
            className={`w-[90%] md:max-w-[385px] flex flex-col gap-y-[10px]`}
          >
            <h1 className={`text-4xl font-black tracking-normal font-mont`}>
              Sign In
            </h1>
            <div className={`text-base`}>Sign in to your account</div>
            <div className={`flex gap-x-[20px] mb-[8px]`}>
              <Link
                href="/api/auth/signin"
                onClick={googleHandler}
                className={`bg-white px-[15px] py-[5px] text-mid rounded-lg text-[#858585] flex-auto flex items-center justify-center gap-x-[12px] tracking-[0.2px]`}
              >
                <img width="14px" src="/static/google.png" />
                Sign in with google
              </Link>
              <Link
                href="/api/auth/signin"
                onClick={gitHubHandler}
                className={`bg-white px-[15px] py-[5px] text-mid rounded-lg text-[#858585] flex-auto flex items-center justify-center gap-x-[12px] tracking-[0.2px]`}
              >
                <img width="14px" src="/static/github.png" />
                Sign in with Github
              </Link>
            </div>
            <form
              className={`${styles.email_form} md:text-base flex flex-col gap-[20px] px-[30px] py-[30px] rounded-2xl`}
            >
              <div
                className={`${styles.email_form_control} flex flex-col gap-y-[5px]`}
              >
                <label>Email address</label>
                <input
                  type="email"
                  className={`md:text-base rounded-lg px-[10px] py-[5px] tracking-[0.3px]`}
                />
              </div>
              <div
                className={`${styles.email_form_control} flex flex-col gap-y-[5px]`}
              >
                <label>Password</label>
                <input
                  type="password"
                  className={`md:text-base rounded-lg px-[15px] py-[5px] tracking-[0.3px]`}
                />
              </div>
              <div className={`md:text-base text-formblue`}>
                Forgot Password?
              </div>
              <button
                type="submit"
                className={`md:text-lg bg-black text-white rounded-lg py-[7px] font-bold`}
              >
                Sign In
              </button>
            </form>
            <div className={`mx-auto`}>
              <span className={`text-mid text-[#858585]`}>
                {"Don't have an account?&nbsp;"}
              </span>
              <a className={`text-mid text-formblue `} href="#">
                Register here
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    router.push("/dashboard");
  }
}
