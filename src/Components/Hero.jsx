function Hero() {
  const handleJoinClick = () => {
    const introSection = document.getElementById('intro');
    if (introSection) {
      introSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative flex items-center justify-center bg-gray-800 text-white h-screen">
      <div className="absolute inset-0 bg-cover bg-center opacity-50">
        <img src="./public/hero.png" alt="Hero Image" className="w-full min-h-screen h-full object-cover" />
      </div>
      <div className="relative z-10 text-center px-6 md:px-12">
        <h1>
          Unleash Your Strength, Unleash Your Potential.
        </h1>
        <p className="text-lg mb-6 md:max-w-2xl mx-auto">
          Every day is a new opportunity to challenge yourself, to go beyond the limits you thought were unbreakable. At our gym, we believe in unlocking the immense power within you.
        </p>
        <button 
          className="bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-600 transition duration-300" 
          onClick={handleJoinClick}
        >
          Join now &raquo;
        </button>
      </div>
    </section>
  );
}

export default Hero;