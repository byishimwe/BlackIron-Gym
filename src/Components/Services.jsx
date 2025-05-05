import "../Styles/About&Services.css";

function ServiceCard({ image, alt, title, description }) {
  return (
    <div className="card service-card">
      <img src={image} alt={alt} className="card-image" />
      <h2 className="card-text">{title}</h2>
      {description.map((text, index) => (
        <p key={index}>{text}</p>
      ))}
    </div>
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
        "Our trainers will assess your fitness level, set achievable milestones, and keep you motivated every step of the way."
      ],
    },
    {
      image: "../public/group training.jpg",
      alt: "Group Fitness Classes",
      title: "Group Fitness Classes",
      description: [
        "Join our energetic group classes including Yoga, Pilates, HIIT, Zumba, and more. Experience the motivation and camaraderie of working out in a community.",
        "Our group sessions are led by professional instructors who ensure every participant gets the most out of their workout in a fun and engaging atmosphere."
      ],
    },
    {
      image: "../public/nutrition.jpg",
      alt: "Nutrition Coaching",
      title: "Nutrition Coaching",
      description: [
        "Our nutrition experts provide personalized meal plans and guidance to complement your fitness routine and help you achieve optimal health.",
        "Learn how to balance your diet effectively with tailored nutrition strategies that align with your fitness goals and lifestyle."
      ],
    },
    {
      image: "../public/recovery.jpg",
      alt: "Spa & Recovery",
      title: "Spa & Recovery",
      description: [
        "Relax and rejuvenate with our spa services including massages, saunas, and cryotherapy, designed to aid recovery and enhance performance.",
        "Our recovery services help reduce muscle soreness, improve circulation, and promote overall well-being, ensuring you stay at your peak."
      ],
    },
  ];

  return (
    <div id="services">
      <div className="services">
        <h1>What We Offer</h1>
        <p>Unlock Your Potential with Our Diverse Fitness Programs.</p>
      </div>
      <div className="container service-container wrap">
        {servicesList.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </div>
    </div>
  );
}

export default Services;
