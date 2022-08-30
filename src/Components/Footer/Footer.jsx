import Wrapper from "../Containers/Wrapper/Wrapper";
import classes from "./Footer.module.css";
import logo from "../../Assets/Group 706.svg";
import location from "../../Assets/location.svg";
import mail from "../../Assets/mail-outline.svg";
import phone from "../../Assets/phone.svg";
import appStore from "../../Assets/GET IT ON APPSTORE.png";
import playStore from "../../Assets/Get it On googlePlay.png";

const Footer = () => {
    return (
        <footer>
            <Wrapper>
                <div className={`${classes.footerOut} ${classes.flexH}`}>
                    <div className={classes.bg}>
                        <h2>Get the Wakanda App</h2>
                        <p>Enjoy alot more awesome features on the Wakanda Mobile App</p>
                    </div>

                    <div>
                        <div >
                            <img src={appStore} alt="" />
                        </div>
                        
                        <div >
                            <img src={playStore} alt="" />
                        </div>
                    </div>

                </div>


                <div className={`${classes.footerInner} ${classes.flexH}`}>
                    <img src={logo} alt="" />

                    <nav className={`${classes.flexV}`}>
                        <h3>Links</h3>
                        <a href="./">About Us</a>
                        <a href="./">Our Offers</a>
                        <a href="./">Pricing</a>
                        <a href="./">FAQs</a>
                    </nav>

                    <nav className={`${classes.flexV}`}>
                        <h3>Contacts</h3>
                        <div className={`${classes.flexV}`}>
                            <div className={`${classes.flexHalt}`}>
                                <img src={location} alt="" />
                                <p>42 Montgomery Rd, Yaba, Lagos.</p>
                            </div>

                            <div className={`${classes.flexHalt}`}>
                                <img src={mail} alt="" />
                                <p>Christian@african-founders.com abiodun@african-funders.com</p>
                            </div>

                            <div className={`${classes.flexHalt}`}>
                                <img src={phone} alt="" />
                                <p>08064289402</p>
                            </div>


                        </div>

                    </nav>

                </div>
            </Wrapper>

            <div className={classes.footerSub}>
                <p>Made with ♥ by African Founders</p>

            </div>
        </footer>
    );
}

export default Footer;