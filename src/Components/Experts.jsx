import { motion } from "framer-motion";

const expertData = [
  {
    name: "John Doe - Head Trainer",
    image: "./Trainer11.webp",
    description: "With over 10 years of experience in personal training, John specializes in strength and conditioning. His passion for fitness and helping others achieve their goals makes him an invaluable member of our team.",
  },
  {
    name: "Jane Smith - Nutrition Coach",
    image: "./Trainer2.jpg",
    description: "Jane is a certified nutritionist dedicated to guiding our members on their dietary journeys. Her holistic approach to wellness ensures that our clients receive tailored advice that complements their fitness regimes.",
  },
  {
    name: "ISHIMWE Prince Arnaud - Group Fitness Instructor",
    image: "./Trainer3.jpg",
    description: "Our group classes are energizing and engaging, led by Prince who focuses on community and motivation to push you to your limits.",
  },
  {
    name: "Emily Johnson - Spa & Recovery Director",
    image: "./Trainer4.webp",
    description: "Relax and rejuvenate with our spa services including massages, saunas, and cryotherapy, designed to aid recovery and enhance performance.",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6 },
  }),
};

function Experts() {
  return (
    <div id="experts" className="py-16 px-8 bg-gray-50">
      {/* Section Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold">Introducing Our Experts</h1>
        <p className="text-lg text-gray-600 mt-4">Your Partners in Fitness, dedicated to helping you achieve your goals.</p>
      </div>

      {/* Experts Cards */}
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8">
        {expertData.map((expert, index) => (
          <motion.div
            key={index}
            className="card bg-white rounded-lg shadow-lg overflow-hidden transition-shadow duration-300 hover:shadow-2xl"
            custom={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={cardVariants}
          >
            <img src={expert.image} alt={expert.name} className="w-full h-64 object-cover" />
            <div className="p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">{expert.name}</h2>
              <p className="text-gray-600">{expert.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Experts;