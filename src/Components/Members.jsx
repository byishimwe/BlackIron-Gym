import { Link } from 'react-router-dom'

function Members() {
          return (
                    <div id='about'>
                    <div className='about'>
                              <h1>Become a Member Today</h1>
                              <p>Take the first step towards a healthier lifestyle.</p>
                    </div>
                    <div className="container nowrap">
                              <div className="card" style={{ height: "80vh" }}>
                                        <img src="../public/Membership.webp" alt="Card 1" className="card-image" />
                                        <h2 className="card-text">Flexible Membership Options</h2>
                                        <p>
                                        We offer a variety of membership plans tailored to fit your needs and schedule. Whether you're looking for a short-term commitment or a long-term partnership, we have options that make fitness accessible and convenient for everyone.
                                        </p>
                                        <Link to="/about">
                                                  <button className='class-button'>Learn More</button>
                                        </Link>
                              </div>
                              <div className="card" style={{ height: "80vh" }}>
                                        <img src="../public/Membership2.webp" alt="Card 2" className="card-image" />
                                        <h2 className="card-text">Free Trial Available</h2>
                                        <p>
                                        Not sure if our gym is the right fit for you? Sign up for a free trial and experience our facilities, classes, and community without any commitment. It’s the perfect way to explore everything we offer and see how we can support your fitness journey.
                                        </p>
                                        <Link to="/about">
                                                  <button className='class-button'>Learn More</button>
                                        </Link>
                              </div>
                              <div className="card"  style={{ height: "80vh" }}>
                                        <img src="../public/Membership3.webp" alt="Card 3" className="card-image" />
                                        <h2 className="card-text">Join a Thriving Community</h2>
                                        <p>
                                        By becoming a member, you’ll not only gain access to top-notch facilities and expert guidance, but you’ll also join a vibrant community of fitness enthusiasts. Connect with others, share your journey.
                                        </p>
                                        <Link to="/about">
                                                  <button className='class-button'>Learn More</button>
                                        </Link>
                              </div>
                    </div>
                    </div>
          )
}

export default Members