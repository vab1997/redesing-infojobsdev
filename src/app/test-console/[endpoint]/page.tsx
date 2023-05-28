import { FormOperation } from '@/components/FormOperation'
import { dataInfoEndpoint } from '../../../../data/dataInfoEndpoint'

export default async function TestConsole({ params }: { params: { endpoint: string } }) {
  const endpoint = `${decodeURI(params.endpoint.replaceAll('-', '/'))}`
  const findInfoEndpoint = dataInfoEndpoint.filter((data) => data.urlName === endpoint)[0]
  const urlApi = findInfoEndpoint.request.resourceURL

  return (
    <section className='flex items-center justify-center py-8 w-full'>
      <div className='flex flex-col items-center justify-center max-w-6xl w-full'>
        <section className='flex flex-col items-center justify-center gap-8 w-full'>
          <h1 className='text-4xl font-bold'>
            Test Console for endpoint: {endpoint}
          </h1>
          <div className='flex items-center flex-col gap-4 border border-[#5386AB] py-4 px-8 rounded w-3/4'>
            <h3 className='font-medium text-[#5386AB] text-lg text-start w-full'>Operation</h3>

            <div className='flex items-center justify-center w-full'>
              <FormOperation endpoint={urlApi} method={findInfoEndpoint.method} route={params.endpoint} />
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}
