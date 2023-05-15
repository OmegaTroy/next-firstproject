const getUser= async(id)=>{
  const res = await fetch(`https://reqres.in/api/users/${id}`)
  const data = await res.json()
  return data.data
}

async function UsersPage({params}) {
  console.log(params)
  const user = await getUser(params.id)

  return (
    <div className="flex justify-center items-center flex-col my-10">
      <div className="border-2 border-slate-400 bg-stone-800 rounded-md w-80 h-96 flex justify-evenly flex-col shadow-xl shadow-zinc-800 items-center">
        <img src={user.avatar} alt={user.email} className="w-40 rounded-lg"/>
        <div>
          <h3 className="font-medium text-2xl">{user.id} {user.first_name} {user.last_name}</h3>
          <p className="text-xl text-zinc-400">{user.email}</p>
        </div>
      </div>
    </div>
  )
}

export default UsersPage