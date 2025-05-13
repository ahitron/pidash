import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from '@tanstack/react-query'
import { getData } from './datatools'
import Current from './Current'
import Hourly from './Hourly'
import Daily from './Daily'

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <PiDash />
    </QueryClientProvider>
  )
}

function PiDash() {
  const { isPending, isError, data } = useQuery({
    queryKey: ['weatherData'],
    queryFn: () => getData(5),
  })
  if (isPending) {
    return <p>Loading data...</p>
  }
  if (isError) {
    return <p>Error</p>
  }
  const { updated, current, daily, hourly } = data
  return (
    <div className="flex flex-row h-screen text-center font-main text-lg">
      <div className="flex-1 h-full">
        <Current updated={updated} current={current} />
      </div>
      <div className="flex-3 flex flex-col h-full justify-evenly">
        <div className="">
          <Hourly hours={hourly} />
        </div>
        <div className="">
          <Daily days={daily} />
        </div>
      </div>
    </div>
  )
}

export default App
