import React from 'react'
import {useCreateUser} from '../query-hooks/UseUser'
type Props = {}

const CreateUser = (props: Props) => {
  const mutation = useCreateUser()
  return (
    <div>CreateUser<br />
      <button type="button"
    onClick={()=>mutation.mutate({name:'md mohi',age:20})}>create user on click</button></div>
  )
}

export default CreateUser