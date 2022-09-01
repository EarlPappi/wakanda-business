import Wrapper from "../Containers/Wrapper/Wrapper";
import classes from "./Footer.module.css";
import logo from "../../Assets/Group 706.svg";
import location from "../../Assets/location.svg";
import mail from "../../Assets/mail-outline.svg";
import phone from "../../Assets/phone.svg";
import appStore from "../../Assets/GET IT ON APPSTORE.png";
import playStore from "../../Assets/Get it On googlePlay.png";
import twitter from "../../Assets/Twitter.svg";
import instagram from "../../Assets/Instgram.svg";
import facebook from "../../Assets/Facebook.svg";

const Footer = () => {
    return (
        <footer>
            <Wrapper>
                <div className={`${classes.footerOut} ${classes.flexH}`}>
                    <div className={classes.bg}>
                        <h2>Get the Wakanda App</h2>
                        <p>Enjoy alot more awesome features on the Wakanda Mobile App</p>
                    </div>

                    <div className={`${classes.flexV}`}>
                        <div className={classes.store}>
                            <img src={appStore} alt="" width="80%" />
                        </div>

                        <div className={classes.store}>
                            <img src={playStore} alt="" width="80%" />
                        </div>
                    </div>

                </div>


                <div className={`${classes.footerInner} ${classes.flexH}`}>

                    <div className={ classes.footerIcoone }>
                        <img src={logo} alt="" width="100%" />

                    </div>

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

                            <div className={`${classes.flexHalt}`}>
                                <img src={facebook} alt="" width="5%" />
                                <img src={instagram} alt="" width="5%" />
                                <img src={twitter} alt="" width="5%" />
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