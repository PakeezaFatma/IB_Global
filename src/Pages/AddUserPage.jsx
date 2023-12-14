import React from 'react'
import FormAddUser from '../component/Dashboard Components/FormAddUser'
import Sidebar from '../component/Dashboard Components/SideBarComponents/Sidebar'

const AddUserPage = () => {
    return (
        <div className='flex justify-between'>
            <div className='w-[20%] hidden lg:block'><Sidebar /></div>
            <div className='w-[100%] lg:ml-5 lg:max-w-[77%]'>
                <FormAddUser />
            </div>
        </div>
    )
}

export default AddUserPage