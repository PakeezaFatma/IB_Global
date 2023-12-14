import React from 'react'
import TableComponent from './TableComponent'
import { Link } from 'react-router-dom'

const ListContainer = ({ assingmentName, assingmentArray, mainHeading, buttonToAddNewUser,assingmentList,UserList }) => {
    return (
        <div className='flex flex-col w-[100%] mt-10 h-15 rounded-md shadow-myShadow'>
            <div className='px-8 py-5 flex justify-between'>
                <div className='text-black'>{mainHeading}</div>
                {buttonToAddNewUser && <div><button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded">
                    <Link to="/add-new-user">
                    {buttonToAddNewUser}
                    </Link>
                </button></div>}
            </div>
            <div class="border-b border-gray-400 w-[100%]"></div>
            <div className='flex flex-col space-y-5 items-start md:items-center  justify-between p-8 md:flex-row md:space-y-auto'>
                <div className='flex space-x-4'>
                    <div>Show</div>
                    {/* dropdown */}
                    <div className='border rounded-sm border-gray-500 px-1'>
                        <select id="dropdown" >
                            <option value="Option 1">1</option>
                            <option value="Option 2">2</option>
                            <option value="Option 3">3</option>
                            <option value="Option 4">4</option>
                        </select>
                    </div>
                    {/* dropdown end */}
                    <div>entries</div>
                </div>
                {/* Right side div */}
                <div className='flex items-center'>
                    <label>search :</label>
                    <input className='h-6 w-40 px-2 py-4 border border-sm border-gray-500 rounded-[3px] ml-1' type='text' />
                </div>
                {/* Right side div end */}
            </div>
            {assingmentName && <div className='bg-[#e4eff6] w-[100%] h-10 flex items-center pl-8'>ASSINGMENT NAME</div>}
            {/* for assingment div */}
            {assingmentArray &&
                    <TableComponent Nameofstudent={"Nameofstudent"} assingmentList={assingmentList} UserList={UserList}/>
               
            }
            {/* for assingment div end */}

        </div>
    )
}

export default ListContainer