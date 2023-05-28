'use client'

import { NextIcon } from "@/components/icons/NextIcon"
import { experimental_useFormStatus as useFormStatus } from "react-dom"
import { Loading } from "@/components/icons/Loading"

export function ButtonSubmit() {
  const { pending } = useFormStatus()

  return (
    <button
      className='flex items-center justify-center rounded border border-[#5386AB] bg-transparent text-[#5386AB] hover:bg-[#5386AB] hover:text-gray-50 py-2 px-4 w-28'
      type='submit'
    >
      {pending
        ? (
         <Loading />
        )
        : (
        <span className="flex items-center justify-center gap-1">
          Send
          <NextIcon width={16} height={16}/>
        </span>
        )
      }
    </button>
  )
}