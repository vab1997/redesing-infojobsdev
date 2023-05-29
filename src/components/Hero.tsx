import Link from 'next/link'
import { NextIcon } from '@/components/icons/NextIcon'

export function Hero() {
  return (
    <section className='max-w-6xl w-full py-24'>
      <div className='flex flex-col items-center justify-between gap-6 w-full lg:flex-row'>
        <div className='flex flex-col gap-4 w-full lg:w-[600px]'>
          <h1 className='text-4xl font-extrabold leading-tight sm:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-[#5386AB] to-gray-50 to-90%'>
            Build a job app for {'>'}2.5 million users
          </h1>
          <p className='text-start'>
            Get started with InfoJobs API and create your web, mobile or
            desktop app
          </p>

          <div className='flex items-center justify-center gap-4 bg-[#282A36] rounded py-8 px-6 border border-[#5386AB] flex-row'>
            <Link href='/documentation#Job Search' className='px-4 py-2 rounded text-gray-50 bg-zinc-400/5 hover:bg-white/10 transition border-white/10 text-sm md:text-md'>
              Job search
            </Link>
            <Link href='/documentation#Job Application and Tracking' className='px-4 py-2 rounded text-gray-50 bg-zinc-400/5 hover:bg-white/10 transition border-white/10 text-sm md:text-md'>
              Job application & tracking
            </Link>
            <Link href='/documentation#CV Visualization and Edition' className='px-4 py-2 rounded text-gray-50 bg-zinc-400/5 hover:bg-white/10 transition border-white/10 text-sm md:text-md'>
              CV content & edition
            </Link>
          </div>
        </div>

        <div className='flex items-center justify-center max-w-[400px] lg:w-full'>
          <div className='flex flex-col gap-2'>
            <Link
              href='/'
              className='flex justify-center flex-col gap-1 px-4 py-2 rounded text-gray-50 bg-[#282A36] hover:bg-[#282A36]/50 transition border-white/10'
            >
              <span className='text-2xl sm:text-3xl'>Start creating your app now</span>
              <span className='text-md'>
                Login with your InfoJobs account
              </span>
            </Link>
            <span className='flex'>
              <Link
                href='/documentation'
                className='flex items-center bg-transparent text-lg text-[#5386AB] hover:text-[#126492]'
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
    </section>
  )
}