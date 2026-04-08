import { useEffect, useState } from "react";
import api from "../api/axios";

export default function UserCard() {
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const res = await api.get("/user");
        setMessage(res.data);
      } catch (err: any) {
        setError("Access Denied");
      }
    };

    fetchUserData();
  }, []);

  if (error) {
    return (
      <div className="text-center mt-10 text-red-500 font-semibold">
        {error}
      </div>
    );
  }

  return (
    <div className="flex justify-center items-center max-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-2xl p-6 w-80 text-center">
        <h2 className="text-xl font-bold text-gray-800 mb-2">User Panel</h2>

        <p className="text-gray-600 mb-4">{message || "Loading..."}</p>

        <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition">
          View Profile
        </button>
      </div>
    </div>
  );
}
