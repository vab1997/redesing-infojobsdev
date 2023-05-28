import { ButtonBack } from "@/components/ButtonBack"

export default function LayoutTestConsole({ children }: { children: React.ReactNode }) {
  return (
    <section className='flex flex-col items-center justify-center w-full pt-4'>
      <div className='flex flex-col items-center justify-center w-full max-w-6xl'>
        <ButtonBack href='/documentation' />
        {children}
      </div>
    </section>
  )
}