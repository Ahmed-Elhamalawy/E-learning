import Navbar from "./components/navbar";
import NavBarBanner from "./components/NavBarBanner";
import Hero from "./components/Hero";
import NumberCounter from "./components/NumberCounter";
import ChooseUs from "./components/chooseUs";
import CustomizeSchedule from "./components/CustomizeSchedule";
import CustomizeSchedule2 from "./components/CustomizeSchedule2";
import OurSubjects from "./components/OurSubjects";
import CardsSwiper from "./components/CardsSwiper";
import Footer from "./components/Footer";

const App = () => {
  return (
    <main className="overflow-x-hidden overflow-y-hidden">
      <Navbar />
      <NavBarBanner />
      <Hero />
      <NumberCounter />
      <ChooseUs />
      <CustomizeSchedule />
      <CustomizeSchedule2 />
      <OurSubjects />
      <CardsSwiper />
      <Footer />
    </main>
  );
};

export default App;
