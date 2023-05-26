export function Thead({ children }: { children: React.ReactNode | React.ReactNode[] }) {
  return (
    <thead className='text-xs uppercase bg-[#282A36] text-gray-50 border-b border-gray-600'>
      {children}
    </thead>
  )
}