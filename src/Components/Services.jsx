import { motion } from "framer-motion";

function ServiceCard({ image, alt, title, description, index }) {
  return (
    <motion.div
      className="card service-card bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
    >
      <img
        src={image}
        alt={alt}
        className="card-image w-full h-56 object-cover"
        loading="lazy"
      />
      <div className="p-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">{title}</h2>
        {description.map((text, i) => (
          <p key={i} className="text-gray-600 mb-2">{text}</p>
        ))}
      </div>
    </motion.div>
  );
}

function Services() {
  const servicesList = [
    {
      image: "../public/personal training.jpg",
      alt: "Personal Training",
      title: "Personal Training",
      description: [
        "Get one-on-one training sessions with our certified personal trainers who tailor workouts to meet your specific goals, whether it's weight loss, muscle gain, or improving overall fitness.",
      ],
    },
    {
      image: "../public/group training.jpg",
      alt: "Group Fitness Classes",
      title: "Group Fitness Classes",
      description: [
        "Join our energetic group classes including Yoga, Pilates, HIIT, Zumba, and more. Experience the motivation and camaraderie of working out in a community.",
      ],
    },
    {
      image: "../public/nutrition.jpg",
      alt: "Nutrition Coaching",
      title: "Nutrition Coaching",
      description: [
        "Our nutrition experts provide personalized meal plans and guidance to complement your fitness routine and help you achieve optimal health.",
      ],
    },
    {
      image: "../public/recovery.jpg",
      alt: "Spa & Recovery",
      title: "Spa & Recovery",
      description: [
        "Relax and rejuvenate with our spa services including massages, saunas, and cryotherapy, designed to aid recovery and enhance performance.",
      ],
    },
  ];

  return (
    <div id="services" className="py-16 bg-gray-100">
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.4 }}
      >
        <h1 className="text-4xl font-bold text-gray-800">What We Offer</h1>
        <p className="mt-4 text-xl text-gray-700">
          Unlock Your Potential with Our Diverse Fitness Programs.
        </p>
      </motion.div>

      <div className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {servicesList.map((service, index) => (
          <ServiceCard key={index} index={index} {...service} />
        ))}
      </div>
    </div>
  );
}

export default Services;