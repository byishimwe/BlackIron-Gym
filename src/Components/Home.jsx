import Hero from "./Hero";
import Members from "./Members";
import Experts from "./Experts";
import Intro from "./Intro";

function Home() {
  return (
    <div className="scroll-smooth">
      <Hero />
      <Intro />
      <Experts />
      <Members />
    </div>
  );
}

export default Home;