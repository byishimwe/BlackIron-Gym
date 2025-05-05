import { motion } from "framer-motion";
import Services from './Services';
import FAQs from './FAQs';
import Community from './Community';

function AboutCard({ image, title, description, index }) {
  return (
    <motion.div
      className="card max-w-xs mx-auto bg-white shadow-lg rounded-lg overflow-hidden my-8 hover:shadow-2xl transition-shadow duration-300"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <img
        src={image}
        alt={title}
        className="card-image w-full h-64 object-cover"
      />
      <div className="p-6">
        <h2 className="card-text text-xl font-semibold text-gray-800 mb-4">
          {title}
        </h2>
        <p className="text-gray-600">{description}</p>
      </div>
    </motion.div>
  );
}

function About() {
  const AboutEvents = [
    {
      image: "../public/warm-up.jpg",
      title: "Our fitness journey",
      description:
        "Launched in 2020, our fitness center was created from a commitment to health and the goal of building a strong community.",
    },
    {
      image: "Mission.jpg",
      title: "Our Mission",
      description:
        "At our gym, we believe that fitness is not just about physical strength, but also about mental resilience and community support.",
    },
    {
      image: "../public/commitment.jpg",
      title: "Our Commitment",
      description:
        "We are committed to giving back to the community by promoting health and wellness initiatives. We regularly host workshops.",
    },
  ];

  return (
    <div className="bg-gray-100 py-16">
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.4 }}
      >
        <h1 className="text-3xl font-bold text-gray-800 mb-4 text-shadow-lg">
          Our Journey to Excellence
        </h1>
        <p className="text-lg text-gray-600">
          Empowering Lives Through Fitness, one workout at a time.
        </p>
      </motion.div>

      <div className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {AboutEvents.map((event, index) => (
          <div
            key={index}
            className={
              event.title === "Our Commitment" ? "hidden lg:block" : ""
            }
          >
            <AboutCard index={index} {...event} />
          </div>
        ))}
      </div>

      {/* Additional sections */}
      <Services />
      <Community />
      <FAQs />
    </div>
  );
}

export default About;