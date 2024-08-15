import BestRest from "./components/BestRest";
import Categories from "./components/Categories";
import DownloadSection from "./components/DownloadSection";
import Footer from "./components/Footer";
import Header from "./components/Header";
import OnlineDelivery from "./components/OnlineDelivery";
import RestCity from "./components/RestCity";
import RestNearMe from "./components/RestNearMe";
import TopRest from "./components/TopRest";

function App() {
  return (
    <div>
      <Header />
      <Categories />
      <TopRest />
      <OnlineDelivery />
      <RestCity />
      <BestRest />
      <RestNearMe />
      <DownloadSection />
      <Footer />
    </div>
  );
}

export default App;
