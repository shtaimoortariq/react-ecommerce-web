import { Fragment, useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { selectCurrentUser } from '../../store/user/user.selector';
import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';

import { signOutUser } from "../../utils/firebase/firebase.utils";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";
import { CartContext } from '../../context/cart.context';
import { NavigationContainer, LogoContainer, NavLinksContainer, NavLink } from './navigation.styles';

const Navigaton = () => {

    // const { currentUser } = useContext(UserContext);
    const currentUser = useSelector(selectCurrentUser);
    const { isCartOpen } = useContext(CartContext);
    return (
        <Fragment>
            <NavigationContainer>
                <LogoContainer to='/'>
                    <CrwnLogo className='logo' />
                </LogoContainer>
                <NavLinksContainer>
                    <NavLink to='/shop'>
                        SHOP
                    </NavLink>
                    {currentUser ? (<NavLink as='span' onClick={signOutUser}>
                        SIGN OUT
                    </NavLink>) : (<NavLink to='/auth'>
                        SIGN IN
                    </NavLink>)}
                    <CartIcon />
                </NavLinksContainer>
                {isCartOpen && <CartDropdown />}
            </NavigationContainer>
            <Outlet />
        </Fragment>
    )
}

export default Navigaton;