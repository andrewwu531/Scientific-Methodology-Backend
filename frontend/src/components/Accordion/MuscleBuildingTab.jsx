import React from "react";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
  Button,
} from "@material-tailwind/react";

export default function UnderlineTabs() {
  const [activeTab, setActiveTab] = React.useState(
    "programme 1: Nutrition & Weightlifting"
  );
  const data = [
    {
      label: "Programme 1: Nutrition & Weightlifting",
      value: "programme 1: Nutrition & Weightlifting",
      url: "/weightlifting-course",
      button: "Nutrition & Weightlifting",
      descriptions: [
        {
          header: "Nutrition",
          points: [
            "1.1. Bodybuilding is 80% dieting & 20% workout",
            "1.2. Why the medium calories, high protein, medium carbohydrate & low fat diet",
            "1.3. Calculating your personalised recommended calories, protein, carbohydrate & fat intake",
            "1.4. The importance of food choices (meat, pasta, sauce, vegs, oil... )",
            "1.5. Carb cycling & the front heavy approach dieting",
            "1.6. Practical recipes & cooking appliances",
          ],
        },
        // {
        //   header: "Weightlifting",
        //   points: [
        //     "2.1. Muscle Types & Training Methods",
        //     "2.2. Weightlifting Techniques",
        //     "2.3. A Practical Gym Session",
        //     "2.4. HIIT & Calisthenics & Plyometric",
        //   ],
        // },
      ],
    },
    {
      label: "Programme 2: 100+ Topic-Based Journals with Videos",
      value: "programme 2: 100+ Topic-Based Journals with Videos",
      url: "/english-course",
      button: "English Language",
      descriptions: [
        {
          header: "Social Knowledge Accelerator",
          points: [
            "1.1. Why writing life journals & summaries are important to improve your social English",
            "1.2. The 100+ journals & summaries with analysis",
            "1.3. Topics that we cover (life experience, travel, comedy, TV & films, facts...)",
            "1.4. Speak confidently and natively with momentum through our expert articles and speaking programme",
            "1.5. Introducing our proofreading service",
          ],
        },
      ],
    },
    {
      label: "Programme 3: The English Pronunciation & Speaking Course",
      value: "programme 3: The English Pronunciation & Speaking Course",
      url: "/english-course",
      button: "English Language",
      descriptions: [
        {
          header: "The English Speaking Course",
          points: [
            "1.1. The standard English pronunciation course",
            "1.2. Speaking style and patterns",
            "1.3. Acquiring the confident voice through positive psychology",
            "1.4. Positive body language & expressions",
          ],
        },
      ],
    },
    // {
    //   label: "Programme 4: The English Writing Course",
    //   value: "programme 4: The English Writing Course",
    //   url: "/english-course",
    //   button: "English Language",
    //   descriptions: [
    //     {
    //       header: "The English Writing Course",
    //       points: [
    //         "1.1. Why emotional tapping & sense of humour important",
    //         "1.2. Comedy writing principles",
    //         "1.3. Storytelling principles",
    //         "1.4. 40+ word-by-word comedy show scripts with analysis",
    //       ],
    //     },
    //   ],
    // },
    // {
    //   label: "Programme 5: The Mastermind Psychology Course",
    //   value: "programme 5: The Mastermind Psychology Course",
    //   url: "/english-course",
    //   button: "English Language",
    //   descriptions: [
    //     {
    //       header: "Nurture Your Mind",
    //       points: [
    //         "1.1. Positive mind",
    //         "1.2. Positive habits",
    //         "1.3. Positive personality & traits",
    //         "1.4. Self-awareness",
    //         "1.5. Positive way of thinking",
    //       ],
    //     },
    //   ],
    // },
  ];

  return (
    <div className="bg-gray-150">
      <div
        className="flex items-start justify-center mx-auto xl:max-w-6xl lg:max-w-5xl"
        style={{ marginTop: "15vh", marginBottom: "7vh" }}
      >
        <Tabs value={activeTab}>
          <TabsHeader
            className="bg-transparent border-b rounded-none border-blue-gray-50"
            indicatorProps={{
              className:
                "bg-transparent border-b-2 border-gray-700 h-20 shadow-none rounded-none top-3",
            }}
          >
            {data.map(({ label, value }) => (
              <Tab
                key={value}
                value={value}
                onClick={() => setActiveTab(value)}
                className={activeTab === value ? "text-gray-900" : ""}
              >
                <div className="font-medium">{label}</div>
              </Tab>
            ))}
          </TabsHeader>

          <TabsBody>
            {data.map(({ value, descriptions, button }) => (
              <TabPanel key={value} value={value}>
                {descriptions.map((description, index) => (
                  <div className="ml-10" key={index}>
                    <h3 className="py-10 font-semibold text-black pb-30">
                      {description.header}
                    </h3>
                    {description.points.map((point, pointIndex) => (
                      <li className="mb-3 ml-8 font-normal" key={pointIndex}>
                        {point}
                      </li>
                    ))}
                  </div>
                ))}

                <div
                  className="flex items-center justify-center"
                  style={{ paddingTop: "6vh" }}
                >
                  <Button
                    size="lg"
                    color="white"
                    className="flex items-center justify-center gap-4 px-10 py-4"
                  >
                    <div>Check out our {button} course </div>
                    <div> {">>>"} </div>
                  </Button>
                </div>
              </TabPanel>
            ))}
          </TabsBody>
        </Tabs>
      </div>
    </div>
  );
}
