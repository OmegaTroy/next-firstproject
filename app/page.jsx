import Users from "@/components/Users"
import Image from "next/image"

const fetchUsers = async()=>{
  const res = await fetch('https://reqres.in/api/users')
 const dato = await res.json()
 return dato.data 
}

export default async function IndexPage() {
  const users = await fetchUsers()
  return (
    <div>
      <Users users={users}/>
    </div> 
    )
}
