import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
    const [loginBtnName, setLoginBtnName] = useState("Login");
    const onlineStatus = useOnlineStatus();

    function onClickLoginBtn() {
        setLoginBtnName(loginBtnName == "Login" ? "Logout" : "Login");
    }

    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={LOGO_URL} />
            </div>
            <div className="nav-items">
                <ul>
                    <li>
                        Online Status: {onlineStatus ? "🟢" : "🔴"}
                    </li>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About Us</Link></li>
                    <li><Link to="/contact">Contact Us</Link></li>
                    <li>Cart</li>
                    <button className="login" onClick={onClickLoginBtn}>{loginBtnName}</button>
                </ul>
            </div>
        </div>
    );
}

export default Header;