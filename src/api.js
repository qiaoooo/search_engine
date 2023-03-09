import axios from "axios";

const seachImages = async (term) => {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      Authorization: "Client-ID WZB08hY8QyiNJjWvhDMHzXcgJcCEUJ2Ue5YnHlv8otM",
    },
    params: {
      query: term,
    },
  });

  /* console.log(response.data.results); */
  return response.data.results;
};

export default seachImages;
