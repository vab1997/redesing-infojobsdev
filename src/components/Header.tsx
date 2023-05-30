import Link from 'next/link'

export default function Header() {
  return (
    <header className='border-b border-t border-gray-800 flex items-center justify-center px-6 py-6 w-full'>
      <div className='flex items-center justify-between gap-10 py-2 max-w-6xl w-full md:justify-start'>
        <Link href='/' className='flex items-center justify-center gap-1'>
          <img 
            src='/images/logo-developers.webp'
            alt='logo InfoJobs'
            width='188'
            height='48'
            className='w-20 sm:w-32 h-auto hover:opacity-90'
          />
          <span className='italic text-white text-sm sm:text-md mt-[2px]'>Developers</span>
        </Link>
        <div className='flex mt-[2px]'>
          <nav className='flex'>
            <ul className='flex items-center justify-center gap-4 [&>*]:text-md [&>*]:text-gray-400 md:[&>*]:text-lg'>
              <li>
                <Link href='/' className='hover:text-gray-50'>
                  Home
                </Link>
              </li>
              <li>
                <Link href='/documentation' className='hover:text-gray-50'>
                  Documentation
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
