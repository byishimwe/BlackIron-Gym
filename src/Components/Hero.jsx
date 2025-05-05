import '../Styles/Home/Hero.css'

function Hero() {
  return (
    <section className='section'>
      <div className="hero">
        <h1>Unleash Your Strength, Unleash Your Potential.</h1>
        <p style={{marginLeft: "3%"}}>
          Every day is a new opportunity to challenge yourself,
          to go beyond the limits you thought were unbreakable.
          At our gym, we believe in unlocking the immense 
          power within you.
        </p>
        <button className='button' onClick={() => document.getElementById('intro').scrollIntoView({behavior: 'auto'})}>
          Join now &raquo;
        </button>
      </div>
      <img src="../public/hero.png" alt="" />
    </section>
  );
}

export default Hero;