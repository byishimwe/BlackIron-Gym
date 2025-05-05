import '../Styles/Classes/Classes.css';
import '../Styles/About&Services.css';

function Classes() {
  return (
    <>
      {/* Hero Section */}
      <section className='classes'>
        <div className='hero'>
          <h1>Find the Perfect Class for You!</h1>
          <p>Whether you're a beginner or an advanced athlete, our expert-led fitness classes will help you achieve your goals while keeping you motivated.</p>
          <button className='button' onClick={() => document.getElementById("about").scrollIntoView({ behavior: "smooth" })}>
            Join now &raquo;
          </button>
        </div>
        <img src="../public/classes2.jpg" alt="Gym classes" />
      </section>

      {/* Class Cards Section */}
      <article id='about' className='class-cards'>
        <h1>Transform Your Fitness Journey with Our Dynamic Classes</h1>
        <div className="container" style={{ flexWrap: "wrap" }}>
          {[
            {
              image: "../public/Morning Yoga1.jpg",
              alt: "Card 1",
              title: "Morning Yoga Session",
              description: "Start your day with our invigorating morning yoga classes designed to enhance flexibility, strength, and mindfulness. These sessions run from 7:00 AM to 8:00 AM and welcome all skill levels.",
            },
            {
              image: "../public/HIIT.jpg",
              alt: "Card 2",
              title: "High-Intensity Interval Training (HIIT)",
              description: "Push your limits with our high-intensity interval training (HIIT) classes, designed to improve endurance and burn calories efficiently. Held every weekday at 6:00 PM, these fast-paced workouts are perfect for those looking to maximize results in a short amount of time.",
            },
            {
              image: "../public/Strength.jpg",
              alt: "Card 3",
              title: "Strength Training Workshops",
              description: "Build strength and confidence with our specialized strength training workshops, structured to help you develop muscle and enhance overall fitness. These sessions take place every Saturday at 10:00 AM and cater to all experience levels, from beginners learning the basics to advanced lifters refining their techniques.",
            },
            {
              image: "../public/Dance class.jpg",
              alt: "Card 4",
              title: "Dance Fitness Classes",
              description: "Get your heart pumping with our exciting dance fitness classes, where movement meets music for a fun and energetic workout. Offered every Wednesday at 7:30 PM, these sessions blend cardio and dance routines, making them a great way to stay active while enjoying the beautiful upbeat and lively atmosphere.",
            }
          ].map((item, index) => (
            <div key={index} className="card" style={{ height: "80vh", width: "45%" }}>
              <img src={item.image} alt={item.alt} className="card-image" />
              <h2 className="card-text">{item.title}</h2>
              <p>{item.description}</p>
              <button className='class-button'>Join Now</button>
            </div>
          ))}
        </div>
      </article>

      {/* Testimonials Section (Keeping the Exact Order) */}
      <article>
        <h1>What Our Members Say</h1>
        <p style={{ textAlign: "center" }}>Discover how our gym has transformed lives through the power of fitness.</p>

        {/* Testimonial 1 - Image on Left */}
        <div className='members'>
          <img src="../public/person.jpg" alt="Testimonial 1" />
          <div className='text'>
            <h2>Incredible Transformation</h2>
            <p>
              I joined Gym six months ago, and the results have been life-changing. The supportive community and excellent trainers have motivated me to push beyond my limits. Every workout feels invigorating, and I've gained both strength and confidence.
            </p>
          </div>
        </div>

        {/* Testimonial 2 - Image on Right */}
        <div className='members'>
          <div className='text'>
            <h2>A Welcoming Environment</h2>
            <p>
              From day one, I felt welcomed and supported. The diverse range of classes and workshops has helped me find my passion for fitness and well-being. Each session has not only challenged me but also fostered a sense of community that keeps me motivated.
            </p>
          </div>
          <img src="../public/person1.jpg" alt="Testimonial 2" />
        </div>

        {/* Testimonial 3 - Image on Left */}
        <div className='members'>
          <img src="../public/person3.jpg" alt="Testimonial 3" />
          <div className='text'>
            <h2>Achieving My Goals</h2>
            <p>
              Thanks to the personalized training plans at Gym, I’ve achieved my fitness goals faster than I ever thought possible. The trainers genuinely care about my progress and success. Their expertise and encouragement have been instrumental in keeping me accountable.
            </p>
          </div>
        </div>
      </article>
    </>
  );
}

export default Classes;