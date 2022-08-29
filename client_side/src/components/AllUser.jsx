import {React,useEffect, useState} from 'react'
import {Table, TableBody, TableCell, TableHead, TableRow, styled, Button} from '@mui/material';
import { getUsers,delUser} from '../service/api';
import { Link } from 'react-router-dom';



const AllUser = () => {

  const [users,setUsers] = useState([]);

  useEffect(() =>{
    getAllUsers();
  },[]);

  const getAllUsers = async() =>{
    let response = await getUsers();
    // console.log(response.data);
    setUsers(response.data);

  }

  const deleteUser = async(id) =>{
    await delUser(id);
    alert(`user ${id} deleted`)
  }
  return (
    <StyledTable>
      <TableHead>
        <THead>
          <TableCell>Id</TableCell>
          <TableCell>Name</TableCell>
          <TableCell>Username</TableCell>
          <TableCell>Email</TableCell>
          <TableCell>Password</TableCell>
          <TableCell></TableCell>
        </THead>
      </TableHead>
      <TableBody>
        {
          users.map(user => (
            <TBody>
            <TableCell>{user.name}</TableCell>
            <TableCell>{user.username}</TableCell>
            <TableCell>{user.email}</TableCell>
            <TableCell>{user.password}</TableCell>
            <TableCell>
              <Button variant='contained' style={{marginRight:10}} component = {Link} to={`/edit/${user.email}`}>Edit</Button>
              <Button variant='contained' color='secondary' onClick={() => deleteUser(user.email)}>Delete</Button>
            </TableCell>
          </TBody>
          ))
        }
      </TableBody>
    </StyledTable>
  )
}

const StyledTable = styled(Table)`
width:90%;
margin:30px auto;
border:5px solid black;
`
const THead = styled(TableRow)`
background:#000;
&>th{
  color:#fff;
  font-size:20px;
}
`

const TBody = styled(TableRow)`
& > td{
  font-size:15px;
  font-style:italic;
  transition:0.3s background ease-in;
}

td:hover{
  background:red;
}
`





export default AllUser
