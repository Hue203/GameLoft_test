import "./App.css";
import Community from "./components/Community -test/Community ";
import EventPromotions from "./components/EventPromotions/EventPromotions";
import FooterBar from "./components/FooterBar/FooterBar";
import GameCommunityHub from "./components/GameCommunityHub/GameCommunityHub";
import Hotspotbanner from "./components/Hotspotbanner /Hotspotbanner";
import RegisterForm from "./components/RegisterForm/RegisterForm";
import StickyMenu from "./components/StickyMenu/StickyMenu";

function App() {
  return (
    <div className="App">
      <StickyMenu />
      <Hotspotbanner />
      <RegisterForm />
      <GameCommunityHub />

      <FooterBar />
    </div>
  );
}

export default App;
