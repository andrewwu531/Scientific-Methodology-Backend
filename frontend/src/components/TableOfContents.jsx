export default function TableOfContents() {
  const categories = [
    { name: "Trending Now", icon: "⭐" },
    { name: "Academic Excellence", icon: "🎓" },
    { name: "English Language", icon: "📚" },
    { name: "Business English", icon: "📝" },
    { name: "General Knowledge", icon: "🎬" },
    { name: "Professional Knowledge", icon: "🔬" },
    { name: "Sports", icon: "🏅" },
    { name: "Health & Wellness", icon: "😊" },
    { name: "Food & Drink", icon: "🍽️" },
    { name: "Hair, Beauty & Fashion", icon: "🕶️" },
    { name: "CV & Interview Techniques", icon: "🏛️" },
    { name: "Entrepreneurship & Investing", icon: "💼" },
  ];

  return (
    <div className="flex flex-col w-full overflow-hidden mt-[4vh] bg-black relative px-[11vw]">
      <div className="flex flex-wrap justify-center gap-3 mb-14 px-[2vw]">
        {categories.map((category) => (
          <button
            key={category.name}
            className="flex items-center px-10 py-3 rounded-lg bg-neutral-950 text-neutral-200 hover:bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-yellow-600"
          >
            <span className="mr-2">{category.icon}</span>
            {category.name}
          </button>
        ))}
      </div>
    </div>
  );
}
