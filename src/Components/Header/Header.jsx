import Wrapper from "../Containers/Wrapper/Wrapper";
import classes from "./Header.module.css";
import logo from "../../Assets/Group 313.svg"
import Button from "../Containers/Button/Button";

const Header = () => {
    return (
        <div className={classes.headerCon}>
            <Wrapper>
                <div className={classes.headerInner}>
                    <div>
                        <img src={logo} alt="" width="80%"/>
                    </div>

                    <div className={`${classes.headerNavCon} ${classes.desktop}`}>
                        <nav className={classes.nav}>
                            <a href="./">Features</a>
                            <a href="./">Pricing</a>
                            <a href="./">FAQs</a>
                            <a href="./">Contact</a>
                        </nav>

                        <nav>
                            <Button color="#648B7A" bgColor="white" fontWeight="600" border="2px solid #00A85A">Login</Button>
                            <Button color="white" bgColor="#00A85A" fontWeight="600">Get Started now</Button>

                        </nav>

                    </div>

                    <div className={ classes.mobile }>
                        <span>Hamburger here</span>
                    </div>



                </div>

            </Wrapper>
        </div>
    );
}

export default Header;