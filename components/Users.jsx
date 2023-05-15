'use client';
import { useRouter } from "next/navigation";


function Users({users}) {
  const router = useRouter() 
  return (
    <div className='flex border border-neutral-500 m-10 flex-col'>
        {users.map(user=>(
        <div className="border cursor-pointer border-neutral-500 flex justify-between p-3 hover:bg-zinc-800" key={user.id}
        onClick={()=>{
            router.push(`/users/${user.id}`)
        }}
        >
          <div className="flex flex-col justify-center">
          <h2 className="text-2xl">{user.first_name} {user.last_name}</h2>
          <p className="text-lg text-slate-300">{user.email}</p>
          </div>
          <img className="rounded-full border-2 border-pink-600" src={user.avatar} alt={user.email}/>          
        </div>
      ))}
    </div>
  )
}

export default Users