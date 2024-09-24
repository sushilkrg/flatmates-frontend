import React from "react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Akash Garg",
      feedback:
        "I found the perfect flatmate within a week! This platform is super easy to use.",
    },
    {
      name: "Yashika Verma",
      feedback: "Great experience! Found a roommate that shares my interests.",
    },
    {
      name: "Harkirat Singh",
      feedback:
        "This is a great platform to search for flatmates. I could easily narrow down my search.",
    },
  ];

  return (
    <section className="py-16 h-auto px-4 bg-white">
      <h2 className="text-2xl text-black font-semibold text-center mb-12">What People Are Saying</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="bg-gray-100 p-10 rounded-lg shadow-md text-center"
          >
            <p className="text-gray-800 italic mb-4">"{testimonial.feedback}"</p>
            <h3 className="font-semibold text-lg text-blue-600">
              - {testimonial.name}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
