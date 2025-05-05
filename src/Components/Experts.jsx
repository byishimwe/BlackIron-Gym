function Experts() {
          return (
          <div id='experts'>
      <div className='experts'>
        <h1>Introducing Our Experts</h1>
        <p style={{textAlign: "center"}}>Your Partners in Fitness, dedicated to helping you achieve your goals.</p>
      </div>
      <div className="container" style={{flexWrap: "wrap"}}>
        <div className="card" style={{width: "45%", height: "115vh"}}>
          <img src="./Trainer11.webp" alt="Head Trainer" className="card-image" />
          <h2 className="card-text">John Doe - Head Trainer</h2>
          <p>
          With over 10 years of experience in personal training, John specializes in strength and conditioning. His passion for fitness and helping others achieve their goals makes him an invaluable member of our team. John believes that every individual has unique needs, and he tailors his training programs to ensure each client reaches their highest potential. He also emphasizes the importance of mental resilience, teaching clients to overcome barriers and stay motivated throughout their fitness journeys. In addition to his training expertise, John actively participates in community fitness events, sharing knowledge and inspiring others to embrace a healthier lifestyle. His commitment extends beyond the gym, as he fosters a supportive environment where clients feel empowered to challenge themselves and celebrate their progress.
          </p>
        </div>
        <div className="card" style={{width: "45%", height: "115vh"}}>
          <img src="./Trainer2.jpg" alt="Nutrition coach" className="card-image" />
          <h2 className="card-text">Jane Smith - Nutrition Coach</h2>
          <p>
          Jane is a certified nutritionist dedicated to guiding our members on their dietary journeys. Her holistic approach to wellness ensures that our clients receive tailored advice that complements their fitness regimes. By integrating nutrition education with practical meal planning, she empowers individuals to make sustainable lifestyle changes. With a focus on balanced eating and mindful practices, Jane helps clients cultivate a positive relationship with food, fostering both physical health and emotional well-being. She also conducts workshops and one-on-one sessions, providing personalized support that addresses individual challenges and goals. Her commitment to continuous learning allows Jane to stay updated on the latest nutrition trends, ensuring our members receive the best guidance on their path to wellness.
          </p>
        </div>
        <div className="card" style={{width: "45%", height: "80vh"}}>
          <img src="./Trainer3.jpg" alt="Group Fitness" className="card-image" />
          <h2 className="card-text">ISHIMWE Prince Arnaud - Group Fitness Instructor</h2>
          <p>
            Our nutrition experts provide personalized meal plans and guidance to complement 
            your fitness routine and help you achieve optimal health.
          </p>
          <p>
            Learn how to balance your diet effectively with tailored nutrition strategies 
            that align with your fitness goals and lifestyle.
          </p>
        </div>
        <div className="card" style={{width: "45%", height: "80vh"}}>
          <img src="./Trainer4.webp" alt="Spa & Recovery Trainer" className="card-image" />
          <h2 className="card-text">Emily Johnson - Spa & Recovery Director</h2>
          <p>
            Relax and rejuvenate with our spa services including massages, saunas, and 
            cryotherapy, designed to aid recovery and enhance performance.
          </p>
          <p>
            Our recovery services help reduce muscle soreness, improve circulation, and 
            promote overall well-being, ensuring you stay at your peak.
          </p>
        </div>
      </div>
    </div>
    )
}

export default Experts;