import React from "react";

const About = () => {
  return (
    <section  id='about' className="py-12 px-4 bg-black text-gray-100">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl font-bold mb-6 text-center">About Technova</h2>
        <p className="text-lg text-center leading-relaxed mb-4">
          Technova is an exciting technical symposium that brings together innovative minds
          to explore cutting-edge technologies and share groundbreaking ideas. Our event
          features a variety of technical workshops, paper presentations, hackathons, and
          engaging panel discussions.
        </p>
        <p className="text-lg text-center leading-relaxed mb-4">
          With a mission to foster creativity and technical excellence, Technova provides
          a platform for students and professionals to showcase their skills, exchange
          knowledge, and connect with industry leaders. Join us to be a part of this
          inspiring journey into the future of technology!
        </p>
      </div>
    </section>
  );
};

export default About;
