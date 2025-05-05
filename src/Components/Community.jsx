import { motion } from "framer-motion";

function CommunityCard({ image, alt, title, description, index, hideOnSmall }) {
  return (
    <motion.div
      className={`card bg-white rounded-lg shadow-lg overflow-hidden transition-shadow duration-300 hover:shadow-2xl mb-8 ${
        hideOnSmall ? "hidden lg:block" : ""
      }`}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <img src={image} alt={alt} className="card-image w-full h-64 object-cover" />
      <div className="p-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">{title}</h2>
        <p className="text-gray-600">{description}</p>
      </div>
    </motion.div>
  );
}

function Community() {
  const CommunityEvents = [
    {
      image: "./Community1.webp",
      alt: "Head Trainer",
      title: "Annual Fitness Challenge",
      description:
        "Each year, we host a month-long fitness challenge that encourages members to push their limits. Participants engage in various workouts and activities designed to enhance their physical abilities, culminating in a celebration event where achievements are recognized and rewarded.",
    },
    {
      image: "./Community2.webp",
      alt: "Nutrition Coach",
      title: "Community Health Fair",
      description:
        "Our gym organizes an annual health fair that invites local businesses and health professionals to educate the community on wellness topics. This event features free health screenings, nutrition workshops, and fitness demonstrations, fostering a culture of health and awareness.",
    },
    {
      image: "./Community3.webp",
      alt: "Group Fitness",
      title: "Charity Workout Days",
      description:
        "To give back to those in need, we host charity workout days where all proceeds go to local organizations. These events not only promote fitness but also strengthen community ties as members come together for a common cause, making a positive impact on those less fortunate.",
    },
  ];

  return (
    <div id="community" className="py-16 px-8 bg-gray-100">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold text-gray-800">Building a Healthier Community</h1>
        <p className="text-lg text-gray-600 mt-4">Our Impact Through Engagement</p>
      </div>

      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {CommunityEvents.map((event, index) => (
          <CommunityCard
            key={index}
            index={index}
            hideOnSmall={index === CommunityEvents.length - 1}
            {...event}
          />
        ))}
      </div>
    </div>
  );
}

export default Community;