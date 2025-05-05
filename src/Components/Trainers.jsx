import { useState } from "react";
import "../Styles/Trainers.css";

const trainers = [
  {
    name: "John Carter",
    image: "./Person.jpg",
    specialties: ["Strength Training", "Bodybuilding", "Weight Loss"],
    certifications: ["CPT - NASM", "Strength & Conditioning Specialist"],
    social: {
      instagram: "https://www.instagram.com/ishkpro/",
      linkedin: "https://www.linkedin.com/in/ishimwe-prince-arnaud-601425338/",
    },
    review: "John's training plans transformed my fitness! I’ve never felt stronger.",
  },
  {
    name: "Emily Brooks",
    image: "./Trainer3.jpg",
    specialties: ["Yoga", "Flexibility Training", "Mindfulness"],
    certifications: ["RYT 500", "Certified Yoga Therapist"],
    social: {
      instagram: "https://www.instagram.com/ishkpro/",
      linkedin: "https://www.linkedin.com/in/ishimwe-prince-arnaud-601425338/",
    },
    review: "Emily’s classes have improved my flexibility and reduced my stress levels!",
  },
  {
    name: "John Carter",
    image: "./Person.jpg",
    specialties: ["Strength Training", "Bodybuilding", "Weight Loss"],
    certifications: ["CPT - NASM", "Strength & Conditioning Specialist"],
    social: {
      instagram: "https://www.instagram.com/ishkpro/",
      linkedin: "https://www.linkedin.com/in/ishimwe-prince-arnaud-601425338/",
    },
    review: "John's training plans transformed my fitness! I’ve never felt stronger.",
  },
  {
    name: "John Carter",
    image: "./Person.jpg",
    specialties: ["Strength Training", "Bodybuilding", "Weight Loss"],
    certifications: ["CPT - NASM", "Strength & Conditioning Specialist"],
    social: {
      instagram: "https://www.instagram.com/ishkpro/",
      linkedin: "https://www.linkedin.com/in/ishimwe-prince-arnaud-601425338/",
    },
    review: "John's training plans transformed my fitness! I’ve never felt stronger.",
  },
  {
    name: "Emily Brooks",
    image: "./Trainer3.jpg",
    specialties: ["Yoga", "Flexibility Training", "Mindfulness"],
    certifications: ["RYT 500", "Certified Yoga Therapist"],
    social: {
      instagram: "https://www.instagram.com/ishkpro/",
      linkedin: "https://www.linkedin.com/in/ishimwe-prince-arnaud-601425338/",
    },
    review: "Emily’s classes have improved my flexibility and reduced my stress levels!",
  },
  {
    name: "Mike Johnson",
    image: "./Trainer4.jpg",
    specialties: ["HIIT", "Boxing", "Cardio Conditioning"],
    certifications: ["ACE Certified", "Boxing Coach Level 2"],
    social: {
      instagram: "https://www.instagram.com/ishkpro/",
      linkedin: "https://www.linkedin.com/in/ishimwe-prince-arnaud-601425338/?lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3BL4MaemhqRpybNkiOrCVeHQ%3D%3D",
    },
    review: "Mike pushes me beyond my limits! The best HIIT sessions ever!",
  },
  {
    name: "Sarah Thompson",
    image: "./1.jpg",
    specialties: ["Pilates", "Core Strength", "Posture Correction"],
    certifications: ["Pilates Method Alliance Certified", "Postural Alignment Specialist"],
    social: {
      instagram: "https://www.instagram.com/sarahthompson_fit/",
      linkedin: "https://www.linkedin.com/in/sarah-thompson-123456789/",
    },
    review: "Sarah’s Pilates sessions have transformed my core strength and posture. Highly recommend her!",
  },
  {
    name: "James Wilson",
    image: "./2.jpg",
    specialties: ["CrossFit", "Olympic Weightlifting", "Endurance Training"],
    certifications: ["CrossFit Level 3 Trainer", "USA Weightlifting Coach"],
    social: {
      instagram: "https://www.instagram.com/jameswilson_fit/",
      linkedin: "https://www.linkedin.com/in/james-wilson-987654321/",
    },
    review: "James is an incredible coach! His CrossFit programs are challenging but so rewarding.",
  },
];

