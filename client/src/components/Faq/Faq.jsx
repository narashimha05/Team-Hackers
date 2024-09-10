import React, { useState } from "react";
import Accordion from "./Accordion";
import "./Faq.css";
export default function Faq() {
  const accordionData = [
    {
      serial: "01",
      question: "What is HackHub ",
      answer:
        "HackHub is a platform crafted for individuals seeking to orchestrate events.",
    },
    {
      serial: "02",
      question: "How is it different?",
      answer:
        "HackHub is primarily devoted to tackling the principal challenges encountered by event organizers, providing innovative solutions to streamline and enhance their event management processes.",
    },
    {
      serial: "03",
      question: "How does HackHub ease the process of on-boarding sponsors?",
      answer:
        "Through HackHub, the laborious and time-consuming process of sourcing sponsors via web scraping is eradicated. Organizers gain the advantage of selecting sponsors based on their specific criteria, streamlining their search and enhancing their decision-making process.",
    },
    {
      serial: "04",
      question: "What are community partners? How does HackHub help with that?",
      answer: "Community Partners are the primary assets for publicity of the event. They would spread the word of the event in their respective community. HackHub lets you interact with these communities and their respective leads for an easy promotion and outreach.",
    },
    {
      serial: "05",
      question: "How is HackHub beneficial for designers?",
      answer:
        "HackHub lets desginers showcase their skills and earn through it by desgining in real world projects. ",
    },
    
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className=" flex justify-center pb-20">
      <div className="  w-4/6 h-full flex flex-col   ">
        <div className="w-full h-16"></div>
        <div className="accordion  w-full flex flex-col ">
          <div className="w-full flex justify-center items-center">
          
             
          </div>
          <h1 className="text-center text-blue-950 text-7xl font-bold font-poppins">FAQS</h1>
          <div className="w-full h-6"></div>
          <div className=" prob ">
          {accordionData.map((data, index) => (
            <Accordion
              key={index}
              question={data.question}
              isOpen={openIndex === index}
              toggleAccordion={() => toggleAccordion(index)}
              answer={data.answer}
            />
          ))}
          </div>
         
        </div>
      </div>
    </div>
  );
}