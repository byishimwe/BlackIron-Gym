import { motion } from "framer-motion";

const introSections = [
  {
    title: "State of the Art Facilities",
    image: "./Intro1.webp",
    description:
      "Our gym is equipped with the latest fitness technology and equipment, ensuring you have everything you need to achieve your goals. From spacious workout areas to specialized zones for various activities, we create a motivating environment for your fitness journey.",
    reverse: true,
  },
  {
    title: "Expert Trainers",
    image: "./Intro2.webp",
    description:
      "Our certified trainers are passionate about helping you succeed. They offer personalized guidance, motivation, and support tailored to your unique fitness level and aspirations. With their expertise, you'll learn proper techniques and stay on track with your fitness plan.",
    reverse: false,
  },
  {
    title: "Community & Support",
    image: "./Intro3.webp",
    description:
      "At our gym, you’re not just another member; you’re part of a supportive community. We believe that fitness is more enjoyable when shared with others. Engage in group classes, social events, and fitness challenges that foster camaraderie and encouragement.",
    reverse: true,
  },
];

const textVariants = {
  hidden: (direction) => ({
    opacity: 0,
    x: direction === "left" ? -100 : 100,
  }),
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7 },
  },
};

function Intro() {
  return (
    <article id="intro" className="space-y-16 mb-10 px-6 py-12">
      <h1 className="text-6xl text-center font-bold mb-12">Introduction</h1>

      {introSections.map((section, index) => (
        <div
          key={index}
          className={`flex flex-col-reverse ${
            section.reverse ? "md:flex-row-reverse" : "md:flex-row"
          } items-center justify-between gap-8`}
        >
          <motion.img
            src={section.image}
            alt={section.title}
            loading="lazy"
            className="w-full md:w-1/2 rounded-lg"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.4 }}
          />

          <motion.div
            className="w-full md:w-1/2 text-center md:text-left"
            custom={section.reverse ? "right" : "left"}
            initial="hidden"
            whileInView="visible"
            variants={textVariants}
            viewport={{ once: true, amount: 0.4 }}
          >
            <h2 className="text-5xl font-semibold mb-5">{section.title}</h2>
            <p className="text-2xl text-gray-700">{section.description}</p>
          </motion.div>
        </div>
      ))}
    </article>
  );
}

export default Intro;