function TrainerCard({ trainer }) {
  return (
    <div className="trainer-card">
      <img src={trainer.image} alt={trainer.name} className="trainer-image" />
      <h2>{trainer.name}</h2>
      <p><strong>Specialties:</strong> {trainer.specialties.join(", ")}</p>
      <p><strong>Certifications:</strong> {trainer.certifications.join(", ")}</p>
      <div className="social-links">
        <a href={trainer.social.instagram} target="_blank" rel="noopener noreferrer">
          <img src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png" alt="Instagram" />
        </a>
        <a href={trainer.social.linkedin} target="_blank" rel="noopener noreferrer">
          <img src="https://cdn-icons-png.flaticon.com/512/145/145807.png" alt="LinkedIn" />
        </a>
      </div>
      <p className="review">"{trainer.review}"</p>
    </div>
  );
}

// ✅ Export each function separately
export function TrainerSpotlight() {
  return (
    <div className="trainer-spotlight">
      <h2>Trainer of the Week</h2>
      <TrainerCard trainer={trainers[0]} />
    </div>
  );
}

export function TrainingPrograms() {
  return (
    <div className="training-programs">
      <h2>Our Training Programs</h2>
      <ul>
        <li><strong>Weight Loss Bootcamp:</strong> High-intensity workouts to shed fat fast.</li>
        <li><strong>Strength Training:</strong> Build muscle with expert guidance.</li>
        <li><strong>HIIT Sessions:</strong> Short, intense workouts for maximum results.</li>
      </ul>
    </div>
  );
}

export function ClientTransformations() {
  return (
    <div className="client-transformations">
      <h2>Success Stories</h2>
      <p>See the amazing transformations of our clients.</p>
      <img src="./before1.jpg" alt="Before" />
      <img src="./after1.jpg" alt="After" />
    </div>
  );
}

export function LiveSessions() {
  return (
    <div className="live-sessions">
      <h2>Upcoming Live Sessions</h2>
      <button>Join Now</button>
    </div>
  );
}

export function TrainerCategories({ setFilter }) {
  return (
    <div className="trainer-categories">
      <h2>Filter by Specialty</h2>
      {["Yoga", "Strength Training", "Cardio"].map((category, index) => (
        <button key={index} onClick={() => setFilter(category)}>{category}</button>
      ))}
    </div>
  );
}

export function FAQ() {
  return (
    <div className="faq">
      <h2>Frequently Asked Questions</h2>
      <p><strong>How much does training cost?</strong> - Prices vary by trainer.</p>
      <p><strong>Are certifications verified?</strong> - Yes, all trainers are certified.</p>
    </div>
  );
}

export function Testimonials() {
  return (
    <div className="testimonials">
      <h2>What Our Clients Say</h2>
      <p>"This training program changed my life!" - Alex</p>
      <p>"Amazing coaches and great results!" - Sarah</p>
    </div>
  );
}

export function JoinOurTeam() {
  return (
    <div className="join-our-team">
      <h2>Become a Trainer</h2>
      <button>Apply Now</button>
    </div>
  );
}

export function TrainerComparison() {
  return (
    <div className="trainer-comparison">
      <h2>Compare Our Trainers</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Specialties</th>
            <th>Certifications</th>
          </tr>
        </thead>
        <tbody>
          {trainers.map((trainer, index) => (
            <tr key={index}>
              <td>{trainer.name}</td>
              <td>{trainer.specialties.join(", ")}</td>
              <td>{trainer.certifications.join(", ")}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function Trainers() {
  const [filter, setFilter] = useState(null);

  const filteredTrainers = filter ? trainers.filter((t) => t.specialties.includes(filter)) : trainers;

  return (
    <article className="trainers-section">
      <h1>Meet Our Trainers</h1>
      <TrainerSpotlight />
      <TrainerCategories setFilter={setFilter} />
      <TrainingPrograms />
      <ClientTransformations />
      <LiveSessions />
      <Testimonials />
      <FAQ />
      <JoinOurTeam />
      <TrainerComparison />
      <div className="trainer-list">
        {filteredTrainers.map((trainer, index) => (
          <TrainerCard key={index} trainer={trainer} />
        ))}
      </div>
    </article>
  );
}

// ✅ Default export for Trainers
export default Trainers;