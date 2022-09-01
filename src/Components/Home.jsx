import Header from "./Header/Header";
import Hero from "../Components/Sections/Hero/Hero"
import Prefooter from "../Components/Sections/PreFooter/Prefooter"
import Footer from "../Components/Footer/Footer"
import NewFeatures from "./Sections/Features/newFeatures";

const Home = () => {
    return (
        <div>
            <Header />
            <Hero />
            <NewFeatures/>
            <Prefooter />
            <Footer />
            
        </div>
    );
}

export default Home;