import React, { useState,useEffect } from 'react'


 const ManageUser = () => {

    const [userList, setUserList] = useState([]);


// this will fetch user data from backend
    const getDataFromBackend=async ()=>{
      const response= await fetch('http://localhost:5000/user/getall')
    // jo bhi data ayega backend se wo data name k variable m store ho jayega 
     const data= await response.json();  
     console.log(data);
     setUserList(data);
    }
    // effect hooks
    useEffect(() => {
     getDataFromBackend();
    }, [])


    const displayUsers=()=>{
return <table className='table bg-white'>
    <thead>
        <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th></th>
            <th></th>
        </tr>

    </thead>
    <tbody>
           {
            userList.map((user)=>(
                <tr>
                    <td>{user._id}</td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.number}</td>
                    <td>
                        <button className='btn btn-outline-danger'>
                        <i class="fas fa-trash"></i>
                        </button>
                    </td>

                    <td>
                        <button className='btn btn-outline-primary'>
                        <i class="fas fa-pen"></i>
                        </button>
                    </td>
                </tr>
            ))
           }
    </tbody>
</table>
    }
    
  return (
    <div>
        <h1 className='text-center'>User Manager</h1>
        {displayUsers()}
    </div>
  )
}
export default ManageUser;