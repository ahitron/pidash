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
    queryFn: () => getData(3),
  })
  if (isPending) {
    return <p>Loading data...</p>
  }
  if (isError) {
    return <p>Error</p>
  }
  const { updated, current, daily, hourly } = data
  return (
    <div>
      <div>
        <Current updated={updated} current={current} />
      </div>
      <div>
        <div>
          <Daily days={daily} />
        </div>
        <div>
          <Hourly hours={hourly} />
        </div>
      </div>
    </div>
  )
}

export default App
