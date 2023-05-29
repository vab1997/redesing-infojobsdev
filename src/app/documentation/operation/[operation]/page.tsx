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
  const methodUrl = splitOperation[0]
  const nameUrl = splitOperation[1]
  const endpoint = `${decodeURI(nameUrl.replaceAll('-', '/'))}`
  
  const dataEndpoint = dataInfoEndpoint.filter(endpointData => (endpointData.urlName === endpoint) && (endpointData.method === methodUrl))[0]
  const { urlName, method, tryIt, detailMethod, request, responseTable, errorCode, descriptionExample, requestURL, responeseOkExample, responeseErrorExample } = dataEndpoint
  
  return (
    <section className="flex items-center justify-center py-12 w-full">
      <div className="flex flex-col max-w-6xl w-full">
        <header className='flex flex-col items-center justify-center gap-4 px-6 border-b border-[#5386AB] pb-8'>
          <div className='flex flex-col items-center justify-center gap-4 md:flex-row'>
            <span className={`rounded px-4 py-2 text-3xl md:text-4xl ${COLOR_METHOD[method as keyof typeof COLOR_METHOD]}`}>{method}</span>
            <h1 className='text-xl sm:text-3xl md:text-4xl font-medium'>{urlName}</h1>
          </div>
          <p className='text-md md:text-xl'>{detailMethod}</p>
          {tryIt ? (
            <Link
              href={`/test-console/${urlName.replaceAll('/', '-')}`}
              className='flex items-center justify-center rounded border border-[#5386AB] bg-transparent text-[#5386AB] hover:bg-[#5386AB] hover:text-gray-50 font-bold text-md md:text-lg py-2 px-4'
              aria-label='Try endpoint'
              title='Try endpoint'
            >
              Try it!
            </Link>
          ) : (
              <p
              className='flex items-center justify-center rounded border border-[#5386AB] bg-transparent text-[#5386AB] py-2 px-4 font-bold text-md md:text-lg'
              >
                Coming soon!
              </p>
          )}
        </header>

        <div className='flex flex-col gap-2 justify-start px-6 py-6 border-b border-[#5386AB] pb-8'>
          <h1 className='text-4xl md:text-6xl font-medium text-[#5386AB] mb-4'>Request</h1>
          <div className='flex flex-col w-full gap-4 md:flex-row'>
            <div className='flex flex-col leading-4 w-full md:w-3/5'>
              <h2 className='text-gray-50 text-xl md:text-2xl font-medium mb-2 flex items-center w-full'>Resource URL:</h2>
              <span className='font-medium text-md md:text-xl text-gray-400 truncate pr-4'>{request.resourceURL}</span>
            </div>
            <div className='flex flex-col leading-8 w-full md:w-2/5'>
              <h2 className='text-xl md:text-2xl font-medium mb-2'>Security</h2>
              <p className='text-gray-50 text-md md:text-xl'>User Role: <span className='font-medium text-gray-400'>{request.security.user_role}</span></p>
              <p className='text-gray-50 text-md md:text-xl'>Scope: <span className='font-medium text-gray-400'>{request.security.scope}</span></p>
            </div>
          </div>
          <div className='flex flex-col gap-4 mt-4'>
            <h2 className='text-xl md:text-2xl font-medium'>Parameters</h2>
            {Array.isArray(request.parameters)
              ? (
                <>
                  <TableDetailEndpoint dataBody={request.parameters} />
                  {request.availableValues &&
                    (
                      <TableDetailEndpoint title='Available identifiers:' dataBody={request.availableValues} />
                    )
                  }
                </>
              )
              :
              (
                <span className='font-medium text-md md:text-xl text-gray-400'>{request.parameters}</span>
              )
            }
          </div>
          {(request.bodyExample !== '' || request.bodyRequest.length > 0) && (
            <div className='flex flex-col gap-8 mt-4'>
              <h2 className='text-2xl font-medium'>Body Request field</h2>
              <div className='border px-2 py-4 rounded border-[#5386AB]'>
                <pre className="text-gray-50 whitespace-pre-wrap overflow-auto px-2">
                  {responeseOkExample}
                </pre>
              </div>
              <TableDetailEndpoint dataBody={request.bodyRequest} />
            </div>
          )}
        </div>

        <div className='flex flex-col gap-2 justify-start px-6 py-6 border-b border-[#5386AB] pb-8'>
          <h1 className='text-4xl md:text-6xl font-medium text-[#5386AB] mb-4'>Response</h1>
          <h2 className='text-xl md:text-2xl font-medium'>Response fields</h2>
          {Array.isArray(responseTable) ? (
            <TableDetailEndpoint dataBody={responseTable} />
          ) : (
            <span className='font-medium text-md md:text-xl text-gray-400'>{responseTable}</span>
          )}
        </div>

        <div className='flex flex-col gap-2 justify-start px-6 py-6 border-b border-[#5386AB] pb-8'>
          <h1 className='text-4xl md:text-6xl font-medium text-[#5386AB] mb-4'>Error Codes</h1>
          {Array.isArray(errorCode) ? (
            <TableDetailEndpoint dataBody={errorCode} />
          ) : (
            <span className='font-medium text-md md:text-xl text-gray-50'>{errorCode}</span>
          )}
        </div>

        <div className='flex flex-col gap-2 justify-start px-6 py-6 border-b border-[#5386AB] pb-8'>
          <h1 className='text-4xl md:text-6xl font-medium text-[#5386AB]'>Examples</h1>
          <p className='text-md md:text-lg text-gray-50 mb-4'>{descriptionExample}</p>

          <div className='flex flex-col gap-4'>
            <h2 className='text-gray-50 text-xl md:text-2xl font-medium flex items-center w-full'>Request:</h2>
            <span className='font-medium text-md md:text-xl text-gray-400 truncate'>{requestURL}</span>

            <h2 className='text-gray-50 text-xl md:text-2xl font-medium mb-2 flex items-center w-full'>Respone:</h2>
            <div className='border px-2 py-4 rounded border-[#5386AB]'>
              <pre className="text-gray-50 whitespace-pre-wrap overflow-auto px-2">
                {responeseOkExample}
              </pre>
            </div>
          </div>

          {responeseErrorExample && (
            <div className='flex flex-col gap-4 mt-4'>
              <h2 className='text-gray-50 text-xl md:text-2xl font-medium flex items-center w-full'>Request:</h2>
              <span className='font-medium text-md md:text-xl text-gray-400 truncate'>{requestURL}</span>

              <h2 className='text-gray-50 text-xl md:text-2xl font-medium mb-2 flex items-center w-full'>Respone Error:</h2>
              <div className='border px-2 py-4 rounded border-[#5386AB] w-full'>
                <pre className="text-gray-50 whitespace-pre-wrap overflow-auto px-2">
                  {responeseErrorExample}
                </pre>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}