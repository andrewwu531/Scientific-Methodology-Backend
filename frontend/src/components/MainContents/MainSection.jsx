import PropTypes from "prop-types";
import Footer from "../../components/Footer/Footer";

export default function MainSection({ categoryData, courseData }) {
  const backendURL = "http://localhost:8000"; // URL of your Django server
  if (!categoryData || categoryData.length === 0 || courseData.length === 0) {
    return <div>Loading...</div>;
  }

  const firstItem = categoryData[0];
  if (!firstItem || typeof firstItem.course_url !== "string") {
    console.error("Data format is incorrect:", categoryData); // Log incorrect data format
    return <div>Error: Data format is incorrect</div>;
  }

  const seriesMap = categoryData.reduce((acc, video) => {
    if (!acc[video.video_series_name]) {
      acc[video.video_series_name] = [];
    }
    acc[video.video_series_name].push(video);
    console.log("seriesMap:", acc);
    console.log("seriesMap.video_icon", courseData.course_banner);
    console.log("courseData.course_banner", courseData.course_banner);
    return acc;
  }, {});

  return (
    <div>
      <div className="flex flex-col pb-16 pl-8 overflow-auto pt-7 scrollbar-thin scrollbar-thumb-rounded bg-black-1 scrollbar-thumb-gray-800 scrollbar-thumb-hover-gray-600">
        <div className="pb-6 text-2xl font-bold text-neutral-100">
          {courseData.course_title}
        </div>
        <div className="h-40 mr-60">
          <img
            src={`${backendURL}/${courseData.course_banner}`}
            alt="banner"
            className="object-cover w-full h-full rounded-lg"
          />
        </div>

        {Object.keys(seriesMap).map((seriesName, seriesIndex) => (
          <div key={seriesIndex}>
            <div className="pb-4 pl-3 text-lg font-bold pt-9 text-neutral-300">
              Series {seriesIndex + 1} : {seriesName}
            </div>
            {seriesMap[seriesName].map((video, index) => (
              <div
                key={index}
                className="flex flex-row items-center justify-between pt-3 mr-8 rounded-tl-lg rounded-tr-lg bg-neutral-900"
              >
                <div className="flex flex-row items-center justify-start">
                  <div className="ml-5 h-7">
                    <img
                      src={`${backendURL}/${video.video_icon}`}
                      alt="icon"
                      className="object-cover w-full h-full rounded-md"
                    />
                  </div>
                  <div className="px-5 py-1 font-sans text-small">
                    {`S${video.video_series}`} <span>&nbsp;</span>
                    {`S${video.video_episode}`} <span>&nbsp; &nbsp;</span>
                    {`${video.video_title}`}
                  </div>
                </div>
                <div className="flex flex-row items-center">
                  <div className="w-32 mr-7 h-0.5 bg-green-600 rounded-full"></div>
                  <div className="text-sm mr-7">32:51</div>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
}

MainSection.propTypes = {
  courseData: PropTypes.arrayOf(
    PropTypes.shape({
      course_url: PropTypes.string.isRequired,
      course_name: PropTypes.string.isRequired,
      course_category: PropTypes.string.isRequired,
      course_title: PropTypes.string.isRequired,
      course_banner: PropTypes.string.isRequired,
    })
  ),
  categoryData: PropTypes.arrayOf(
    PropTypes.shape({
      course_url: PropTypes.string.isRequired,
      video_title: PropTypes.string.isRequired,
      video_subscription_type: PropTypes.string.isRequired,
      video_series_name: PropTypes.string.isRequired,
      video_series: PropTypes.string.isRequired,
      video_episode: PropTypes.string.isRequired,
      video_icon: PropTypes.string.isRequired,
      video_video: PropTypes.string.isRequired,
      video_essay: PropTypes.string.isRequired,
    })
  ),
};
