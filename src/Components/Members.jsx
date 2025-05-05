import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const membershipCards = [
  {
    title: "Flexible Membership Options",
    image: "./Membership.webp",
    description:
      "We offer a variety of membership plans tailored to fit your needs and schedule. Whether you're looking for a short-term commitment or a long-term partnership, we have options that make fitness accessible and convenient for everyone.",
  },
  {
    title: "Free Trial Available",
    image: "./Membership2.webp",
    description:
      "Not sure if our gym is the right fit for you? Sign up for a free trial and experience our facilities, classes, and community without any commitment. It’s the perfect way to explore everything we offer and see how we can support your fitness journey.",
  },
  {
    title: "Join a Thriving Community",
    image: "./Membership3.webp",
    description:
      "By becoming a member, you’ll not only gain access to top-notch facilities and expert guidance, but you’ll also join a vibrant community of fitness enthusiasts. Connect with others, share your journey.",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      type: "spring",
    },
  }),
};

function Members() {
  return (
    <div id="about" className="py-16 px-8 bg-gray-100">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold">Become a Member Today</h1>
        <p className="mt-4 text-xl text-gray-600">Take the first step towards a healthier lifestyle.</p>
      </div>

      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {membershipCards.map((card, index) => (
          <motion.div
            key={index}
            className="card p-6 bg-white rounded-lg shadow-lg flex flex-col items-center text-center"
            custom={index}
            initial="hidden"
            whileInView="visible"
            whileHover={{ scale: 1.03 }}
            viewport={{ once: true, amount: 0.3 }}
            variants={cardVariants}
          >
            <img
              src={card.image}
              alt={card.title}
              className="w-full h-56 object-cover rounded-md"
              loading="lazy"
            />
            <h2 className="text-2xl font-semibold mt-4">{card.title}</h2>
            <p className="mt-2 text-lg text-gray-700">{card.description}</p>
            <Link to="/about">
              <button className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition">
                Learn More
              </button>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Members;