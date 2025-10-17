import { useRoutes, BrowserRouter } from 'react-router-dom'
import { Home } from '../Home'
import { MyAccount } from '../MyAccount'
import { MyOrder } from '../MyOrder'
import { MyOrders } from '../MyOrders'
import { SignIn } from '../SignIn'
import { NotFound } from '../NotFound'
import { Navbar } from '../../Components/Navbar'
import { ShoppingCartProvider, ProductDetailProvider, CheckoutSideMenuProvider } from '../../Context'
import './App.css'

const AppRoutes = () => {
  let routes = useRoutes([
    { path: '/', element: <Home /> },
    // Para filtrar por categoría
    { path: '/:category', element: <Home />},
    { path: '/my-account', element: <MyAccount /> },
    { path: '/my-order', element: <MyOrder /> },
    { path: '/my-orders', element: <MyOrders /> },
    { path: '/my-orders/last', element: <MyOrder /> },
    { path: '/my-orders/:id', element: <MyOrder /> },
    { path: '/sign-in', element: <SignIn /> },
    { path: '*', element: <NotFound /> },
  ])

  return routes
}

const App = () => {
  // React Router espera basename SIN / final
  // Lo recortamos por si viene con /
  const base = import.meta.env.BASE_URL.replace(/\/$/, '')

  return (
    <ShoppingCartProvider>
      <ProductDetailProvider>
        <CheckoutSideMenuProvider>
          <BrowserRouter basename={base}>
            <AppRoutes />
            <Navbar />
          </BrowserRouter>
        </CheckoutSideMenuProvider>
      </ProductDetailProvider>
    </ ShoppingCartProvider >
  )
}

export { App }