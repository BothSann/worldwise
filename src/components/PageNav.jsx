import { Link, NavLink } from "react-router";
import styles from "./PageNav.module.css";
import Logo from "./Logo";

function PageNav() {
  const productPath = "/product";
  const pricingPath = "/pricing";
  const loginPath = "/login";

  return (
    <nav className={styles.nav}>
      <Logo />
      <ul>
        <li>
          <NavLink to={productPath}>Product</NavLink>
        </li>
        <li>
          <NavLink to={pricingPath}>Pricing</NavLink>
        </li>
        <li>
          <NavLink to={loginPath} className={styles.ctaLink}>
            Login
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default PageNav;
