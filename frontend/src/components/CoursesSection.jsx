import React from "react";

const categories = [
  { name: "Trending Now", icon: "⭐" },
  { name: "Academic Excellence", icon: "🎓" },
  { name: "English Language Learning", icon: "📚" },
  { name: "Entrepreneurship & Investing", icon: "💼" },
  { name: "Sports & Athletics", icon: "🏅" },
  { name: "Business English", icon: "📝" },
  { name: "Science & Technology", icon: "🔬" },
  { name: "Film & TV", icon: "🎬" },
  { name: "Health & Wellness", icon: "😊" },
  { name: "Community & Government", icon: "🏛️" },
  { name: "Food & Drink", icon: "🍽️" },
  { name: "Music & Culture", icon: "🎵" },
  { name: "Outdoor Adventures & Events", icon: "🏞️" },
  { name: "Acting & Performing Arts", icon: "🎭" },
];

const classes = [
  {
    name: "Richard Branson",
    image: "url-to-richard-branson-image",
    title: "Teaches Disruptive Entrepreneurship",
  },
  {
    name: "Coach K",
    image: "url-to-coach-k-image",
    title: "Teaches Values-Driven Leadership",
  },
  {
    name: "Jon Kabat-Zinn",
    image: "url-to-jon-kabat-zinn-image",
    title: "Teaches Mindfulness and Meditation",
  },
];

const CoursesSection = () => {
  return (
    <div className="flex">
      <div className="w-1/4 p-4 text-white bg-black">
        <h2 className="text-red-500">All</h2>
        <ul className="mt-4">
          {categories.map((category) => (
            <li key={category} className="mt-2">
              {category.name}
            </li>
          ))}
        </ul>
      </div>
      <div className="flex justify-around w-3/4 p-4 text-white bg-gray-900">
        {classes.map((masterclass) => (
          <div key={masterclass.name} className="w-1/3 p-4">
            <div
              className="h-64 bg-center bg-cover rounded-lg"
              style={{ backgroundImage: `url(${masterclass.image})` }}
            >
              <div className="flex flex-col justify-end h-full p-4 rounded-lg bg-gradient-to-t from-black via-transparent to-transparent">
                <h3 className="text-2xl font-bold">{masterclass.name}</h3>
                <p className="mt-2">{masterclass.title}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CoursesSection;
