import Link from 'next/link'
import { TableDetailEndpoint } from '@/components/TableDetailEndpoint'
import { dataInfoEndpoint } from '../../../../../data/dataInfoEndpoint'

const COLOR_METHOD = {
  GET: 'bg-green-500/30 text-green-500',
  PUT: 'bg-yellow-500/30 text-yellow-500',
  POST: 'bg-blue-500/30 text-blue-500',
  DELETE: 'bg-red-500/30 text-red-500',
}

export default function Operation({ params }: { params: { operation: string } }) {
  const splitOperation = params.operation.split('%3D')
  const method = splitOperation[0]
  const nameUrl = splitOperation[1]
  const endpoint = `${decodeURI(nameUrl.replaceAll('-', '/'))}`
  
  const dataEndpoint = dataInfoEndpoint.filter(endpointData => (endpointData.urlName === endpoint) && (method === endpointData.method))[0]
  
  return (
    <section className="flex items-center justify-center py-12 w-full">
      <div className="flex flex-col max-w-6xl w-full">
        <header className='flex flex-col items-center justify-center gap-4 px-6 border-b border-[#EE81C3] pb-8'>
          <div className='flex items-center justify-center gap-4'>
            <span className={`rounded px-4 py-2 text-4xl ${COLOR_METHOD[dataEndpoint.method as keyof typeof COLOR_METHOD]}`}>{dataEndpoint.method}</span>
            <h1 className='text-4xl font-medium'>{dataEndpoint.urlName}</h1>
          </div>
          <h3 className='text-xl'>{dataEndpoint.detailMethod}</h3>
          <Link
            href={`/test-console/${dataEndpoint.urlName.replaceAll('/', '-')}`}
            className='flex items-center justify-center rounded border border-[#EE81C3] bg-transparent text-[#EE81C3] hover:bg-[#EE81C3] hover:text-gray-50 py-2 px-4'
          >
            Try it
          </Link>
        </header>

        <div className='flex flex-col gap-2 justify-start px-6 py-6 border-b border-[#EE81C3] pb-8'>
          <h1 className='text-6xl font-medium text-[#EE81C3] mb-4'>Request</h1>
          <section className='flex w-full'>
            <div className='flex flex-col leading-4 w-3/5'>
              <h2 className='text-gray-50 text-2xl font-medium mb-2 flex items-center w-full'>Resource URL:</h2>
              <span className='font-medium text-xl text-gray-400 truncate pr-4'>{dataEndpoint.request.resourceURL}</span>
            </div>
            <div className='flex flex-col leading-4 w-2/5'>
              <h2 className='text-2xl font-medium mb-2'>Security</h2>
              <p className='text-gray-50 text-xl'>User Role: <span className='font-medium text-gray-400'>{dataEndpoint.request.security.user_role}</span></p>
              <p className='text-gray-50 text-xl'>Scope: <span className='font-medium text-gray-400'>{dataEndpoint.request.security.scope}</span></p>
            </div>
          </section>
          <div className='flex flex-col gap-8 mt-4'>
            <h2 className='text-2xl font-medium'>Parameters</h2>
            {Array.isArray(dataEndpoint.request.parameters)
              ? (
                <>
                  <TableDetailEndpoint dataBody={dataEndpoint.request.parameters} />
                  {dataEndpoint.request.availableValues &&
                    (
                      <TableDetailEndpoint title='Available identifiers:' dataBody={dataEndpoint.request.availableValues} />
                    )
                  }
                </>
              )
              :
              (
                <span className='font-medium text-xl text-gray-400'>{dataEndpoint.request.parameters}</span>
              )
            }
          </div>
          {(dataEndpoint.request.bodyExample !== '' || dataEndpoint.request.bodyRequest.length > 0) && (
            <div className='flex flex-col gap-8 mt-4'>
              <h2 className='text-2xl font-medium'>Body Request field</h2>
              <div className='border px-2 py-4 rounded border-[#EE81C3]'>
                <pre className="text-gray-50 whitespace-pre-wrap overflow-auto px-2">
                  {dataEndpoint.responeseOkExample}
                </pre>
              </div>
              <TableDetailEndpoint dataBody={dataEndpoint.request.bodyRequest} />
            </div>
          )}
        </div>

        <div className='flex flex-col gap-2 justify-start px-6 py-6 border-b border-[#EE81C3] pb-8'>
          <h1 className='text-6xl font-medium text-[#EE81C3] mb-4'>Response</h1>
          <h2 className='text-2xl font-medium'>Response fields</h2>
          {Array.isArray(dataEndpoint.responseTable) ? (
            <TableDetailEndpoint dataBody={dataEndpoint.responseTable} />
          ) : (
            <span className='font-medium text-xl text-gray-400'>{dataEndpoint.responseTable}</span>
          )}
        </div>

        <div className='flex flex-col gap-2 justify-start px-6 py-6 border-b border-[#EE81C3] pb-8'>
          <h1 className='text-6xl font-medium text-[#EE81C3] mb-4'>Error Codes</h1>
          {Array.isArray(dataEndpoint.errorCode) ? (
            <TableDetailEndpoint dataBody={dataEndpoint.errorCode} />
          ) : (
            <span className='font-medium text-xl text-gray-400'>{dataEndpoint.errorCode}</span>
          )}
        </div>

        <div className='flex flex-col gap-2 justify-start px-6 py-6 border-b border-[#EE81C3] pb-8'>
          <h1 className='text-6xl font-medium text-[#EE81C3]'>Examples</h1>
          <h3 className='text-lg text-gray-50 mb-4'>{dataEndpoint.descriptionExample}</h3>

          <div className='flex flex-col gap-4'>
            <h2 className='text-gray-50 text-2xl font-medium flex items-center w-full'>Request:</h2>
            <span className='font-medium text-xl text-gray-400'>{dataEndpoint.requestURL}</span>

            <h2 className='text-gray-50 text-2xl font-medium mb-2 flex items-center w-full'>Respone:</h2>
            <div className='border px-2 py-4 rounded border-[#EE81C3]'>
              <pre className="text-gray-50 whitespace-pre-wrap overflow-auto px-2">
                {dataEndpoint.responeseOkExample}
              </pre>
            </div>
          </div>

          {dataEndpoint.responeseErrorExample && (
            <div className='flex flex-col gap-4 mt-4'>
              <h2 className='text-gray-50 text-2xl font-medium flex items-center w-full'>Request:</h2>
              <span className='font-medium text-xl text-gray-400'>{dataEndpoint.requestURL}</span>

              <h2 className='text-gray-50 text-2xl font-medium mb-2 flex items-center w-full'>Respone Error:</h2>
              <div className='border px-2 py-4 rounded border-[#EE81C3] w-full'>
                <pre className="text-gray-50 whitespace-pre-wrap overflow-auto px-2">
                  {dataEndpoint.responeseErrorExample}
                </pre>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}