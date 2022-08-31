import Button from "../../Containers/Button/Button";
import Wrapper from "../../Containers/Wrapper/Wrapper";
import HeroImg from "../../../Assets/Mask Group 15.png";
import global from "../../../Assets/global-connection.png";
import sales from "../../../Assets/sales.png";
import email from "../../../Assets/email-marketing.png";
import classes from "./Hero.module.css";


const Hero = () => {
    return ( 
        <div className={ classes.heroCon }>
            <Wrapper>
                <div className={ classes.heroTopSection }>
                    <div className={ classes.heroTextCon }>
                        <h2>Organise Your Sales. Build Great Relationships. Save Time.</h2>

                        <Button color="white" bgColor="#00A85A" fontWeight="bold">Get Started now</Button>
                    </div>

                    <div className={ classes.heroImgCon }>
                        <img src={ HeroImg } alt="" width="100%"/>
                    </div>
                </div>

                <h2 className={ classes.miniHeader }>How can Wakanda CRM help You Grow your Business?</h2>

                <div className={ classes.heroIcon }>
                    <div className={classes.heroIconIn}>
                        <div><img src={ global } alt="" /></div>
                        <p>Build deeper connections with your customers with ease.</p>
                    </div>

                    <div className={classes.heroIconIn}>
                        <div><img src={ sales } alt="" /></div>
                        <p>Manage your sales process.</p>
                    </div>

                    <div className={classes.heroIconIn}>
                        <div><img src={ email } alt="" /></div>
                        <p>Automate your everyday task and save time..</p>
                    </div>

                </div>
            </Wrapper>
        </div>
     );
}
 
export default Hero;