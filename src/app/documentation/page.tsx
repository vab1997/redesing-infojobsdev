import Link from 'next/link'
import { ArrowRight } from '@/components/icons/ArrowRight'
import { Table } from '@/components/Table'
import { Thead } from '@/components/Thead'
import { Tbody } from '@/components/Tbody'
import { COLOR_METHOD } from '@/utils/constant'
import { data } from '../../../data/dataTableDoc'

export default async function DocPage() {

  return (
    <section className='flex flex-col items-center justify-center gap-4 py-16 w-full'>
      <div className='flex flex-col items-center justify-center max-w-6xl w-full'>
        {data.map((item, index) => (
          <div
            key={index}
            className='flex flex-col justify-center gap-6 pb-12 w-full'
          >
            <div className='flex flex-col  gap-2'>
              <h1 className='text-[#EE81C3] text-lg font-bold'>{item.title}</h1>
              <p className='text-gray-50'>{item.descriptionOperation}</p>
            </div>
            <Table>
              <Thead>
                <tr>
                  <th scope='col' className='px-6 py-3'>
                    Method
                  </th>
                  <th scope='col' className='px-6 py-3'>
                    Name
                  </th>
                  <th scope='col' className='px-6 py-3'>
                    Description
                  </th>
                  <th scope='col' className='px-6 py-3'>
                    <span className='sr-only'>doc</span>
                  </th>
                </tr>
              </Thead>
              <Tbody>
                {item.dataTable.map((item, index) => (
                  <tr key={index} className='bg-[#282A36] [&>*]:text-gray-50'>
                    <th className='text-center py-4'>
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
                      className='px-6 py-4 w-1/2 font-medium whitespace-nowrap'
                    >
                      {item.name}
                    </th>
                    <td className='px-6 py-4 w-1/2'>
                      {item.descriptionMethod}
                    </td>
                    <td className='px-6 py-4 w-1/2'>
                      <Link
                        href={`/documentation/operation/${item.method}=${item.name.replaceAll(
                          '/',
                          '-'
                        )}`}
                      >
                        <ArrowRight width={24} height={24} />
                      </Link>
                    </td>
                  </tr>
                ))}
              </Tbody>
            </Table>
          </div>
        ))}
      </div>
    </section>
  );
}
