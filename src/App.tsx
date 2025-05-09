import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from '@tanstack/react-query'
import { data as stuff } from './dummy'

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
    queryFn: () => {
      return stuff
    },
  })
  if (isPending) {
    return <p>Pending</p>
  }
  if (isError) {
    return <p>Error</p>
  }
  return (
    <div className="font-main w-[1280px] h-[720px] bg-dark text-light">
      <p>Open Sans: 72</p>
      <p className="font-special">Raleway: 72</p>
      <p>{import.meta.env.VITE_TEST}</p>
      <p>{data.day}</p>
      <p>{data.temp}</p>
    </div>
  )
}

export default App
