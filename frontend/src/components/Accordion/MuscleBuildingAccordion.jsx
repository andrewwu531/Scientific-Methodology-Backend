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
      content:
        "With a 1st class masters degree in Biology at the University of Glasgow, I possessed the theoretical background in sport nutrition and mechanisms.\
        Throughout my 10 year professional career, I have trained over 10k bodybuilders and athletics to achieve optimal sport performance.",
      pk: "4",
    },
    {
      title: "Q5 - Social Media",
      contentType: "text",
      content:
        "With a 1st class masters degree in Biology at the University of Glasgow, I possessed the theoretical background \
        in sport nutrition and mechanisms. Throughout my 10 year professional career, I have trained over 10k bodybuilders and athletics to achieve optimal sport performance.",
      pk: "5",
    },
  ];

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
      // case "link":
      //   return (
      //     <a
      //       href={content}
      //       target="_blank"
      //       rel="noopener noreferrer"
      //       className="mx-10 mb-5 text-lg text-medium text-grey-800 hover:text-grey-900"
      //     >
      //       {content}
      //     </a>
      //   );
      default:
        return <p className="mx-10 mb-5 text-lg text-medium">{content}</p>;
    }
  };

  return (
    <div
      className="flex flex-col items-center justify-center py-4 mt-12 bg-neutral-900 mx-atuo"
      style={{ marginBottom: "10vh" }}
    >
      <div
        className="flex justify-center pt-10 pb-4 text-4xl font-bold text-center text-neutral-300"
        style={{ marginBottom: "5vh" }}
      >
        Team FAQ
      </div>

      <div style={{ width: "50vw" }}>
        {data.map(({ title, content, contentType, pk }) => (
          <Accordion
            key={title}
            value={title}
            open={open === pk}
            icon={<Icon id={pk} open={pk} />}
          >
            <AccordionHeader
              onClick={() => handleOpen(pk)}
              className="mb-4 space-x-10 font-bold no-underline border-0 px-7 bg-black-1 text-md text-neutral-300"
            >
              {title}
            </AccordionHeader>
            <AccordionBody className="text-xs">
              {renderContent(contentType, content)}
            </AccordionBody>
          </Accordion>
        ))}
      </div>

      <div className="pb-12 mt-12">
        <RegisterButton href={routes.LOGIN} className="px-6 py-3">
          Register/ Log In
        </RegisterButton>
      </div>
    </div>
  );
}

Icon.propTypes = {
  id: PropTypes.string.isRequired,
  open: PropTypes.string.isRequired,
};
