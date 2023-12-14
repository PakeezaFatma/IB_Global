import React, { Fragment } from 'react'
import Sidebar from '../component/Dashboard Components/SideBarComponents/Sidebar'
import ListContainer from '../component/Dashboard Components/ListContainer'

const DashboardPage = () => {
  return (
    <div className='flex justify-between'>
        <div className='w-[20%] hidden lg:block'><Sidebar /></div>
        <div className='w-[100%] lg:ml-5 lg:max-w-[77%]'>
          {/* <ListContainer mainHeading={"Assignment List"} assingmentName ={true} assingmentArray ={true} assingmentList={true} /> */}
        
        <ListContainer mainHeading={"User List"} assingmentArray ={true} buttonToAddNewUser={"Add User"} UserList={true} />

        </div>
        
        
    </div>
  )
}

export default DashboardPage



