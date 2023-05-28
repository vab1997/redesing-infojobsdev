import Link from "next/link"
import { NextIcon } from "./icons/NextIcon"

export function Hero() {
  return (
    <div className='max-w-6xl w-full py-24'>
      <div className='flex items-center justify-between w-full'>
        <div className='flex flex-col gap-4 w-[600px]'>
          <h1 className='text-5xl font-extrabold leading-tight text-gray-50'>
            Build a job app for {'>'}2.5 million users
          </h1>
          <p className='text-start'>
            Get started with InfoJobs API and create your web, mobile or
            desktop app
          </p>

          <div className='flex items-center justify-center gap-4 bg-[#282A36] rounded py-8 px-6 border border-[#5386AB]'>
            <button className='px-4 py-2 rounded text-gray-50 bg-zinc-400/5 hover:bg-white/10 transition border-white/10'>
              Job search
            </button>
            <button className='px-4 py-2 rounded text-gray-50 bg-zinc-400/5 hover:bg-white/10 transition border-white/10'>
              Job application & tracking
            </button>
            <button className='px-4 py-2 rounded text-gray-50 bg-zinc-400/5 hover:bg-white/10 transition border-white/10'>
              CV content & edition
            </button>
          </div>
        </div>

        <div className='flex items-center justify-center max-w-[400px] w-full'>
          <div className='flex flex-col gap-2'>
            <Link
              href='/'
              className='flex justify-center flex-col gap-1 px-4 py-2 rounded text-gray-50 bg-[#282A36] hover:bg-[#282A36]/50 transition border-white/10'
            >
              <span className='text-3xl'>Start creating your app now</span>
              <span className='text-md'>
                Login with your InfoJobs account
              </span>
            </Link>
            <span className='flex'>
              <Link
                href='/documentation'
                className='flex items-center bg-transparent text-lg text-[#5386AB] hover:opacity-90'
              >
                or{' '}
                <span className='flex gap-1 items-center justify-center underline underline-offset-4 ml-1'>
                  test the API first <NextIcon width={12} height={12} />
                </span>
              </Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}