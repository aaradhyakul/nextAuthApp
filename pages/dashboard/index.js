"use client";
import React, { useEffect } from "react";
import Analytics from "@/components/Analytics";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

function Dashboard() {
  const { data: session, status } = useSession();
  const router = useRouter();
  useEffect(() => {
    if (!(status == "authenticated")) {
      router.push("/");
    }
  }, [status]);

  if (status == "authenticated") {
    return (
      <div className={`bg-[#F5F5F5] w-screen h-screen  relative`}>
        <Analytics />
      </div>
    );
  }
}

export default Dashboard;
