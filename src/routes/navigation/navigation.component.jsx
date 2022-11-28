import { Fragment, useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';

import {ReactComponent as CrwnLogo} from '../../assets/crown.svg';
import {UserContext} from '../../context/user.context';

import './navigation.styles.scss';

const Navigaton = () => {

    const logOutHandler = () => {
        console.log('Logout Handler');
        setCurrentUser(null);
    }   

    const {currentUser, setCurrentUser} = useContext(UserContext);

    return (
        <Fragment>
            <div className='navigation'>
                <Link className='logo-container' to='/'>
                    <CrwnLogo className='logo' />
                </Link>
                <div className='nav-links-container'>
                    <Link className='nav-link' to='/shop'>
                        SHOP
                    </Link>
                    {currentUser ? (<span className='nav-link' onClick={logOutHandler}>
                        SIGN OUT
                    </span>): (<Link className='nav-link' to='/auth'>
                        SIGN IN
                    </Link>)}
                    

                    
                </div>

            </div>
            <Outlet />
        </Fragment>
    )
}

export default Navigaton;