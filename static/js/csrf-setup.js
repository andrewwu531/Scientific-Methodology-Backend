import axios from "axios";
import Cookies from "js-cookie";

// Get CSRF token from the cookie
const csrftoken = Cookies.get("csrftoken");

axios.defaults.headers.common["X-CSRFToken"] = csrftoken;

// Example request
axios
  .post("/api/your-endpoint/", {
    // your data
  })
  .then((response) => {
    console.log(response.data);
  })
  .catch((error) => {
    console.error("Error:", error);
  });
