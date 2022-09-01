import Wrapper from "../../Containers/Wrapper/Wrapper";
import classes from "./Prefooter.module.css"
import Book from "../../../Assets/Mask Group 17.png"
import Button from "../../Containers/Button/Button";


const Prefooter = () => {
    return (
        <div>
            <Wrapper>
                <div className={ classes.preFooterIn }>
                    <div>
                        <img src={Book} alt="" width="100%"/>

                    </div>

                    <div className={ classes.texBox }>
                        <h2>FREE! EBOOK</h2>
                        <p>7 Reasons You Need To Turn Your Business To A Mobile Business</p>

                        <Button color="white" bgColor="#00A85A" fontWeight="bold">Get it now </Button>
                    </div>
                </div>
            </Wrapper>
        </div>
    );
}

export default Prefooter;