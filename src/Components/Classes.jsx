function Classes() {
  return (
    <>
      {/* Hero Section */}
      <section
        className="classes text-white py-16 px-8 bg-cover bg-center min-h-screen"
        style={{ backgroundImage: 'url("../public/classes2.jpg")' }}
      >
        <div className="hero max-w-4xl mx-auto text-center mt-10">
          <h1 className="text-4xl font-bold mb-4">Find the Perfect Class for You!</h1>
          <p className="text-lg mb-6 text-gray-300">
            Whether you're a beginner or an advanced athlete, our expert-led fitness classes will help you
            achieve your goals while keeping you motivated.
          </p>
          <button
            className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-blue-500 transition duration-300"
            onClick={() => document.getElementById("about").scrollIntoView({ behavior: "smooth" })}
          >
            Join now &raquo;
          </button>
        </div>
      </section>

      {/* Class Cards Section */}
      <article id="about" className="py-16 px-8 bg-white">
        <h1 className="text-3xl font-bold text-center text-gray-900 mb-8">Transform Your Fitness Journey</h1>
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            {
              image: "../public/Morning Yoga1.jpg",
              alt: "Card 1",
              title: "Morning Yoga Session",
              description: "Start your day with yoga to enhance flexibility, strength, and mindfulness. Runs 7:00–8:00 AM for all skill levels.",
            },
            {
              image: "../public/HIIT.jpg",
              alt: "Card 2",
              title: "High-Intensity Interval Training (HIIT)",
              description: "Burn calories with fast-paced HIIT classes held weekdays at 6:00 PM. Improve endurance and results quickly.",
            },
            {
              image: "../public/Strength.jpg",
              alt: "Card 3",
              title: "Strength Training Workshops",
              description: "Develop muscle and technique in Saturday workshops at 10:00 AM. Great for all levels.",
            },
            {
              image: "../public/Dance class.jpg",
              alt: "Card 4",
              title: "Dance Fitness Classes",
              description: "Blend cardio and fun every Wednesday at 7:30 PM. Enjoy fitness through lively dance routines.",
            }
          ].map((item, index) => (
            <div key={index} className="bg-gray-100 rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <img src={item.image} alt={item.alt} className="w-full h-64 object-cover" />
              <div className="p-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">{item.title}</h2>
                <p className="text-gray-700 mb-6">{item.description}</p>
                <button className="bg-blue-600 text-white px-5 py-2 rounded hover:bg-blue-500 transition duration-300">
                  Join Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </article>

      {/* Testimonials Section */}
      <article className="py-16 px-8 bg-gray-100 rounded-lg w-[90%] lg:w-[95%] m-auto">
        <h1 className="text-3xl font-bold text-center text-gray-900 mb-8">What Our Members Say</h1>
        <p className="text-center text-lg text-gray-600 mb-12">Discover how our gym has transformed lives through fitness.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {[ 
            {
              name: "Alex Johnson",
              image: "../public/person.jpg",
              title: "Incredible Transformation",
              description: "Six months in and I feel amazing. The trainers and community here are top-notch."
            },
            {
              name: "Sophie Lee",
              image: "../public/person1.jpg",
              title: "A Welcoming Environment",
              description: "The classes are diverse and the atmosphere is so welcoming—it keeps me coming back."
            },
            {
              name: "David Kim",
              image: "../public/person3.jpg",
              title: "Achieving My Goals",
              description: "The personalized plans and trainer support helped me reach my goals faster than I expected."
            },
            {
              name: "Emily Roberts",
              image: "../public/person4.jpg",
              title: "A Supportive Community",
              description: "I’ve made great progress thanks to the supportive community. Everyone motivates each other to do their best."
            }
          ].map((testimonial, index) => (
            <div key={index} className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <img src={testimonial.image} alt={testimonial.name} className="w-16 h-16 rounded-full object-cover mr-4" />
                <h3 className="text-lg font-bold text-gray-800">{testimonial.name}</h3>
              </div>
              <h4 className="text-xl font-semibold text-gray-700 mb-2">{testimonial.title}</h4>
              <p className="text-gray-600">{testimonial.description}</p>
            </div>
          ))}
        </div>
      </article>
    </>
  );
}

export default Classes;