import { ButtonBack } from "@/components/ButtonBack"

export default function LayoutTestConsole({ children }: { children: React.ReactNode }) {
  return (
    <main className='flex flex-col items-center justify-center w-full pt-4 px-6'>
      <div className='flex flex-col items-center justify-center w-full max-w-6xl'>
        <ButtonBack href='/documentation' />
        {children}
      </div>
    </main>
  )
}