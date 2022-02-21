import React, { useContext } from "react";
import styles from "./styles.module.scss";
import { AuthContext } from "../../AuthContext/authContext";
import { Button } from "antd";
import { Link } from "react-router-dom";

function Navbar() {
  const { isLogin } = useContext(AuthContext);
  const { logout } = useContext(AuthContext);

  const logoutHandler = () => {
    logout();
  };
  console.log(isLogin);

  return (
    <nav className={styles.nav}>
      <div className={styles.nav__logo}>
        <h1>Twitter Account Checker</h1>
      </div>
      <div>
        {isLogin && (
          <div>
            <Button onClick={logoutHandler}>Logout</Button>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
