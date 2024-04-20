"use client";

import axios from "axios";
import { useState } from "react";
import { useRouter } from "next/navigation";

function Dashboard() {
  const [user, setUser] = useState({
    email: "",
    username: "",
  });
  const router = useRouter();

  const getProfile = async () => {
    const profile = await axios.get("/api/profile");
    setUser(profile.data);
  };

  const logout = async () => {
    try {
      const res = await axios.get("/api/auth/logout");
      console.log(res);
    } catch (error) {
      console.error(error);
    }
    router.push("/login");
  };
  return (
    <div className="flex flex-col gap-2">
      {JSON.stringify(user)}
      <button onClick={() => getProfile()}>click to get profile</button>
      <button onClick={() => logout()}>Logout</button>
    </div>
  );
}

export default Dashboard;
