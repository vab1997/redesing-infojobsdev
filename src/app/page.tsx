import { Hero } from '@/components/Hero';
import { Instruction } from '@/components/Instruction'

export default function Home() {
  return (
    <main className='flex flex-col items-center justify-center w-full'>
      <Hero />
      <Instruction />
    </main>
  )
}
