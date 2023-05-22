import Link from "next/link"

export default function Header() {
  return (
    <header className='border-b border-t border-gray-800 flex items-center justify-center px-8 py-6 w-full'>
      <div className="flex items-center justify-center gap-8 py-2 max-w-6xl w-full">
        <div className="flex items-center justify-center gap-1 px-4">
          <img src='/images/logo-developers.webp' className="w-24 h-auto" />
          <span className="italic text-white text-md mt-[2px]">Developers</span>
        </div>
        <div className="flex w-full mt-[2px]">
          <nav className="flex">
            <ul className="flex items-center justify-center gap-4 [&>*]:text-white">
              <li>
                <Link href='/' className='hover:opacity-70'>
                  Home
                </Link>
              </li>
              <li>
                <Link href='/documentation' className='hover:opacity-70'>
                  Documentation
                </Link>    
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <div className='flex items-center justify-center'>
        <Link href="/login" className="text-white bg-blue-600 rounded px-4 py-2 hover:opacity-90 hover:border-b-gray-500">
          Login
        </Link>
      </div>
      </header>
  )
}