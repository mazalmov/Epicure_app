import Header from "../components/Header/Header";
import MobileHeader from "../components/Header/MobileHeader/MobileHeader";
import Hero from "../components/Hero/Hero";
import PopularRestorants from "../components/PopularRestorants/PopularRestorants";
import SignatureDish from "../components/SignatureDish/SignatureDish";
import About from "../components/About/About";
import TheMeaningOfOurIcons from "../components/TheMeaningOfOurIcons/TheMeaningOfOurIcons";
import TopChef from "../components/TopChef/TopChef";
import Footer from "../components/Footer/Footer";
import { HomePageContainer } from "./styeles";

function HomePage() {
  return (
    <HomePageContainer>
      <Header />
      <MobileHeader/>
      <Hero />
      <PopularRestorants />
      <SignatureDish />
      <TheMeaningOfOurIcons/>
      <TopChef/>
      <About/>
      <Footer/>
    </HomePageContainer>
  );
}

export default HomePage;
