export function Table({ children, title = '' }: { children: React.ReactNode, title?: string }) {
  return (
    <div className='relative overflow-x-auto w-full'>
      {title !== '' && <h2 className='text-xl font-medium mb-4'>{title}</h2>}
      <table className='bg-tranparent w-full text-sm text-left text-gray-50'>
        {children}
      </table>
    </div>
  )
}