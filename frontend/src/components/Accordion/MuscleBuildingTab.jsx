import React from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
  Button,
} from "@material-tailwind/react";
import PropTypes from "prop-types";
import RegisterButton from "../Buttons/RegisterButton";
import { routes } from "../../shared/routes";

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

export default function NutritionCourseAccordion() {
  const [open, setOpen] = React.useState(0);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  const data = [
    {
      title: "Q1 - Qualifications & Experience",
      contentType: "text",
      content:
        "With a 1st class masters degree in Biology at the University of Glasgow, I possessed the theoretical background in sport nutrition and mechanisms. \
         Throughout my 10 year professional career, I have trained over 10k bodybuilders and athletics to achieve optimal sport performance.",
      pk: "1",
    },
    {
      title: "Q2 - Before & After Bodybuilding Transformation",
      contentType: "text",
      content: "Hi",
      pk: "2",
    },
    {
      title: "Q3 - How Easy Is The Diet?",
      contentType: "text",
      content: "It is very easy!",
      pk: "3",
    },
    {
      title:
        "Q4 - How This Programme Stands Out From The Other Leading Courses?",
      contentType: "text",
      content: "",
      pk: "4",
    },
    {
      title: "Q5 - Social Media",
      contentType: "text",
      content: "Good",
      pk: "5",
    },
  ];

  const renderContent = (contentType, content) => {
    return (
      <p className="mb-10 text-xl mt-7 mx-14 text-neutral-200">{content}</p>
    );
  };

  return (
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
              className="px-10 py-4 font-bold no-underline border-none text-md text-neutral-300 bg-neutral-950"
            >
              {title}
            </AccordionHeader>
            <AccordionBody>{renderContent(contentType, content)}</AccordionBody>
          </Accordion>
        ))}
      </div>

      {/* <div className="mt-[6vh]">
        <button
          href={routes.LOGIN}
          className="px-10 py-3.5 font-sans text-lg font-bold text-black bg-yellow-500 rounded-lg"
        >
          Register/ Log In
        </button>{" "}
      </div> */}
    </div>
  );
}

Icon.propTypes = {
  id: PropTypes.string.isRequired,
  open: PropTypes.string.isRequired,
};
