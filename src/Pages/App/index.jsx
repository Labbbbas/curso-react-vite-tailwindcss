import Home from '../Home'
import MyAccount from '../MyAccount'
import MyOrder from '../MyOrder'
import MyOrders from '../MyOrders'
import SignIn from '../SignIn'
import NotFound from '../NotFound'
import './App.css'

function App() {

  return (
    <>
      <div className='bg-red-100'>
        Hola Mundo!
        <Home />
        <MyAccount />
        <MyOrder />
        <MyOrders />
        <SignIn />
        <NotFound />
      </div>
    </>
  )
}

export default App
