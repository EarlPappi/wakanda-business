import classes from "./Features.module.css";
import Wrapper from "../../Containers/Wrapper/Wrapper";
import Button from "../../Containers/Button/Button"
import sideImg from "../../../Assets/Group 975.png"
import sideImg2 from "../../../Assets/Group 951.png"
import sideImg3 from "../../../Assets/Group 1187.png"
import calendar from "../../../Assets/Group 678.svg"

import chat from "../../../Assets/Group 678-2.svg";
import journal from "../../../Assets/Group 679-1.svg";
import checkmark from "../../../Assets/Group 678-1.svg";
import danger from "../../../Assets/Group 679-2.svg";
import category from "../../../Assets/Group 679-3.svg";
import pen from "../../../Assets/Group 679-5.svg";




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


                {/* buisness managemnt */}
                <div className={classes.featuresTab1}>

                    <div className={classes.featureT1}>


                        <h2 className={classes.headingFeat}>BUSINESS/CUSTOMER MANAGEMENT</h2>

                        <div className={classes.featuresUnit}>
                            <div className={classes.unitCon}>
                                <img src={calendar} alt="" width="100%" />

                            </div>

                            <div>
                                <h3>Data Management for your Prospects and customers </h3>

                                <p>Wakanda CRM Provides all the necessary tools to work with existing clients. Essentially, it offers a database of names, emails, phone numbers and past communications history in a clear cut and precise way.</p>
                            </div>
                        </div>

                        <div className={classes.featuresUnit}>
                            <div className={classes.unitCon}>
                                <img src={category} alt="" width="100%" />

                            </div>

                            <div>
                                <h3>Categorized Customer </h3>

                                <p>data Improve marketing efficiency with categorized existing customer database to reach individual clients with targeted offers via email, SMS, phone, messengers or social media. </p>
                            </div>
                        </div>

                        <div className={classes.featuresUnit}>
                            <div className={classes.unitCon}>
                                <img src={danger} alt="" width="100%" />

                            </div>

                            <div>
                                <h3>Alerts and Reminders </h3>

                                <p>Receive quick alerts, task reminders, and suggestions for the best times to contact your leads based on your past successful interaction, stay on top of your activities, and follow up better with your clients.</p>
                            </div>


                        </div>

                        <div className={classes.featuresUnit}>
                            <div className={classes.unitCon}>
                                <img src={journal} alt="" width="100%" />

                            </div>

                            <div>
                                <h3>Performance Report</h3>

                                <p>Performance Report As your business is growing and evolving, Wakanda CRM tracks the progress and provide real time reports on your business performance.</p>
                            </div>
                        </div>

                        <div className={classes.featuresUnit}>
                            <div className={classes.unitCon}>
                                <img src={chat} alt="" width="100%" />

                            </div>

                            <div>
                                <h3>Communicate with your customer from anywhere </h3>

                                <p>Wakanda CRM enables easy communicate with clients and staying productive from anywhere at anytime.</p>
                            </div>
                        </div>

                        <Button color="white" bgColor="#00A85A" fontWeight="bold">Get Started now</Button>

                    </div>
                    {/* Business customer Management ends */}



                    <div className={classes.featureT2}>
                        <img src={sideImg} alt="" width="100%" />
                    </div>
                </div>
                {/* Buisness management ends Here */}

                {/* customer empowerment  */}
                <div className={`${classes.featuresTab1} ${classes.altCol}`}>

                    <div className={classes.featureT1}>


                        <h2 className={classes.headingFeat}>Customer Empowerment</h2>

                        <div className={classes.featuresUnit}>
                            <div className={classes.unitCon}>
                                <img src={checkmark} alt="" width="100%" />

                            </div>

                            <div>
                                <h3>Help your customers succeeds </h3>

                                <p>You customer can also gain access to the Wakanda Market App to sell their products and services and also receive free consultation from the BabaOja Wisdom Series.</p>
                            </div>
                        </div>

                        <div className={classes.featuresUnit}>
                            <div className={classes.unitCon}>
                                <img src={journal} alt="" width="100%" />

                            </div>

                            <div>
                                <h3>Performance Report </h3>

                                <p>As your business is growing and evolving, Wakanda CRM tracks the progress and provide real time reports on your business performance.</p>
                            </div>
                        </div>

                        <div className={classes.featuresUnit}>
                            <div className={classes.unitCon}>
                                <img src={pen} alt="" width="100%" />

                            </div>

                            <div>
                                <h3>Free! and easy to use</h3>

                                <p>Wakanda is free for both your online and offline customers, through the Wakanda App and SMS alerts</p>
                            </div>
                        </div>

                        <div className={classes.featuresUnit}>
                            <div className={classes.unitCon}>
                                <img src={chat} alt="" width="100%" />

                            </div>

                            <div>
                                <h3>Communication and Feedbacks </h3>

                                <p>Your customers can communicate with you and also provide their honest feedbacks towards your business with the anonymous voice feature.</p>
                            </div>
                        </div>


                        <Button color="white" bgColor="#00A85A" fontWeight="bold">Get Started now </Button>



                    </div>


                    <div className={classes.featureT2}>
                        <img src={sideImg2} alt="" width="100%" />
                    </div>
                </div>
                {/* Customer empowerment ends here */}

                {/* Staff Management  */}
                <div className={classes.featuresTab1}>
                    {/* Buisness customer management starts */}
                    <div className={classes.featureT1}>


                        <h2 className={classes.headingFeat}>STAFF MANAGEMENT</h2>

                        <div className={classes.featuresUnit}>
                            <div className={classes.unitCon}>
                                <img src={chat} alt="" width="100%" />

                            </div>

                            <div>
                                <h3>Better Internal Communication</h3>

                                <p>Internal communication channel with your staff, enhanced with the ability to create different categories of chat with your company community, and also anonymous voices chats for staffs to communicate with the managent.</p>
                            </div>
                        </div>

                        <div className={classes.featuresUnit}>
                            <div className={classes.unitCon}>
                                <img src={journal} alt="" width="100%" />

                            </div>

                            <div>
                                <h3>Reports and Documentation </h3>

                                <p>Track the performance of your staff members to ensure effectiveness and productivity. Including a centralized storage for your documents which can be easily accessible from anywhere in the world at any time.</p>
                            </div>
                        </div>

                        <Button color="white" bgColor="#00A85A" fontWeight="bold">Get Started now</Button>


                    </div>
                    {/* Business customer Management ends */}



                    <div className={`${classes.featureT2} ${classes.altPad}`}>
                        <img src={sideImg3} alt="" width="100%" />
                    </div>
                </div>
                {/* Staff Management Ends here */}

            </Wrapper>
        </div>
    );
}

export default Features;