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
    { path: '/my-account', element: <MyAccount /> },
    { path: '/my-order', element: <MyOrder /> },
    { path: '/my-orders', element: <MyOrders /> },
    { path: '/my-orders/last', element: <MyOrder /> },
    { path: '/sign-in', element: <SignIn /> },
    { path: '*', element: <NotFound /> },
  ])

  return routes
}

const App = () => {

  return (
    <ShoppingCartProvider>
      <ProductDetailProvider>
        <CheckoutSideMenuProvider>
          <BrowserRouter>
            <AppRoutes />
            <Navbar />
          </BrowserRouter>
        </CheckoutSideMenuProvider>
      </ProductDetailProvider>
    </ ShoppingCartProvider >
  )
}

export { App }