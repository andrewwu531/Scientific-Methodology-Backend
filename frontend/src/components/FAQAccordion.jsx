import React, { useEffect, useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import PropTypes from "prop-types";
import RegisterButton from "./Buttons/RegisterButton";
import { routes } from "../shared/routes";

function Icon({ id, open }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className={`${id === open ? "rotate-180" : ""} h-5 w-5 transition-transform`}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
      />
    </svg>
  );
}

export default function FAQAccordion({ course_url, setShowLogin }) {
  const [open, setOpen] = useState(0);
  const [faqs, setFaqs] = useState([]);

  const handleClick = () => {
    setShowLogin(true);
  };

  useEffect(() => {
    fetch(`http://127.0.0.1:8000/api/faq/${course_url}/`)
      .then((response) => response.json())
      .then((data) => {
        // Sort FAQs by faq_question_num before setting the state
        const sortedFaqs = data.sort(
          (a, b) => a.faq_question_num - b.faq_question_num
        );
        console.log("sortedFQAs, ", sortedFaqs);
        setFaqs(sortedFaqs);
      })
      .catch((error) => console.error("Error fetching category data:", error));
  }, [course_url]);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  const renderContent = (contentType, content) => {
    switch (contentType) {
      case "video":
        return (
          <video
            src={content}
            controls
            autoPlay
            preload="auto"
            type="video/mp4"
            className="w-full"
          >
            Your browser does not support the video tag.
          </video>
        );
      default:
        return <p className="mx-10 mb-5 text-lg text-medium">{content}</p>;
    }
  };

  return (
    <div
      className="flex flex-col items-center justify-center pt-4 mx-auto bg-neutral-900"
      style={{ marginBottom: "10vh" }}
    >
      <div
        className="flex justify-center pt-10 pb-4 text-4xl font-bold text-center text-neutral-300"
        style={{ marginBottom: "3vh" }}
      >
        Team FAQ
      </div>

      <div style={{ width: "50vw" }}>
        {faqs.length === 0 ? (
          <p className="text-neutral-300">No FAQs available.</p>
        ) : (
          faqs.map(({ faq_question_num, faq_answer, faq_question }) => (
            <Accordion
              key={faq_question_num}
              value={faq_question}
              open={open === faq_question}
              icon={<Icon id={faq_question} open={open === faq_question} />}
            >
              <AccordionHeader
                onClick={() => handleOpen(faq_question)}
                className="mb-4 space-x-10 font-bold no-underline border-0 px-7 bg-black-1 text-md text-neutral-300"
              >
                Q{faq_question_num} - {faq_question}
              </AccordionHeader>
              <AccordionBody className="text-xs">
                {renderContent("text", faq_answer)}
              </AccordionBody>
            </Accordion>
          ))
        )}
      </div>

      <div className="mt-10 ">
        <button
          onClick={handleClick}
          className="justify-center px-9 py-3.5 text-base font-bold text-black bg-yellow-400 rounded-lg hover:scale-105"
        >
          Register/ Log In
        </button>
      </div>
    </div>
  );
}

FAQAccordion.propTypes = {
  course_url: PropTypes.string.isRequired,
  setShowLogin: PropTypes.func.isRequired, // Add prop type for setShowLogin
};

Icon.propTypes = {
  id: PropTypes.string.isRequired,
  open: PropTypes.bool.isRequired,
};
