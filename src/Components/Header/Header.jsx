import Wrapper from "../Containers/Wrapper/Wrapper";
import classes from "./Header.module.css";
import logo from "../../Assets/Group 313.svg"
import Button from "../Containers/Button/Button";

const Header = () => {
    return (
        <div className={classes.headerCon}>
            <Wrapper>
                <div className={ classes.headerInner }>
                    <img src={ logo } alt="" />

                    <div className={ classes.headerNavCon }>
                        <nav className={ classes.nav }>
                            <a href="./">Features</a> 
                            <a href="./">Pricing</a>
                            <a href="./">FAQs</a>
                            <a href="./">Contact</a>
                        </nav>

                        <nav>
                            <Button>Login</Button>
                            <Button>Get Started</Button>
                            
                        </nav>

                    </div>
                
                   

                </div>

            </Wrapper>
        </div>
    );
}

export default Header;