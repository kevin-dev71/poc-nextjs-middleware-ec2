"use client";

import axios from "axios";
import { useState } from "react";
import { useRouter } from "next/navigation";

function Home() {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });
  const router = useRouter();

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const res = await axios.post("/api/auth/login", credentials);

    if (res.status === 200) {
      router.push("/dashboard");
    }
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      <form onSubmit={handleSubmit} className="flex flex-col gap-7">
        <input
          className="text-black"
          type="email"
          placeholder="email"
          onChange={(e) =>
            setCredentials({
              ...credentials,
              email: e.target.value,
            })
          }
        />
        <input
          className="text-black"
          type="password"
          placeholder="password"
          onChange={(e) =>
            setCredentials({
              ...credentials,
              password: e.target.value,
            })
          }
        />
        <button>Login</button>
      </form>
    </div>
  );
}

export default Home;
