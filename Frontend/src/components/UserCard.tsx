export default function UserCard() {
  return (
    <div className="flex justify-center items-center p-14  bg-gray-100">
      <div className="bg-white shadow-lg rounded-2xl p-6 w-80 text-center">
        <h2 className="text-xl font-bold text-gray-800 mb-2">User Panel</h2>

        <p className="text-gray-600 mb-4">Welcome, User 👋</p>

        <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition">
      View Profile
        </button>
      </div>
    </div>
  );
}
