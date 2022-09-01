// import Header from "./Header/Header";
import Hero from "../Components/Sections/Hero/Hero"
import Features from "../Components/Sections/Features/Features"
import Prefooter from "../Components/Sections/PreFooter/Prefooter"
import Footer from "../Components/Footer/Footer"

const Home = () => {
    return (
        <div>
            {/* <Header /> */}
            <Hero />
            <Features />
            <Prefooter />
            <Footer />
        </div>
    );
}

export default Home;