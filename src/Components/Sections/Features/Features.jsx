import classes from "./Features.module.css";
import Wrapper from "../../Containers/Wrapper/Wrapper";
import sideImg from "../../../Assets/Group 975.png"
import calendar from "../../../Assets/Group 678.svg"

const Features = () => {
    return (
        <div className={classes.featuresCon}>
            <Wrapper>
                <div>
                    <h2 className={`${classes.headingH2}`}>Features</h2>

                    <h2 className={`${classes.headingTitle}`}>
                        Wakanda CRM is Built to Bridge the Gap between your Business and Customers, Management and Staff.
                    </h2>
                </div>

                <div className={ classes.featuresTab1 }>
                    <div  className={ classes.featureT1 }>
                        <h2 className={classes.headingFeat}>BUSINESS/CUSTOMER MANAGEMENT</h2>

                        <div className={ classes.featuresUnit }>
                            <div className={ classes.unitCon }>
                                <img src={calendar} alt="" width="100%"/>

                            </div>

                            <div>
                                <h3>Data Management for your Prospects and customers </h3>

                                <p>Wakanda CRM Provides all the necessary tools to work with existing clients. Essentially, it offers a database of names, emails, phone numbers and past communications history in a clear cut and precise way.</p>
                            </div>
                        </div>

                        <div className={ classes.featuresUnit }>
                            <div className={ classes.unitCon }>
                                <img src={calendar} alt="" width="100%"/>

                            </div>

                            <div>
                                <h3>Data Management for your Prospects and customers </h3>

                                <p>Wakanda CRM Provides all the necessary tools to work with existing clients. Essentially, it offers a database of names, emails, phone numbers and past communications history in a clear cut and precise way.</p>
                            </div>
                        </div>

                        <div className={ classes.featuresUnit }>
                            <div className={ classes.unitCon }>
                                <img src={calendar} alt="" width="100%"/>

                            </div>

                            <div>
                                <h3>Data Management for your Prospects and customers </h3>

                                <p>Wakanda CRM Provides all the necessary tools to work with existing clients. Essentially, it offers a database of names, emails, phone numbers and past communications history in a clear cut and precise way.</p>
                            </div>
                        </div>

                        <div className={ classes.featuresUnit }>
                            <div className={ classes.unitCon }>
                                <img src={calendar} alt="" width="100%"/>

                            </div>

                            <div>
                                <h3>Data Management for your Prospects and customers </h3>

                                <p>Wakanda CRM Provides all the necessary tools to work with existing clients. Essentially, it offers a database of names, emails, phone numbers and past communications history in a clear cut and precise way.</p>
                            </div>
                        </div>

                        <div className={ classes.featuresUnit }>
                            <div className={ classes.unitCon }>
                                <img src={calendar} alt="" width="100%"/>

                            </div>

                            <div>
                                <h3>Data Management for your Prospects and customers </h3>

                                <p>Wakanda CRM Provides all the necessary tools to work with existing clients. Essentially, it offers a database of names, emails, phone numbers and past communications history in a clear cut and precise way.</p>
                            </div>
                        </div>
                        
                    </div>


                    <div className={ classes.featureT2 }>
                        <img src={sideImg} alt="" width="100%"/>
                    </div>
                </div>
            </Wrapper>
        </div>
    );
}

export default Features;