import Button from "../../Containers/Button/Button";
import Wrapper from "../../Containers/Wrapper/Wrapper";
import HeroImg from "../../../Assets/Mask Group 15.png";
import classes from "./Hero.module.css"


const Hero = () => {
    return ( 
        <div className={ classes.heroCon }>
            <Wrapper>
                <div className={ classes.heroTopSection }>
                    <div className={ classes.heroTextCon }>
                        <h2>Organise Your Sales. Build Great Relationships. Save Time.</h2>

                        <Button>Get Started</Button>
                    </div>

                    <div className={ classes.heroImgCon }>
                        <img src={ HeroImg } alt="" width="100%"/>
                    </div>
                </div>
            </Wrapper>
        </div>
     );
}
 
export default Hero;