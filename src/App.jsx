import { Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Footer from "./Components/Footer";
import Classes from "./Components/Classes";
import About from "./Components/About";
import Trainers, {
  TrainerSpotlight,
  TrainingPrograms,
  ClientTransformations,
  LiveSessions,
  TrainerCategories,
  FAQ,
  Testimonials,
  JoinOurTeam,
  TrainerComparison,
} from "./Components/Trainers";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/classes" element={<Classes />} />
        <Route path="/about" element={<About />} />
        <Route
          path="/trainers"
          element={
            <>
              <Trainers />
              <TrainerSpotlight />
              <TrainerCategories setFilter={() => {}} />
              <TrainingPrograms />
              <ClientTransformations />
              <LiveSessions />
              <Testimonials />
              <FAQ />
              <JoinOurTeam />
              <TrainerComparison />
            </>
          }
        />
      </Routes>
      <Footer />
    </>
  );
}

export default App;