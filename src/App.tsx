import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from '@tanstack/react-query'
import { getData } from './datatools'
import Current from './Current'

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
    queryFn: getData,
  })
  if (isPending) {
    return <p>Pending</p>
  }
  if (isError) {
    return <p>Error</p>
  }
  const { current } = data
  return (
    <div>
      <Current {...current} />
    </div>
  )
}

export default App
