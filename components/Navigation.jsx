import Link from "next/link"

function Navigation() {
  return (
    <nav className="w-full h-12 px-4 text-white bg-zinc-950 flex items-center justify-between">
        <Link href='/' className="text-lg ">My first app</Link>
        <ul className="flex gap-4 font-medium">
            <li>
                <Link href="/">home</Link>
            </li>
        </ul>
    </nav>
  )
}

export default Navigation