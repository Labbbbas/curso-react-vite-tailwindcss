import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";
import { CiShoppingCart } from "react-icons/ci";
import { CheckoutSideMenuContext } from "../../Context";

const Navbar = () => {

    const {
        counter
    } = useContext(ShoppingCartContext)

    const {
        toggleCheckoutSideMenu
    } = useContext(CheckoutSideMenuContext)

    const activeItem = ({ isActive }) =>
        isActive ? 'underline underline-offset-4' : undefined

    return (
        <nav className="flex justify-between items-center fixed z-10 top-0 w-full py-5 px-8 text-sm font-light">
            <ul className="flex items-center gap-3">
                <li className="font-semibold text-lg">
                    <NavLink to='/'>
                        Shopi
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/'
                        className={activeItem}
                    >
                        All
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/clothes'
                        className={activeItem}
                    >
                        Clothes
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/electronics'
                        className={activeItem}
                    >
                        Electronics
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/furniture'
                        className={activeItem}
                    >
                        Furniture
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/shoes'
                        className={activeItem}
                    >
                        Shoes
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/miscellaneous'
                        className={activeItem}
                    >
                        Miscellaneous
                    </NavLink>
                </li>
            </ul>

            <ul className="flex items-center gap-3">
                <li className="text-black/60">
                    keegan@gmail.com
                </li>
                <li>
                    <NavLink
                        to='/my-orders'
                        className={activeItem}
                    >
                        My Orders
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/my-account'
                        className={activeItem}
                    >
                        My Account
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/sign-in'
                        className={activeItem}
                    >
                        Sign In
                    </NavLink>
                </li>
                <li 
                    className='flex gap-0.5 items-center justify-center cursor-pointer'
                    onClick={() => toggleCheckoutSideMenu()}
                >
                    <CiShoppingCart
                        className='text-xl'
                    />
                    <div className='select-none'>{counter}</div>
                </li>
            </ul>
        </nav>
    )
}

export { Navbar };