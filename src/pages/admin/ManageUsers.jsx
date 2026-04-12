import { useState, useEffect } from "react";
import { getAllUsers, deleteUser, updateUserRole } from "../../services/authService";

const ManageUsers = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        fetchUsers();
    }, []);

    const fetchUsers = async () => {
        try {
            const response = await getAllUsers();
            setUsers(response.data);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    const handleDelete = async (userId) => {
        if (!window.confirm("Are you sure you want to delete this user?")) return;
        try {
            await deleteUser(userId);
            setUsers(users.filter(user => user._id !== userId));
        } catch (err) {
            setError(err.message);
        }
    };

    const handleRoleChange = async (userId, currentRole) => {
        const newRole = currentRole === "admin" ? "user" : "admin";
        try {
            await updateUserRole(userId, newRole);
            setUsers(users.map(user => user._id === userId ? { ...user, role: newRole } : user));
        } catch (err) {
            setError(err.message);
        }
    };

    if (loading) return <div className="text-center py-10">Loading users...</div>;
    if (error) return <div className="text-center py-10 text-red-500">{error}</div>;

    return (
        <div className="p-10">
            <h1 className="text-2xl font-bold mb-6">Manage Users</h1>

            <div className="overflow-x-auto">
                <table className="min-w-full bg-[#1C1C2E] rounded-lg overflow-hidden">

                    {/* TABLE HEAD */}
                    <thead>
                        <tr className="bg-[#2a2a40] text-gray-300 text-sm">
                            <th className="px-4 py-3 text-left">Name</th>
                            <th className="px-4 py-3 text-left">Email</th>
                            <th className="px-4 py-3 text-left">Role</th>
                            <th className="px-4 py-3 text-left">Province</th>
                            <th className="px-4 py-3 text-left">Delete</th>
                        </tr>
                    </thead>

                    {/* TABLE BODY */}
                    <tbody>
                        {users.map((user) => (
                            <tr
                                key={user._id}
                                className="border-t border-[#2a2a40] hover:bg-[#25253a] transition"
                            >
                                {/* NAME */}
                                <td className="px-4 py-3 align-middle">{user.name}</td>

                                {/* EMAIL */}
                                <td className="px-4 py-3 align-middle">{user.email}</td>

                                {/* ROLE BUTTON */}
                                <td className="px-4 py-3 align-middle">
                                    <button
                                        onClick={() =>
                                            handleRoleChange(user._id, user.role)
                                        }
                                        className={`px-3 py-1 text-sm rounded-md font-medium transition
                    ${user.role === "admin"
                                                ? "bg-red-100 text-red-600 hover:bg-red-200"
                                                : "bg-green-100 text-green-700 hover:bg-green-200"
                                            }`}
                                    >
                                        {user.role === "admin" ? "Admin" : "User"}
                                    </button>
                                </td>

                                {/* PROVINCE */}
                                <td className="px-4 py-3 align-middle">
                                    {user.selectedProvince?.name || "N/A"}
                                </td>

                                {/* DELETE BUTTON */}
                                <td className="px-4 py-3 align-middle">
                                    <button
                                        onClick={() => handleDelete(user._id)}
                                        className="px-3 py-1 text-sm rounded-md bg-red-500 text-white hover:bg-red-600 transition"
                                    >
                                        Delete
                                    </button>
                                </td>

                            </tr>
                        ))}
                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default ManageUsers;