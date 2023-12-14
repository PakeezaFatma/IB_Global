import React from 'react'

const FormAddUser = () => {
    return (
        <div className="mx-5 xl:mx-auto mt-10 p-10 rounded-md shadow-myShadow ">
            <h1 className="text-3xl font-bold mb-6">Add User</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="mb-4">
                    <label htmlFor="userType" className="block mb-2">User Type</label>
                    <select id="userType" className="border rounded p-2 w-full" required>
                        {/* Add options for user types */}
                        <option value="admin">Admin</option>
                        <option value="user">User</option>
                    </select>
                </div>
                <div className="mb-4">
                    <label htmlFor="userName" className="block mb-2">User Name</label>
                    <input type="text" id="userName" className="border rounded p-2 w-full" required />
                </div>
                <div className="mb-4">
                    <label htmlFor="userEmail" className="block mb-2">User Email</label>
                    <input type="email" id="userEmail" className="border rounded p-2 w-full" required />
                </div>
                <div className="mb-4">
                    <label htmlFor="userMobile" className="block mb-2 relative">
                        User Mobile
                        <span className="text-xs text-gray-500 absolute top-1 left-[95px]">(optional)</span>
                    </label>
                    <input type="text" id="userMobile" className="border rounded p-2 w-full" />
                </div>
                <div className="mb-4">
                    <label htmlFor="interactiveDate" className="block mb-2">Set Interactive Date</label>
                    <input type="date" id="interactiveDate" className="border rounded p-2 w-full" required />
                </div>
                <div className="mb-4">
                    <label htmlFor="userPassword" className="block mb-2">User Password</label>
                    <input type="password" id="userPassword" className="border rounded p-2 w-full" required />
                </div>
            </div>
            <div className="flex justify-end">
                <button className="bg-blue-500 text-white px-4 py-2 rounded mt-4">Add User</button>
            </div>
        </div>
    )
}

export default FormAddUser