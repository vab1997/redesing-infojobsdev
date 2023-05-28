import { revalidatePath } from "next/cache"
import { COLOR_METHOD } from "@/utils/constant"
import { ButtonSubmit } from "@/components/ButtonSubmit"
import { FormOperationProps, PrevProps, PrevUrl } from "@/types"
import { TOKEN_API } from "@/utils/config"

let jsonResult: any = []
let prevProps: PrevProps = { endpoint: '', method: '' }
let prevUrl: PrevUrl = { prev: '' }

export function FormOperation({ endpoint, method }: FormOperationProps) {
  async function handleSubmit (formData: FormData) {
    'use server'

    const url = formData.get('url')
    if (!url) return 'url is required' 

    url !== prevUrl.prev ? jsonResult = [] : null
    prevUrl = { prev: String(url) }

    const dataResult = await fetch(String(url), { 
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Access-Control-Allow-Origin': '*',
        Authorization: `Basic ${TOKEN_API}}`
      }
    })
    const json = await dataResult.json()
    jsonResult.push(json)
    
    revalidatePath('/test-console/[endpoint]')
  }

  const validationChangeEndpoint = prevProps.endpoint !== endpoint && prevProps.method !== method
  if (validationChangeEndpoint) {
    jsonResult = []
    prevProps = { endpoint, method }
  }

  return (
    <div className="flex flex-col items-center justify-center gap-4 w-full">
      <form
        action={handleSubmit}
        className="flex items-center justify-between gap-2 w-full"
      >
        <span className={`rounded text-md p-2 font-medium border border-current ${COLOR_METHOD[method as keyof typeof COLOR_METHOD]}`}>{method}</span>
        <input
          className="w-full bg-transparent border border-[#EE81C3] rounded text-gray-50 px-4 py-2"
          type='text'
          name="url"
          defaultValue={endpoint}
        />
        <ButtonSubmit />
      </form>

      <div className="rounded border border-[#EE81C3] px-4 py-6  w-full">
        <h3 className="font-medium text-[#EE81C3] text-lg text-start w-full">Execution Result</h3>
        <div className="h-auto">
          {jsonResult[0] ? (
            <pre className="text-gray-50 whitespace-pre-wrap overflow-auto px-2">
              {JSON.stringify(jsonResult[0], null, 2)}
            </pre>
          ) : (
            <p className="font-medium text-md text-gray-50">
              Welcome to InfoJobs API,
              Your response result will be displayed here after execution. Choose an operation and send the request!
            </p>
          )}
        </div>
      </div>
    </div>
  )
}