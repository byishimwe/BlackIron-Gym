import '../Styles/About&Services.css'
import Services from './Services'
import FAQs from './FAQs'
import Community from './Community'

function AboutCard({image, title, description}) {
  return(
    <div className="card" style={{height: "90vh"}}>
      <img src={image} alt="" className="card-image" />
      <h2 className="card-text">{title}</h2>
      <p>{description}</p>
    </div>
  )
}

function About(){
          const AboutEvents = [
                    {
                              image: "../public/warm-up.jpg",
                              title: "The beginning of our fitness journey",
                              description: "Launched in 2020, our fitness center was created from a commitment to health and the goal of building a strong community. The founders, who are passionate about fitness, dreamed of a space where people could gather to advance their physical and mental well-being"
                    },
                    {
                              image: "Mission.jpg",
                              title: "Our Mission",
                              description: "At our gym, we believe that fitness is not just about physical strength, but also about mental resilience and community support. Our mission is to inspire and empower every member to achieve their personal fitness goals. We are dedicated to providing top-notch facilities, expert guidance, and a welcoming atmosphere where everyone can thrive."
                    },
                    {
                              image: "../public/commitment.jpg",
                              title: "Our Commitment",
                              description: "We are committed to giving back to the community by promoting health and wellness initiatives. We regularly host workshops, fitness challenges, and charity events that not only enhance the fitness journey of our members but also contribute positively to the community at large. Together, we strive for a healthier future for everyone."
                    }
          ]
          return (
                    <div>
                    <div className='about'>
                              <h1>Our Journey to Excellence</h1>
                              <p>Empowering Lives Through Fitness, one workout at a time.</p>
                    </div>
                    <div className="container nowrap">
                              {
                                        AboutEvents.map((event, index) => (
                                                  <AboutCard key={index} {...event} />
                                        ))
                              }
                    </div>
                    <Services />
                    <Community />
                    <FAQs />
                    </div>
          )
}

export default About