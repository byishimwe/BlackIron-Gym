import React, { useState } from 'react';
import '../Styles/Home/FAQs.css';

function FAQs() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqData = [
    {
      question: "What are the gym's operational hours, and are there any changes during holidays or weekends?",
      answer: "Our gym operates from 5:00 AM to 11:00 PM every day, including weekends. On public holidays, our hours may vary, so we recommend checking our website or contacting the front desk for any updates."
    },
    {
      question: "Is it mandatory to purchase a membership, or do you allow pay-per-visit options for occasional visitors?",
      answer: "While we primarily offer membership plans for regular visitors, we also provide a pay-per-visit option for those who prefer occasional access. However, members receive exclusive benefits, including discounts on classes and personal training."
    },
    {
      question: "Do you offer personalized one-on-one training sessions, and how can I book a session with a certified trainer?",
      answer: "Yes, we have experienced and certified personal trainers who design customized workout programs based on your fitness goals. You can book a session through our website, at the reception desk, or by contacting us via phone."
    },
    {
      question: "Are group fitness classes included in the standard gym membership, or do they require additional payments?",
      answer: "Many of our group fitness classes, such as yoga, HIIT, and strength training, are included in the membership. However, specialized classes like advanced martial arts or private coaching may require an additional fee."
    },
    {
      question: "What types of facilities and equipment does your gym provide for strength training and cardio workouts?",
      answer: "We offer a state-of-the-art weightlifting section with free weights, resistance machines, and squat racks. Our cardio area includes treadmills, stationary bikes, rowing machines, and elliptical trainers to cater to all fitness levels."
    },
    {
      question: "Is there an option to try the gym for free before committing to a membership plan?",
      answer: "Yes, we provide a one-day free trial for first-time visitors. This allows you to explore our facilities, participate in group classes, and experience our gym environment before making a commitment."
    },
    {
      question: "Do you have professional nutritionists to help with meal planning and dietary recommendations?",
      answer: "Absolutely! Our gym offers nutrition coaching, where certified dietitians create personalized meal plans based on your fitness goals, dietary preferences, and health conditions."
    },
    {
      question: "Can I temporarily pause my membership in case of travel, illness, or personal reasons?",
      answer: "Yes, we allow members to freeze their membership for a specific period in case of travel, medical conditions, or emergencies. Terms and conditions may apply, so please check with our team for details."
    },
    {
      question: "Is parking available for gym members, and do you provide bicycle storage or alternative transport facilities?",
      answer: "Yes, we have a dedicated parking area for members. We also offer secure bicycle racks and encourage eco-friendly commuting options to promote a healthy lifestyle."
    }
  ];

  return (
    <section className="faqs">
      <h1>Frequently Asked Questions</h1>
      <div className="faq-container">
        {faqData.map((faq, index) => (
          <div key={index} className="faq">
            <h3 onClick={() => toggleFAQ(index)}>
              {faq.question}
              <span className="arrow">{openIndex === index ? "🡅" : "🡇"}</span>
            </h3>
            <p className={`faq-answer ${openIndex === index ? 'open' : ''}`} style={{color: "dodgerblue"}}>
              {faq.answer}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default FAQs;