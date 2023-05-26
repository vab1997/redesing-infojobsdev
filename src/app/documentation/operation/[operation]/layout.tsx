import Link from "next/link"

export default function LayoutOperationPage({ children }: { children: React.ReactNode }) {
  return (
    <section className='flex flex-col items-center justify-center w-full pt-4'>
      <div className='flex flex-col items-center justify-center w-full max-w-6xl'>
        <header className='flex justify-between w-full py-2'>
          <Link href='/documentation' className='flex items-center gap-2 font-bold text-white text-md hover:underline md:text-lg hover:opacity-80'>
            Back to doc
          </Link>
        </header>

        {children}
      </div>
    </section>
  )
}