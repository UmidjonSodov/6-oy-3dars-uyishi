import React, { useEffect, useState } from "react";

function BoxsInformation() {
  const BASE_URL = "https://dummyjson.com/users?limit=8";
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchUsers = async () => {
    try {
      const response = await fetch(BASE_URL);
      const data = await response.json();
      setUsers(data.users); 
      setLoading(false);
    } catch (error) {
      console.error("API xato:", error);
      setLoading(false);
    }
  };

  
  useEffect(() => {
    fetchUsers();
  }, []);

  if (loading) {
    return <p className="text-center mt-10 text-gray-500">Yuklanmoqda...</p>;
  }

  return (
    <div className="flex flex-wrap gap-6 justify-center mt-10 px-6">
      {users.map((user) => (
        <div
          key={user.id}
          className="w-[320px] border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
        >
          <img
            src={user.image}
            alt={user.firstName}
            className="w-full h-[250px] object-cover rounded-t-lg"
          />
          <div className="p-4">
            <p className="bg-gray-100 text-gray-600 py-1 px-3 rounded-md w-max text-sm mb-3">
              {user.company?.title || "Employee"}
            </p>
            <h2 className="font-semibold text-xl mb-2">
              {user.firstName} {user.userAgent}
            </h2>

            <div className="flex justify-between items-center mt-4 text-gray-400 text-sm">
              <span>{user.firstName} </span>
              <span>3 days ago</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default BoxsInformation;
