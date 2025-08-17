import React, { useState } from 'react';

const Faq = ({
  title = "Frequently Asked Questions",
  items = [
    {
      question: "What makes De Globe Café special?",
      answer: "De Globe Café offers a unique blend of authentic flavors and cozy ambiance. Every sip, every bite, and every moment is crafted with love. From our signature Chai Kulhad to perfectly brewed Cold Coffee, we use premium ingredients ensuring a taste that lingers long after your last sip."
    },
    {
      question: "What are your operating hours?",
      answer: "We are open daily from 8:00 AM to 11:00 PM. Whether you need your morning coffee fix or a late evening snack, we're here to serve you with the same passion and quality throughout the day."
    },
    {
      question: "Do you offer catering services?",
      answer: "Yes! We provide catering services for events, meetings, and special occasions. Our catering menu includes our popular beverages, fresh food items, and special platters. Contact us in advance to discuss your requirements and we'll create a customized package for your event."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major payment methods including cash, credit/debit cards, UPI payments, and digital wallets. We strive to make your payment experience as convenient as possible."
    },
    {
      question: "Do you have vegetarian and vegan options?",
      answer: "Absolutely! We have a wide variety of vegetarian options including our popular Veg Creamy Burger, Veg Momos, and various vegetarian noodles. We also offer plant-based milk alternatives for our beverages to cater to vegan preferences."
    },
    {
      question: "Can I book a table in advance?",
      answer: "While we operate on a first-come, first-served basis for most seating, we do accept reservations for larger groups or special occasions. Please call us or visit our café to make arrangements for your visit."
    }
  ],
  className = ""
}) => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className={`py-16 px-8 bg-[#161916] ${className}`}>
      <div className="max-w-4xl mx-auto">
        <h2 className="text-center text-4xl md:text-5xl font-bold text-white mb-12">
          {title}
        </h2>
        
        {items && items.length > 0 && (
          <div className="space-y-4">
            {items.map((item, index) => (
              <div
                key={index}
                className="bg-[#2a2a2a] rounded-lg overflow-hidden border border-gray-700"
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-[#3a3a3a] transition-colors duration-200"
                >
                  <span className="text-lg font-semibold text-white pr-4">
                    {item.question}
                  </span>
                  <span className="text-orange-500 text-2xl font-bold flex-shrink-0">
                    {openIndex === index ? '−' : '+'}
                  </span>
                </button>
                
                {openIndex === index && (
                  <div className="px-6 pb-4 pt-2">
                    <div className="text-gray-300 leading-relaxed">
                      {typeof item.answer === 'string' ? (
                        <p>{item.answer}</p>
                      ) : (
                        item.answer
                      )}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Faq;
