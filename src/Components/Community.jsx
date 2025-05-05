function CommunityCard({image, alt, title, description}) {
  return(
    <div className="card" style={{height: "70vh"}}>
      <img src={image} alt={alt} className="card-image" />
      <h2 className="card-text">{title}</h2>
      <p>{description}</p>
    </div>
  )
}

function Community() {

  const CommunityEvents = [
    {
      image: "./Community1.webp",
      alt: "Head Trainer",
      title: "Annual Fitness Challenge",
      description: "Each year, we host a month-long fitness challenge that encourages members to push their limits. Participants engage in various workouts and activities designed to enhance their physical abilities, culminating in a celebration event where achievements are recognized and rewarded."
    },
    {
      image: "./Community2.webp",
      alt: "Nutrition Coach",
      title: "Community Health Fair",
      description: "Our gym organizes an annual health fair that invites local businesses and health professionals to educate the community on wellness topics. This event features free health screenings, nutrition workshops, and fitness demonstrations, fostering a culture of health and awareness."
    },
    {
      image: "./Community3.webp",
      alt: "Group Fitness",
      title: "Charity Workout Days",
      description: "To give back to those in need, we host charity workout days where all proceeds go to local organizations. These events not only promote fitness but also strengthen community ties as members come together for a common cause, making a positive impact on those less fortunate."
    }
  ]
  
  return (
    <div id='community'>
      <div className='community'>
        <h1>Building a Healthier Community</h1>
        <p style={{textAlign: "center"}}>Our Impact Through Engagement</p>
      </div>
      <div className="container nowrap">
        {
          CommunityEvents.map((event, index) => (
            <CommunityCard key={index} {...event} />
          ))
        }
      </div>
    </div>
  )
}

export default Community