import Link from "next/link"
import { ArrowLeft } from "./icons/ArrowLeft"

export function ButtonBack({ href }: { href: string }) {
  return (
    <div className='flex justify-between w-full py-2'>
      <Link href={href} className='flex items-center gap-2 font-bold text-white text-md hover:underline md:text-lg hover:opacity-80'>
        <ArrowLeft width={32} height={32}/>
        Back to doc
      </Link>
    </div>
  )
}