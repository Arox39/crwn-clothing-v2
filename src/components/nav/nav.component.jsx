import "./nav.style.scss"

import { Fragment } from "react";
import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';

import { Link, Outlet } from "react-router-dom";


const Nav = () => {
    return (
        <Fragment>
            <nav className="nav">
                <Link to="/" className="logo-container">
                    <CrwnLogo className="logo" />
                </Link>
                <div className="nav-links">
                    <Link to="/shop">SHOP</Link>
                    <Link to="/sign-in">SIGN IN</Link>
                </div>
            </nav>
            <Outlet/>
        </Fragment>
        )
}


export default Nav