import { getRole, logout } from "../auth/auth";
import UserCard from "../components/UserCard";
import AdminCard from "../components/AdminCard";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const role = getRole();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navbar */}
      <div className="flex justify-between items-center bg-white shadow-md px-6 py-4">
        <h1 className="text-xl font-bold text-gray-800">Dashboard</h1>

        <div className="flex items-center gap-4">
          <span className="text-sm text-gray-600">
            Role: <span className="font-semibold">{role}</span>
          </span>

          <button
            onClick={handleLogout}
            className="bg-red-500 text-white px-4 py-1 rounded-lg hover:bg-red-600 transition"
          >
            Logout
          </button>
        </div>
      </div>

      <div className="p-14">
      

        <div className="flex justify-center">
          <div className="w-full max-w-md">
            {role === "USER" && <UserCard />}
            {role === "ADMIN" && <AdminCard />}
          </div>
        </div>
      </div>
    </div>
  );
}
