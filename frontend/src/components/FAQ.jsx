import React from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
  Button,
} from "@material-tailwind/react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

function Icon({ id, open }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
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

export default function FAQ() {
  const [open, setOpen] = React.useState(0);
  const navigate = useNavigate();

  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  const data = [
    {
      title: "Q1 - Company Mission",
      contentType: "text",
      content: `Upper Performance was founded with the mission to establish a global knowledge hub, bringing together top-tier, skill-based programmes on a single platform. 
        \nOur course catalogues are wide-ranging, from mastering the art of High School and University Exams, Soft Skills to English Langauge and General & Professional Knowledge. There are surely some courses here that are relevant to your personal and professional development.
        \n We hope you found progression and reached new heights of success with Upper Performance!`,
      pk: "1",
    },
    {
      title:
        "Q2 - How Upper Performance Stands Out From The Other Leading Platforms?",
      contentType: "text",
      content: `Upper Performance distinguishes itself from other leading platforms through our team of expert content creators who are leaders in their respective fields. Our quality team continuously reviews and enhances our course materials and delivery methods to ensure the highest quality video content within our knowledge hub.`,
      pk: "2",
    },
    {
      title: "Q3 - Customer Support",
      contentType: "text",
      content: `If you have any questions or feedback regarding Upper Performance, feel free to contact us at upper_performance@gmail.com. We are keen to help you resolve any issues that you encountered and also highly appreciate your input!`,
      pk: "3",
    },
    {
      title: "Q4 - Your Monthly Subscription",
      contentType: "text",
      content: `At Upper Performance, we pride ourselves on delivering high-quality and affordable educational content. Our monthly subscription is priced at £24.99, and you will have the flexibility to cancel your membership at any time. 
                \nTo cancel your membership, you simply log into your account and click [here]. You will receive a confirmation email which denotes the cancellation of the recurring payment and the last date you will have access to our member services.`,
    },
    {
      title: "Q5 - Legal & Privacy Statements",
      contentType: "text",
      content: `Upper Performance is a registered UK company that complies with all standard legal and privacy regulations. You can view our legal and privacy statement [here].`,
      pk: "5",
    },
  ];

  const renderContent = (contentType, content) => {
    return (
      <p
        className="mx-10 mt-4 text-lg md:mt-6 mb-7 md:mb-10 text-neutral-200"
        style={{ whiteSpace: "pre-line" }}
      >
        {content}
      </p>
    );
  };

  const handleClick = () => {
    navigate("/login");
  };

  return (
    <div>
      <div className="hidden md:block">
        <div className="flex flex-col items-center justify-center mx-auto bg-black">
          <div className="flex justify-center pt-7 text-4xl font-bold text-center text-neutral-200 mb-[5vh]">
            Frequently Asked Questions
          </div>

          <div style={{ width: "55vw" }}>
            {data.map(({ title, content, contentType, pk }) => (
              <Accordion
                key={title}
                value={title}
                open={open === pk}
                icon={<Icon id={pk} open={pk} />}
                className="mb-4 bg-black"
              >
                <AccordionHeader
                  onClick={() => handleOpen(pk)}
                  className="px-10 py-4 text-lg font-bold no-underline border-none text-start text-neutral-200 bg-neutral-950"
                >
                  {title}
                </AccordionHeader>
                <AccordionBody>
                  {renderContent(contentType, content)}
                </AccordionBody>
              </Accordion>
            ))}
          </div>
        </div>
      </div>
      <div className="block md:hidden">
        <div className="flex flex-col items-center justify-center mx-auto bg-black">
          <div className="flex justify-center pt-7 text-2xl font-bold text-center text-neutral-200 mb-[2vh]">
            Frequently Asked Questions
          </div>

          <div style={{ width: "85vw" }}>
            {data.map(({ title, content, contentType, pk }) => (
              <Accordion
                key={title}
                value={title}
                open={open === pk}
                icon={<Icon id={pk} open={pk} />}
                className="mb-2 bg-black"
              >
                <AccordionHeader
                  onClick={() => handleOpen(pk)}
                  className="py-4 font-bold no-underline border-none text-md px-9 text-start text-neutral-200 bg-neutral-950"
                >
                  {title}
                </AccordionHeader>
                <AccordionBody>
                  {renderContent(contentType, content)}
                </AccordionBody>
              </Accordion>
            ))}
          </div>
          <div className="mt-[3vh]">
            <button
              onClick={handleClick}
              className="px-8 py-3.5 font-sans font-bold text-black bg-purple-900 rounded-lg text-md"
            >
              Register/ Log In
            </button>{" "}
          </div>
        </div>
      </div>
    </div>
  );
}

Icon.propTypes = {
  id: PropTypes.string.isRequired,
  open: PropTypes.string.isRequired,
};
