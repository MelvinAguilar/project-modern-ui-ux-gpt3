import Header from "../../components/Header/Header";
import Introduction from "../../components/Introduction/Introduction";
import Brands from "../../components/Brands/Brands";
import Information from "../../components/Information/Information";
import Features from "../../components/Features/Features";
import PossibilitySection from "../../components/PossibilitySection/PossibilitySection";
import Register from "../../components/Register/Register";
import Blog from "../../components/Blog/Blog";
import EarlyAccess from "../../components/EarlyAccess/EarlyAccess";
import Footer from "../../components/Footer/Footer";

const Home = () => {
  return (
    <>
      <Header />
      <main id="main">
        <Introduction />
        <Brands />
        <Information />
        <Features />
        <PossibilitySection />
        <Register />
        <Blog />
        <EarlyAccess />
      </main>
      <Footer />
    </>
  );
};

export default Home;
