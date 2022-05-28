import React,{useState} from 'react';
import {useUsers,useUser} from '../query-hooks/UseUser';
import {useIsFetching} from 'react-query'
type Props = {}

const User = (props: Props) => {
  const users = useUsers();
  const [selectedUser, setSelectedUser] = useState<null | number>(1);
  const user: user |any = useUser(selectedUser);
  const isFetching = useIsFetching();

  type user = {
    data: {
      data:userType
    }
    isSuccess:boolean
  }
  type userType = {
    name: string,
    id:number
  }
  console.log(user)
  return (
    <div>
      {isFetching ? <span style={{ position: 'absolute', top: '1rem', right: '1rem' }}>
        loading or fetching.. </span>:<span style={{ position: 'absolute', top: '1rem', right: '1rem' }}>
        loaded </span> }
      {users.isLoading && <p>Loading...</p>}
      {users.isError && <p>could not fetch Users...</p>}
      {users.isSuccess && <ul>
        {users?.data?.map((user:userType,i:number) => (
        <li key={i} onClick={()=>setSelectedUser(user.id)}>{user.name}</li>
      ))}
      </ul>}

      {user.isSuccess && <p>
        this is p text{user?.data?.data?.name}</p>}
    </div>
  )
}

export default User