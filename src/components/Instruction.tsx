import Link from "next/link"
import { LoginIcon } from "@/components/icons/LoginIcon"
import { PlayIcon } from "./icons/PlayIcon"
import { ExperimentIcon } from "./icons/ExperimentIcon"
import { ChampIcon } from "./icons/ChampIcon"

const INSTRUCTION = {
  1: {
    title: '1. Log in',
    description: 'Log in to the developer site (use your InfoJobs account) and register your application to get the developer credentials',
    icon: LoginIcon
  },
  2: {
    title: '2. Play with the API',
    description: 'Test the operations you want to use using our test console.',
    icon: ExperimentIcon
  },
  3: {
    title: '3. Start developing',
    description: 'Start developing your app and use our documentation to see how to interact with InfoJobs',
    icon: PlayIcon
  },
  4: {
    title: 'You\'re done',
    description: 'Your users can now use your app. We can help you get it promoted.',
    icon: ChampIcon
  }
}

export function Instruction() {
  return (
    <section className="flex flex-col gap-4 pb-8 max-w-6xl w-full">
      <h1 className="text-4xl font-bold text-gray-50">Use your talent </h1>
      <p className="text-gray-50">Feel motivated? Have an idea already? Just follow the next steps to start working with our API.</p>
      <div className="flex flex-col justify-center items-center gap-8 mt-8 w-full md:flex-row">
        {Object.entries(INSTRUCTION).map(([key, value]) => (
          <article key={key} className="flex flex-col justify-start w-3/4 lg:w-1/4 gap-2">
            <header className="flex flex-col pb-8 h-36">
              <h1 className="text-[#5386AB] font-medium mb-2">{value.title}</h1>
              <p className="text-gray-50 leading-6">
                {value.description}
              </p>
            </header>
            <span className="flex items-center justify-center">
              <value.icon width={80} height={80}/>
            </span>
          </article>
        ))}
      </div>
    </section>
  )
}