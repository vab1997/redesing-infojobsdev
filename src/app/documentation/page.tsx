import Link from 'next/link'
import { ArrowRight } from '@/components/icons/ArrowRight'
import { Table } from '@/components/Table'
import { Thead } from '@/components/Thead'
import { Tbody } from '@/components/Tbody'
import { COLOR_METHOD } from '@/utils/constant'
import { data } from '../../../data/dataTableDoc'

export default async function DocPage() {
  return (
    <main className='flex flex-col items-center justify-center gap-4 py-16 px-6 w-full'>
      <section className='flex flex-col items-center justify-center max-w-6xl w-full'>
        {data.map((item, index) => (
          <div
            key={index}
            className='flex flex-col justify-center gap-6 pb-12 w-full'
          >
            <div className='flex flex-col gap-2'>
              <h1 className='text-[#5386AB] text-2xl font-bold'>{item.title}</h1>
              <p className='text-gray-50'>{item.descriptionOperation}</p>
            </div>
            <Table>
              <Thead>
                <tr className='[&>*]:px-3 [&>*]:py-1.5 md:[&>*]:px-6 md:[&>*]:py-3'>
                  <th scope='col'>
                    Method
                  </th>
                  <th scope='col'>
                    Name
                  </th>
                  <th scope='col'>
                    Description
                  </th>
                  <th scope='col'>
                    <span className='sr-only'>doc</span>
                  </th>
                </tr>
              </Thead>
              <Tbody>
                {item.dataTable.map((item, index) => (
                  <tr key={index} className='bg-[#282A36] [&>*]:text-gray-50 [&>*]:px-3 [&>*]:py-1.5 md:[&>*]:px-6 md:[&>*]:py-3'>
                    <th className='text-center'>
                      <span
                        className={`${
                          COLOR_METHOD[
                            item.method as keyof typeof COLOR_METHOD
                          ]
                        } rounded text-sm px-2 py-1 font-medium`}
                      >
                        {item.method}
                      </span>
                    </th>
                    <th
                      scope='row'
                      className='w-1/2 font-medium whitespace-nowrap text-sm md:text-md'
                    >
                      {item.name}
                    </th>
                    <td className='w-1/2'>
                      {item.descriptionMethod}
                    </td>
                    <td className='w-1/2 px-2'>
                      <Link
                        href={`/documentation/operation/${item.method}=${item.name.replaceAll(
                          '/',
                          '-'
                        )}`}
                        aria-label='Go to operation docs'
                        title='Go to operation docs'
                      >
                        <ArrowRight width={32} height={32} />
                      </Link>
                    </td>
                  </tr>
                ))}
              </Tbody>
            </Table>
          </div>
        ))}
      </section>
    </main>
  )
}
