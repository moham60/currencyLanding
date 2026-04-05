import { createHashRouter, RouterProvider } from 'react-router-dom'

import { CurrencyLanding } from '@/components/currency-landing/CurrencyLanding'
import { NotFoundPage } from '@/components/NotFoundPage'

const router = createHashRouter([
  {
    path: '/',
    element: <CurrencyLanding />,
  },
  
  {
    path: '*',
    element: <NotFoundPage />,
  },
  
])

function App() {
  return <RouterProvider router={router} />
}

export default App
