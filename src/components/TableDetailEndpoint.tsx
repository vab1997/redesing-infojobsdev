import { Table } from '@/components/Table'
import { Tbody } from '@/components/Tbody'
import { Thead } from '@/components/Thead'
import { DataBody } from '@/types'

export function TableDetailEndpoint({ title, dataBody }: { title?: string, dataBody: DataBody[] }) {
  return (
    <Table title={title}>
      <Thead>
        <tr>
          <th scope='col' className='px-6 py-3'>
            Name
          </th>
          <th scope='col' className='px-6 py-3'>
            Description
          </th>
        </tr>
      </Thead>
      <Tbody>
        {dataBody.map((item, index) => (
          <tr key={index} className='bg-[#282A36] [&>*]:text-gray-50'>
            <th
              scope='row'
              className='px-6 py-4 w-1/2 font-medium whitespace-nowrap'
            >
              {item.name || item.code}
            </th>
            <td className='px-6 py-4 w-1/2'>
              {item.description}
            </td>
          </tr>
        ))}
      </Tbody>
    </Table>
  )
}