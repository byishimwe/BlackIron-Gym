import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

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
    },
    {
      question: "Can I bring a guest with me to the gym, and if so, what are the guest policies?",
      answer: "Yes, members are allowed to bring guests. We offer guest passes for a small fee, and the guest can enjoy the same access to our facilities. However, guests must be accompanied by the member at all times during their visit."
    }
  ];

  return (
    <section className="faqs py-16 px-6 bg-gray-100">
      <h1 className="text-3xl font-semibold text-center text-gray-800 mb-12">Frequently Asked Questions</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
        {faqData.map((faq, index) => (
          <div key={index} className="bg-white rounded-xl shadow-md transition-shadow duration-300 hover:shadow-xl">
            <div
              onClick={() => toggleFAQ(index)}
              className="p-5 cursor-pointer flex justify-between items-center"
            >
              <h3 className="text-lg font-semibold text-gray-800">{faq.question}</h3>
              <motion.span
                className="ml-4 text-2xl"
                animate={{ rotate: openIndex === index ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                🡇
              </motion.span>
            </div>

            <AnimatePresence initial={false}>
              {openIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="px-5 pb-4 text-blue-600">
                    {faq.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
}

export default FAQs;